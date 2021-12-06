import * as THREE from './three.module'
import * as orbit from './extensions/OrbitControls'
import { GLTFLoader } from './extensions/GLTFLoader'
import * as STL from './extensions/STLExporter'

var textboxpierna;
var textboxEnclaje;
var button;
var screensize = { x: 640, y: 480 };

function changeprop(object) {




}


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
    camera.position.z = 6;

    //-----------------------------------------------------

    new GLTFLoader().load("/model/piece.glb", function (obj) {
        obj.scene.scale.set(0.01, 0.01, 0.01);
        obj.scene.position.y = -1.5;
        obj.scene.name = "pieces";

        changeprop(obj.scene);
        scene.add(obj.scene);
        setinput(obj.scene);
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

    const orb = new orbit.OrbitControls(camera, window.render.domElement);
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
    textboxpierna.setAttribute("value", (piecedowntop.position.y / 10).toFixed(2));
    textboxpierna.addEventListener("change", function (val) {
        var medida = val.target.value;
        if (medida <= 23 && medida >= 2) {
            piecedowntop.position.y = (medida * 10);
        }
    });

    textboxEnclaje.setAttribute("value", (piecetoptop.position.y / 10).toFixed(2));
    textboxEnclaje.addEventListener("change", function (val) {
        var medida = val.target.value;
        if (medida <= 24 && medida >= 10) {
            piecetoptop.position.y = (medida * 10);
        }
    });

}

export default async function threejsLoader() {

    textboxpierna = document.getElementById("txt1");
    textboxEnclaje = document.getElementById("txt2");
    button = document.getElementById("btn1");

    screensize.x = 800;
    screensize.y= 600;

    const render = window.render = new THREE.WebGLRenderer({ logarithmicDepthBuffer: true, antialias: true });
    render.setSize(screensize.x, screensize.y);
    document.getElementById("threejsroot").append(render.domElement);

    preparescene();
}