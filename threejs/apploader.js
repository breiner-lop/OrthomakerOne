import * as THREE from './three.module'
import * as orbit from './extensions/OrbitControls'
import { GLTFLoader } from './extensions/GLTFLoader'
import * as STL from './extensions/STLExporter'

var textboxencaje;
var textboxpilar;
var screensize = { x: 640, y: 480 };
var colorCarcaza;
var colorPie;
var colorPlastic;
var loading;
var MedidaAB;
var MedidaBC;


var objetos = { encaje: null, hueso: null, carcaza: null }

function loadSingleObject(object) {
    var metadata = { generator: "Object3D.toJSON", type: "Object", version: 4.5 };
    return { metadata, object };
}

function convertSTL(object) {
    var stl = new STL.STLExporter();
    return stl.parse(object, { binary: false });
}

function convertToBlob(obj) {
    return new Blob([obj], { type: 'text/plain' });
}

 export function downloadpiece(data, name) {

    var a = document.createElement('a');
    document.body.appendChild(a);
    var blob = new Blob([data], { type: 'text/plain' });
    var url = window.URL.createObjectURL(blob);
    a.href = url;
    a.download = name;
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
}

function preparescene(json) {
    var scene = new THREE.Scene();
    scene.name = "mainScene";
    scene.background = new THREE.Color(1, 1, 1);

    var light = new THREE.DirectionalLight(0xffffff, 1);
    light.castShadow = true;
    scene.add(light);
    light.position.set(0, 1, 0);

    var ambl = new THREE.AmbientLight(0xffffff, 1);
    scene.add(ambl);

    const camera = new THREE.PerspectiveCamera(50, screensize.x / screensize.y, 0.1, 10)
    // camera.position.y = 2;
    camera.position.z = 4;

    //-----------------------------------------------------

    new GLTFLoader().load("/model/piece.glb", function (obj) {
        obj.scene.scale.set(0.01, 0.01, 0.01);
        obj.scene.position.y = -1.5;
        obj.scene.name = "pieces";

        colorCarcaza = obj.scene.getObjectByName("encajemodel")
            
        colorPie = obj.scene.getObjectByName("Ensamblaje_FINAL_PININA_-_PIE_PROTESIS-1");
        colorPlastic = obj.scene.getObjectByName("Ensamblaje_FINAL_PININA_-_guia_pequeña_pinina-1")

        objetos.encaje = obj.scene.getObjectByName("encajemodel");
        objetos.hueso = obj.scene.getObjectByName("hueso_Pierna");
        objetos.carcaza = obj.scene.getObjectByName("carcaza_Pierna");

        scene.add(obj.scene);
        setinput(obj.scene);
        loading.style.display = 'none';
    })

    // button.onclick = function () {
    //     const stl = new STL.STLExporter();
    //     var encaje = scene.getObjectByName("encajemodel");
    //     var huesopierna = scene.getObjectByName("hueso_Pierna");
    //     var carcaza = scene.getObjectByName("carcaza_Pierna");

    //     downloadpiece(convertSTL(encaje), "enclaje");
    //     downloadpiece(convertSTL(huesopierna), "hueso");
    //     downloadpiece(convertSTL(carcaza), "carcaza");
    // }

    // ------------------------------------------------
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
     window.piecedowntop = object.getObjectByName("PieceDownTop");
     window.piecetoptop = object.getObjectByName("PieceTopTop");

            piecedowntop.position.y = MedidaBC;
            piecetoptop.position.y = MedidaAB;
}

export default async function threejsLoader(AB,BC) {

    MedidaAB = AB;
    MedidaBC = BC;
    var domMain = document.getElementById("threejsroot");
    screensize.x = domMain.clientWidth;
    screensize.y = domMain.clientHeight;

    // Loading Screen 
    loading = document.createElement("div");
    loading.innerHTML = "<p>Cargando...</p>";
    loading.style.backgroundColor = 'rgb(0,0,0,0.5)';
    loading.style.width = screensize.x + "px";
    loading.style.height = screensize.y + "px";
    loading.style.position = 'fixed';
    loading.style.textAlign = 'center';
    loading.style.color = 'white';
    domMain.appendChild(loading);
    domMain.style.boxShadow = "-1px -1px 8px 0px";

    //load render
    const render = window.render = new THREE.WebGLRenderer({ logarithmicDepthBuffer: true, antialias: true });
    render.setSize(screensize.x, screensize.y);
    domMain.append(render.domElement);

    preparescene();
}

export function changeColor(color) {
    colorCarcaza.material.color.set(color);
}

export function changePlasticColor (color) {
    colorPie.material.color.set(color);
    colorPlastic.material.color.set(color)
}

export function getObjects() {

    var stlobj = {
        encaje: convertToBlob(convertSTL(objetos.encaje)),
        hueso: convertToBlob(convertSTL(objetos.hueso)),
        carcaza: convertToBlob(convertSTL(objetos.carcaza))
    }

    return stlobj;
}