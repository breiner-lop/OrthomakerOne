import * as THREE from './three.module'
import * as orbit from './extensions/OrbitControls'
import { GLTFLoader } from './extensions/GLTFLoader'
import * as STL from './extensions/STLExporter'

var textboxencaje;
var textboxpilar;
var screensize = { x: 640, y: 480 };
var colorMaterial;
var loading;


function loadSingleObject(object) {
    var metadata = { generator: "Object3D.toJSON", type: "Object", version: 4.5 };

    return { metadata, object };

}

function convertSTL(object) {
    var stl = new STL.STLExporter();
    return stl.parse(object, { binary: false });
}

function downloadpiece(data, name) {

    var a = document.createElement('a');
    document.body.appendChild(a);
    var blob = new Blob([data], { type: 'text/plain' });
    var url = window.URL.createObjectURL(blob);
    a.href = url;
    a.download = name + ".stl";
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
}

function preparescene(json) {
    var scene = new THREE.Scene();
    scene.name = "mainScene";
    scene.background = new THREE.Color(1, 1, 1);
    window.mainscene = scene;

    var light = new THREE.DirectionalLight(0xffffff, 1);
    light.castShadow = true;
    scene.add(light);

    light.position.set(0, 1, 2);

    var ambl = new THREE.AmbientLight(0xffffff, 1);
    scene.add(ambl);

    window.camera = new THREE.PerspectiveCamera(50, screensize.x / screensize.y, 0.1, 10)
    // camera.position.y = 2;
    camera.position.z = 4;

    //-----------------------------------------------------

    new GLTFLoader().load("/model/piece.glb", function (obj) {
        obj.scene.scale.set(0.01, 0.01, 0.01);
        obj.scene.position.y = -1.5;
        obj.scene.name = "pieces";

        colorMaterial =  obj.scene.getObjectByName("encajemodel")
        window.mat = colorMaterial;
        
        scene.add(obj.scene);
        setinput(obj.scene);
         loading.style.display='none';
    })

    // button.onclick = function () {
    //     const stl = new STL.STLExporter();
    //     var encaje = scene.getObjectByName("enclaje");
    //     var huesopierna = scene.getObjectByName("hueso_Pierna");
    //     var carcaza = scene.getObjectByName("carcaza_Pierna");

    //     downloadpiece(convertSTL(encaje), "enclaje");
    //     downloadpiece(convertSTL(huesopierna), "hueso");
    //     downloadpiece(convertSTL(carcaza), "carcaza");
    // }

    // ------------------------------------------------
    camera = window.camera;

    const orb = window.orbit = new orbit.OrbitControls(camera, window.render.domElement);
    orb.enableZoom = false;
    orb.enablePan = false;
    orb.autoRotate = true;

    loadRender({ scene, camera });
}

function loadRender(objects) {

    var loop = function () {
        requestAnimationFrame(loop);
        render.render(objects.scene, objects.camera);
    }
    loop();
}

function setinput(object) {
    // Bones  
    var piecedowntop = object.getObjectByName("PieceDownTop");
    var piecetoptop = object.getObjectByName("PieceTopTop");

    //--------------------------------------------

    // ---------------------------------------------
    // input fields 
    textboxencaje.setAttribute("value", (piecedowntop.position.y / 10).toFixed(2));
    textboxencaje.addEventListener("change", function (val) {
        var medida = val.target.value;
        if (medida <= 23 && medida >= 2) {
            piecedowntop.position.y = (medida * 10);
        }
    });

    textboxpilar.setAttribute("value", (piecetoptop.position.y / 10).toFixed(2));
    textboxpilar.addEventListener("change", function (val) {
        var medida = val.target.value;
        if (medida <= 24 && medida >= 10) {
            piecetoptop.position.y = (medida * 10);
        }
    });

}

export default async function threejsLoader() {

   

    textboxencaje = document.getElementById("txt1");
    textboxpilar = document.getElementById("txt2");
    var domMain = document.getElementById("threejsroot");
    screensize.x = domMain.clientWidth;
    screensize.y= domMain.clientHeight;

    // Loading Screen 
    loading= window.loading = document.createElement("div");
   loading.innerHTML="<p>Cargando...</p>";
    loading.style.backgroundColor = 'rgb(0,0,0,0.5)';
    loading.style.width=screensize.x+"px";
    loading.style.height=screensize.y+"px";
    loading.style.position='fixed';
    loading.style.textAlign='center';
    loading.style.color='white';
    domMain.appendChild(loading);
    domMain.style.boxShadow = "-1px -1px 8px 0px";

    const render = window.render = new THREE.WebGLRenderer({ logarithmicDepthBuffer: true, antialias: true });
    render.setSize(screensize.x, screensize.y);
    domMain.append(render.domElement);

    preparescene();
}

export function changeColor(color){
colorMaterial.material.color.set(color);
}