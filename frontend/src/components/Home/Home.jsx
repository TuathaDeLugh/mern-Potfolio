import React, { useEffect } from 'react';
import * as THREE from "three";
import { Typography } from "@mui/material";
//import "./home.css";
import moonimage from "../../Images/moon.jpg" 
import venusimage from "../../Images/venus.jpg" 
import spaceimage from "../../Images/space.jpg";



import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
function Home ()  {
  useEffect(()=>{

    const textureLoader = new THREE.TextureLoader();

    const scene = new THREE.Scene();
    const camara = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const spaceTexture = textureLoader.load(spaceimage);
    const canvas = document.querySelector(".homeCanvas");
    const renderer = new THREE.WebGLRenderer({ canvas });


    const moongeometry = new THREE.SphereGeometry(2,64,64);
    const moontexture = textureLoader.load(moonimage);
    const moonmatrial = new THREE.MeshStandardMaterial({map: moontexture});
    const moon =  new THREE.Mesh(moongeometry,moonmatrial);



    const venusgeometry = new THREE.SphereGeometry(3,64,64);
    const venustexture = textureLoader.load(venusimage);
    const venusmatrial = new THREE.MeshBasicMaterial({map: venustexture});
    const venus =  new THREE.Mesh(venusgeometry,venusmatrial);
    venus.position.set(8,5,5);    

    


    


      const pointlight = new THREE.PointLight(0xffffff,1);
      const pointLight2 = new THREE.PointLight(0xffffff, 0.1);
      pointlight.position.set(8,5,5);
      pointLight2.position.set(-8, -5, -5);
      const lightheper = new THREE.PointLightHelper(pointlight);

   // const control = new OrbitControls(camara,renderer.domElement);
      scene.add(moon);
      scene.add(venus);


      scene.add(pointlight);
      scene.add(pointLight2);
      scene.add(lightheper);
      scene.background = spaceTexture;
      camara.position.set(4,4,8);

      const constSpeed = 0.001;
      window.addEventListener("mousemove",(e)=>{
        if(e.clientX<=window.innerWidth/2){
          moon.rotation.x -= constSpeed;
          moon.rotation.y += constSpeed; 
          venus.rotation.x -= constSpeed;
          venus.rotation.y += constSpeed; 
        }
        if(e.clientX>window.innerWidth/2){
          moon.rotation.x -= constSpeed;
          moon.rotation.y -= constSpeed; 
          venus.rotation.x -= constSpeed;
          venus.rotation.y -= constSpeed; 
        }
        if (e.clientY > window.innerHeight / 2) {
          moon.rotation.x -= constSpeed;
          moon.rotation.y += constSpeed;
          venus.rotation.x -= constSpeed;
          venus.rotation.y += constSpeed;
        }
  
        if (e.clientY <= window.innerHeight / 2) {
          moon.rotation.x -= constSpeed;
          moon.rotation.y -= constSpeed;
          venus.rotation.x -= constSpeed;
          venus.rotation.y -= constSpeed;
        }
      })
   
      const animate = () =>{
        requestAnimationFrame(animate);

        venus.rotation.y += 0.001;
        moon.rotation.y += 0.001;
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