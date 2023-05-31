import React, { useEffect } from 'react';
import * as THREE from "three";
function Home ()  {
  useEffect(()=>{
    const scene = new THREE.Scene();
    const camara = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const canvas = document.querySelector(".homeCanvas");
    const renderer = new THREE.WebGLRenderer({ canvas });
    const geometry = new THREE.BoxGeometry(1,1,1);
    
    const matrial = new THREE.MeshBasicMaterial({color: 0xFF69B4});
      const mesh =  new THREE.Mesh(geometry,matrial);
      scene.add(mesh);
   
      camara.position.z=5;
   
      const animate = () =>{
        requestAnimationFrame(animate);


        mesh.rotation.x += 0.01;
        mesh.rotation.y += 0.02;
        mesh.rotation.z += 0.03;
        renderer.setSize((window.innerWidth),window.innerHeight);
         renderer.render(scene,camara);
      }
      animate();

  },[]);
  return (
    <div className='home'>
      <canvas className='homeCanvas'></canvas>
    </div>
  );
};

export default Home