import React, { useEffect } from 'react';
import * as THREE from "three";
import { Typography } from "@mui/material";
import "./home.css";
import moonimage from "../../Images/moon.jpg" 
import venusimage from "../../Images/venus.jpg" 
import spaceimage from "../../Images/space.jpg";
import {
  SiReact,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiExpress,
  SiCss3,
  SiHtml5,
  SiThreedotjs,
  SiFirebase,
  SiNextdotjs,
  SiTypescript,
  SiMysql,
  SiSass,
  SiPhp,
  SiTailwindcss,
  SiBootstrap,
  SiMui,
} from "react-icons/si";


import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import TimeLine from '../TimeLine/TimeLine';
import YoutubeCard from '../YoutubeCard/YoutubeCard';
import { MouseOutlined } from '@mui/icons-material';
import { Link } from 'react-router-dom';

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

  //  const control = new OrbitControls(camara,renderer.domElement);
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

      return window.addEventListener("scroll", () => {
        camara.rotation.z = window.scrollY * 0.001;
        camara.rotation.y = window.scrollY * 0.003;
  
        const skillBox1 = document.getElementById("homeSkillBox1");
        const skillBox2 = document.getElementById("homeSkillBox2");

  
        if (window.scrollY > 1500) {
          skillBox1.style.animationName = "homeskillsBox1AnimationOn";
          skillBox2.style.animationName = "homeskillsBox2AnimationOn";

        } else {
          skillBox1.style.animationName = "homeskillsBox1AnimationOff";
          skillBox2.style.animationName = "homeskillsBox2AnimationOff";

        }
      });

  },[]);
  return (
    <div className='home'>
      <canvas className='homeCanvas'></canvas>
      <div className="homeCanvasContainer">
        <Typography variant="h2">
          <p>U</p>
          <p>M</p>
          <p>A</p>
          <p>N</p>
          <p>G</p>
          <p>S</p>
          <p>A</p>
          <p>I</p>
          <p>L</p>
          <p>O</p>
          <p>R</p>
        </Typography>

        <div className="homeCanvasBox">
        <Typography variant="h2">WEB</Typography>
          <Typography variant="h2">DESIGNER</Typography>
          <Typography variant="h2">DEVELOPER</Typography>
          <Typography variant="h2">//GAMER</Typography>
        </div>

        <Link to="/projects">VIEW WORK</Link>
      </div>

      <div className="homeScrollBtn">
        <MouseOutlined />
      </div>
      <div className="homeContainer">

      <Typography variant='h3'>TIMELINE</Typography>
      <TimeLine timelines={[1,2,3,4]}/>
      </div>
      <div className="homeSkills">
        <Typography variant='h3'>SKILLS</Typography>
        <div className="homeCubeSkills">
          <div className="homeCubeSkillsFaces homeCubeSkillsFace1">
            <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" alt="" />
          </div>
          <div className="homeCubeSkillsFaces homeCubeSkillsFace2">
            <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" alt="" />
          </div>
          <div className="homeCubeSkillsFaces homeCubeSkillsFace3">
            <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" alt="" />
          </div>
          <div className="homeCubeSkillsFaces homeCubeSkillsFace4">
            <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" alt="" />
          </div>
          <div className="homeCubeSkillsFaces homeCubeSkillsFace5">
            <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" alt="" />
          </div>
          <div className="homeCubeSkillsFaces homeCubeSkillsFace6">
            <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" alt="" />
          </div>
        </div>
        <div className="cubeShadow"></div>
        <div className="homeSkillBox homeSkillBox1" id='homeSkillBox1'>
          <SiHtml5 />
          <SiCss3 />
          <SiTailwindcss/>
          <SiBootstrap/>
          <SiSass/>
          <SiMui/>
          <SiJavascript />
          <SiReact />
                    
        </div>
        <div className="homeSkillBox homeSkillBox2 " id='homeSkillBox2'>
          
          <SiTypescript/>
          <SiNextdotjs/>
          <SiNodedotjs />
          <SiExpress />
          <SiMongodb />
          <SiFirebase />
          <SiMysql/>
          <SiPhp/>        
        </div>
      </div>

      <div className="homeYoutube">
      <Typography variant='h3'>YOUTUBE VIDEOS</Typography>
      <div className="homeYoutubeWrapper">
      <YoutubeCard
      image="{item.image.url}"
      title="{item.title}"
      url="{item.url}"
      id="{item._id}"
      key="{item._id}"/>
      <YoutubeCard
      image="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"/>
      <YoutubeCard/>
      <YoutubeCard/>
      <YoutubeCard/>
      <YoutubeCard/>
      <YoutubeCard/>

      </div>
      </div>
    </div>
  );
};

export default Home