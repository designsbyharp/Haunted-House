/**
 * Lights: Moon light/Directional light and Ambient light
 */

import { AmbientLight, DirectionalLight, Group } from "three"

// Lights Group
export const lightsGroup = () => {

  // Lights Group
  const lightsGroup = new Group();

  // Directional Light
  const dLight = createDirectionalLight();
  lightsGroup.add(dLight);

  // Ambient Light
  const ambLight = createAmbientLight();
  lightsGroup.add(ambLight);

  return lightsGroup;
}

// Directional Light
const createDirectionalLight =()=> {

  // Instaniate
  const directionalLight = new DirectionalLight('#ffffff', 0.5);

  return directionalLight;
}

// Ambient Light
const createAmbientLight = ()=> {

  // Instaniate
  const ambientLight = new AmbientLight('#ffffff', 0.5);

  return ambientLight;
}