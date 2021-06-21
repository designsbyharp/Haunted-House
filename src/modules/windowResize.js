/**
 * Window resize 
 */

export const windowResizeSettings =(sizes, camera, renderer)=>{

  // Resize sizes.width and sizes.height 
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  // Update Camera aspect ratio and updateProjectionMatrix
  camera.aspectRatio = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  // Set renderer size and set pixelRatio
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

}

export default windowResizeSettings;