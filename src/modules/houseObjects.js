/**
 * House objects:
 * 
 * 1. Base
 * 2. Roof
 * 3. Door
 * 
 * Add to a group and then export group
 */

import { BoxBufferGeometry, Mesh, Group, MeshStandardMaterial } from "three";

// Create house
function createHouse(){

  // Group
  const houseGroup = new Group();

  // Base
  const base = createBase();

  // Add objects to group
  houseGroup.add(base);


  return houseGroup;
}

// Create base
function createBase(){

  // Instaniate cube
  const base = new Mesh(
    new BoxBufferGeometry(4, 2.5, 4),
    new MeshStandardMaterial({ color: '#ac8e82 '})
  );
  

  return base;
}

