// Import the THREE.js library
import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";
// To allow for the camera to move around the scene
import { OrbitControls } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js";
// To allow for importing the .gltf file
import { GLTFLoader } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js";

// Create a Three.JS Scene
const scene = new THREE.Scene();
// Create a new camera with positions and angles
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// Keep track of the mouse position, so we can make the shoe move
let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;
let isMouseDown = false;

// Keep the 3D object on a global variable so we can access it later
let object;

// Set which object to render
const objToRender = 'car1';

// Instantiate a loader for the .gltf file
const loader = new GLTFLoader();

// Load the file
loader.load(
`./3dmodels/${objToRender}/scene.gltf`,
  function (gltf) {
    // If the file is loaded, add it to the scene
    object = gltf.scene;
    scene.add(object);

  object.traverse((child) => {
    if (child.isMesh) {
      child.material.metalness = 0.5;
      child.material.roughness = 0.5;
    }
  });

    // Adjust the scale to make it bigger
    object.scale.set(1, 1, 1); // Increase the scale as needed

    console.log("Model loaded and added to the scene");
  },
  function (xhr) {
    // While it is loading, log the progress
    console.log((xhr.loaded / xhr.total * 100) + '% loaded');
  },
  function (error) {
    // If there is an error, log it
    console.error(error);
  }
);

// Instantiate a new renderer and set its size
const renderer = new THREE.WebGLRenderer({ alpha: false }); // Alpha: false allows for the non-transparent background
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x111111); // Set background color to black

// Add the renderer to the DOM
document.getElementById("container3D").appendChild(renderer.domElement);

// Set how far the camera will be from the 3D model
camera.position.z = 10;
camera.position.y = 2;

// Add lights to the scene, so we can actually see the 3D model
const topLight = new THREE.DirectionalLight(0xffffff, 3); // Reduced intensity
topLight.position.set(500, 500, 500);
topLight.castShadow = true;
scene.add(topLight);

const ambientLight = new THREE.AmbientLight(0x666666, 2.5);
scene.add(ambientLight);

const additionalLight = new THREE.PointLight(0xffffff, 1.5);
additionalLight.position.set(-200, 200, 200); // Moved to opposite side
scene.add(additionalLight);

const fillLight = new THREE.DirectionalLight(0xffffff, 1);
fillLight.position.set(-200, 0, -200);
scene.add(fillLight);

const spotlight = new THREE.SpotLight(0xffffff, 2); // Reduced intensity
spotlight.position.set(0, 500, 500); // Adjusted position
spotlight.angle = Math.PI / 4; // Widened angle
spotlight.penumbra = 0.2; // Increased edge softness
spotlight.decay = 1.5;
spotlight.distance = 2000;
scene.add(spotlight);

spotlight.target.position.set(0, 0, 0); // Point to center of scene
scene.add(spotlight.target);

// Add light helpers for debugging
const lightHelpers = [
  new THREE.DirectionalLightHelper(topLight),
  new THREE.PointLightHelper(additionalLight),
  new THREE.DirectionalLightHelper(fillLight),
  new THREE.SpotLightHelper(spotlight)
];
lightHelpers.forEach(helper => scene.add(helper));

// Create an OrbitControls instance to allow the user to rotate the scene
const controls = new OrbitControls(camera, renderer.domElement);

// Render the scene
function animate() {
  requestAnimationFrame(animate);

  // Continuous rotation
  if (object) {
    object.rotation.y += 0.01; // Adjust the rotation speed as needed

    // Make the shoe move only if the mouse is pressed
    if (isMouseDown) {
      object.rotation.y = -3 + mouseX / window.innerWidth * 3;
      object.rotation.x = -1.2 + mouseY * 2.5 / window.innerHeight;
    }
  }

  controls.update(); // Update the OrbitControls
  lightHelpers.forEach(helper => helper.update());
  renderer.render(scene, camera);
}

// Add a listener to the window, so we can resize the window and the camera
window.addEventListener("resize", function () {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// Track mouse button press and release
document.addEventListener('mousedown', () => {
  isMouseDown = true;
});

document.addEventListener('mouseup', () => {
  isMouseDown = false;
});

// Update mouse position listener
document.onmousemove = (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
}

// Start the 3D rendering
animate();