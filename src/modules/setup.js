// Imports
// import './style.css';
// import * as THREE from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
// import * as dat from 'dat.gui';
import createScene from './scene';
import createCamera from './camera';
import windowResizeSettings from './windowResize';
import { createRenderer } from './renderer';
import { gameLoop } from './gameLoop';
import { createPlane } from './plane';
import { lightsGroup } from './lights';
import { createOrbitControls } from './orbControls';

// Setup
export const setup =(domEL, sizes)=> {
  // Scene
  const scene = createScene();

  // Base camera
  const camera = createCamera(sizes);
  scene.add(camera);

  // Renderer
  const renderer = createRenderer(domEL, sizes);

  // Orbit Controls
  const orbitControls = createOrbitControls(camera, domEL);

  // Gameloop
  gameLoop(renderer, scene, camera, orbitControls);

  // Floor
  const floor = createPlane();
  scene.add(floor);

  // House objects

  // Lights
  const lights = lightsGroup();
  scene.add(lights);

  // Window resize
  window.addEventListener('resize', () => {
    windowResizeSettings(sizes, camera, renderer);
  });
}
/**
 * Base
 */
// Debug
// const gui = new dat.GUI();

/**
 * Textures
 */
// const textureLoader = new THREE.TextureLoader();

/**
 * House
 */
// Temporary sphere
// const sphere = new THREE.Mesh(
//   new THREE.SphereGeometry(1, 32, 32),
//   new THREE.MeshStandardMaterial({ roughness: 0.7 })
// );
// sphere.position.y = 1;
// scene.add(sphere);

// Floor
// const floor = new THREE.Mesh(
//   new THREE.PlaneGeometry(20, 20),
//   new THREE.MeshStandardMaterial({ color: '#a9c388' })
// );
// floor.rotation.x = -Math.PI * 0.5;
// floor.position.y = 0;
// scene.add(floor);

/**
 * Lights
 */
// Ambient light
// const ambientLight = new THREE.AmbientLight('#ffffff', 0.5);
// gui.add(ambientLight, 'intensity').min(0).max(1).step(0.001);
// scene.add(ambientLight);
// 
// // Directional light
// const moonLight = new THREE.DirectionalLight('#ffffff', 0.5);
// moonLight.position.set(4, 5, -2);
// gui.add(moonLight, 'intensity').min(0).max(1).step(0.001);
// gui.add(moonLight.position, 'x').min(-5).max(5).step(0.001);
// gui.add(moonLight.position, 'y').min(-5).max(5).step(0.001);
// gui.add(moonLight.position, 'z').min(-5).max(5).step(0.001);
// scene.add(moonLight);



/**
 * Camera
 */
// 
// // Controls
// const controls = new OrbitControls(camera, canvas);
// controls.enableDamping = true;
// 
// /**
//  * Renderer
//  */
// 
// 
// /**
//  * Animate
//  */
// const clock = new THREE.Clock();
// 
// const tick = () => {
//   const elapsedTime = clock.getElapsedTime();
// 
//   // Update controls
//   controls.update();
// 
//   // Render
//   renderer.render(scene, camera);
// 
//   // Call tick again on the next frame
//   window.requestAnimationFrame(tick);
// };
// 
// tick();
