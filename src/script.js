// Imports
import '../src/style.css'
import { setup } from './modules/setup';

/**
 * File variables
 */
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

const domEL = document.querySelector('.webgl');
/** */  

window.onload = () => {

  // Set up
  setup(domEL, sizes);
}




// /**
//  * Base
//  */
// // Debug
// const gui = new dat.GUI()
// 
// 
// 
// 
// /**
//  * Textures
//  */
// const textureLoader = new THREE.TextureLoader()
// 
// /**
//  * House
//  */
// // Temporary sphere
// const sphere = new THREE.Mesh(
//     new THREE.SphereGeometry(1, 32, 32),
//     new THREE.MeshStandardMaterial({ roughness: 0.7 })
// )
// sphere.position.y = 1
// scene.add(sphere)
// 
// // Floor
// const floor = new THREE.Mesh(
//     new THREE.PlaneGeometry(20, 20),
//     new THREE.MeshStandardMaterial({ color: '#a9c388' })
// )
// floor.rotation.x = - Math.PI * 0.5
// floor.position.y = 0
// scene.add(floor)
// 
// /**
//  * Lights
//  */
// // Ambient light
// const ambientLight = new THREE.AmbientLight('#ffffff', 0.5)
// gui.add(ambientLight, 'intensity').min(0).max(1).step(0.001)
// scene.add(ambientLight)
// 
// // Directional light
// const moonLight = new THREE.DirectionalLight('#ffffff', 0.5)
// moonLight.position.set(4, 5, - 2)
// gui.add(moonLight, 'intensity').min(0).max(1).step(0.001)
// gui.add(moonLight.position, 'x').min(- 5).max(5).step(0.001)
// gui.add(moonLight.position, 'y').min(- 5).max(5).step(0.001)
// gui.add(moonLight.position, 'z').min(- 5).max(5).step(0.001)
// scene.add(moonLight)
// 
// // Window resize
// window.onresize(()=>{
//   windowResizeSettings(sizes, camera, renderer);
// })
// 
// /**
//  * Camera
//  */
// 
// 
// // Controls
// const controls = new OrbitControls(camera, canvas)
// controls.enableDamping = true
// 
// /**
//  * Renderer
//  */
// const renderer = new THREE.WebGLRenderer({
//     canvas: canvas
// })
// renderer.setSize(sizes.width, sizes.height)
// renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
// 
// /**
//  * Animate
//  */
// const clock = new THREE.Clock()
// 
// const tick = () =>
// {
//     const elapsedTime = clock.getElapsedTime()
// 
//     // Update controls
//     controls.update()
// 
//     // Render
//     renderer.render(scene, camera)
// 
//     // Call tick again on the next frame
//     window.requestAnimationFrame(tick)
// }
// 
// tick()