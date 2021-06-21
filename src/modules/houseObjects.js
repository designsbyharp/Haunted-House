/**
 * House objects:
 * 
 * 1. Base
 * 2. Roof
 * 3. Door
 * 
 * Add to a group and then export group
 */

import { BoxBufferGeometry, Mesh, Group, MeshStandardMaterial, ConeBufferGeometry } from "three";

// Create house
export const createHouse = () => {

  // Group
  const houseGroup = new Group();

  // House objects
  const base = createBase();
  const roof = createRoof();

  // Add objects to group
  houseGroup.add(base);
  houseGroup.add(roof);


  return houseGroup;
}

// Create base
function createBase(){

  // Instaniate cube
  const base = new Mesh(
    new BoxBufferGeometry( 4, 2.5, 4 ),
    new MeshStandardMaterial({ color: '#ac8e82 '})
  );
  
  // Position
  base.position.y = 1.25;

  return base;
}

// Create roof
function createRoof(){

  // Instaniate roof
  const roof = new Mesh(
    new ConeBufferGeometry( 3.5, 1, 4 ),
    new MeshStandardMaterial({ color: '#b35f45' })
  );

  // Rotation and positioning
  roof.rotation.y = Math.PI * 0.25;
  roof.position.y = 2.5 + 0.5;

  return roof;
}

