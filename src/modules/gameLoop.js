/**
 * Game Loop - render scene and camera, animation frame
 */

export const gameLoop = (renderer, scene, camera, orbitControls)=>{

  // Set up loop properties
  const gameLoopSetup = () => {

    // Update orbit controls
    orbitControls.update();
    
    // render
    renderer.render(scene, camera);

    // animation frame
    window.requestAnimationFrame(gameLoopSetup);
  }
  
  // Intialize
  gameLoopSetup();
}
