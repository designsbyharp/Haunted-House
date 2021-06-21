/**
 * Create renderer
 */

// Imports 
import { WebGLRenderer } from "three"

export const createRenderer =(domEL, sizes)=>{

  // Instaniate renderer
  const renderer = new WebGLRenderer({canvas: domEL, antialias: true});

  // Set size
  renderer.setSize(sizes.width, sizes.height);

  // Set pixel ratio
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  return renderer;
}
