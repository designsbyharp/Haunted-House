/**
 * Create plane/floor and export
 */

import { Mesh, MeshStandardMaterial, PlaneBufferGeometry } from "three"

export const createPlane = ()=> {

  // Create
  const floor = new Mesh(
    new PlaneBufferGeometry(20, 20),
    new MeshStandardMaterial({ color: '#a9c388' })
  );

  // Position
  floor.position.y = 0;

  // Rotation
  floor.rotation.x = -Math.PI * 0.5;

  return floor;

}