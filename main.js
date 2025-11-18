import * as THREE from "three";
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// const fov = 40;
// const aspect = 2; // the canvas default
// const near = 0.1;
// const far = 1000;
// const camera = new THREE.PerspectiveCamera( fov, aspect, near, far );
// camera.position.z = 120;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  100,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer();
renderer.setClearColor("#1B0B24");
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setAnimationLoop(animate);
document.body.appendChild(renderer.domElement);

// const planeGeometry = new THREE.PlaneGeometry(7, 7);
// const planeMaterial = new THREE.MeshBasicMaterial({
//   color: 0xcccccc
// });
// const plane = new THREE.Mesh(planeGeometry, planeMaterial);
// plane.rotation.x = -Math.PI / 2;
// scene.add(plane);

// const geometry = new THREE.BoxGeometry(1, 1, 1);
// geometry.translate(0, 0, 0.5);
// const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
// const cube = new THREE.Mesh(geometry, material);
// scene.add(cube);

const radius =  2.0;  
const tubeRadius =  1.0;  
const radialSegments = 32;  
const tubularSegments =  32;  
const geometry = new THREE.TorusGeometry(
	radius, tubeRadius,
	radialSegments, tubularSegments );
const material = new THREE.MeshBasicMaterial({ color: "#9CDBC8" });
const donut = new THREE.Mesh(geometry, material);
// donut.position.y = 0.5;
// donut.position.x = 1.0;
donut.rotation.x = 5.0;
// donut.scale.y = 2;
scene.add(donut);

const radius2 =  2.0;  
const tubeRadius2 =  1.0;  
const radialSegments2 = 32;  
const tubularSegments2 =  32;  
const geometry2 = new THREE.TorusGeometry(
	radius2, tubeRadius2,
	radialSegments2, tubularSegments2 );
const material2 = new THREE.MeshBasicMaterial({ color: "#D583DF" });
const donut2 = new THREE.Mesh(geometry2, material2);
donut2.position.y = 0.5;
donut2.position.x = 1.0;
donut2.rotation.x = 5.0;
// donut.scale.y = 2;
scene.add(donut2);

const radius3 =  1.5;  
const tubeRadius3 =  0.5;  
const radialSegments3 = 32;  
const tubularSegments3 =  32;  
const geometry3 = new THREE.TorusGeometry(
	radius3, tubeRadius3,
	radialSegments3, tubularSegments3 );
const material3 = new THREE.MeshBasicMaterial({ color: "#2C3643" });
const donut3 = new THREE.Mesh(geometry3, material3);
donut3.position.y = 0.5;
donut3.position.x = 1.0;
donut3.rotation.x = 5.0;
donut3.scale.set(2, 2, 2);
scene.add(donut3);

camera.position.z = 5;
camera.position.y = 7;
// camera.up.set(0, 0, 1);
camera.lookAt(0, 0, 0);

var frame = 0;

const controls = new OrbitControls(camera, renderer.domElement)
function animate() {
  donut.rotation.x += 0.03;
  donut2.rotation.y += 0.05;
  donut3.scale.y += 0.005;
  donut3.scale.x += 0.005;
  renderer.render(scene, camera);
  controls.update();
}

renderer.setAnimationLoop(animate);


