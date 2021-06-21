/**
 * Create camera and export
 */

import { PerspectiveCamera } from "three";

// Create camera
export const createCamera =(sizes)=> {

  // Instaniate camera
  const camera = new PerspectiveCamera(
    75,
    sizes.width / sizes.height,
    0.1,
    100
  );

  // Position
  camera.position.set(4, 2, 5);

  return camera;
}

export default createCamera;