/**
 * Orbit Controls
 */

// Imports
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export const createOrbitControls = (camera, canvas) => {

  // Instaniate and enable damping
  const orbitControls = new OrbitControls(camera, canvas);
  orbitControls.enableDamping = true;

  return orbitControls;
}