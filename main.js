import * as THREE from "three";

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
const radialSegments = 24;  
const tubularSegments =  24;  
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
const radialSegments2 = 24;  
const tubularSegments2 =  24;  
const geometry2 = new THREE.TorusGeometry(
	radius, tubeRadius,
	radialSegments, tubularSegments );
const material2 = new THREE.MeshBasicMaterial({ color: "#C12EC3" });
const donut2 = new THREE.Mesh(geometry2, material2);
donut2.position.y = 0.5;
donut2.position.x = 1.0;
donut2.rotation.x = 5.0;
// donut.scale.y = 2;
scene.add(donut2);


camera.position.z = 5;
camera.position.y = 7;
// camera.up.set(0, 0, 1);
camera.lookAt(0, 0, 0);

function animate() {
  donut.rotation.x += 0.03;
  donut2.rotation.y += 0.05;
  renderer.render(scene, camera);
}

renderer.setAnimationLoop(animate);


