import { Component } from "solid-js";
import * as THREE from "three";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader.js";

import styles from "./Scene.module.css";

// @ts-ignore
import HDR from "./peppermint_powerplant_2k.hdr";
import Person from "./Photographer.png";

export const Scene: Component = () => {
  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(
    100,
    window.innerHeight / window.innerWidth,
    0.1,
    1000
  );

  camera.position.z = 5;

  new RGBELoader().load(HDR, texture => {
    texture.mapping = THREE.EquirectangularReflectionMapping;
    scene.environment = texture;
  });

  const renderer = new THREE.WebGLRenderer({ alpha: true });
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1;

  const onWindowResize = () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
  };

  onWindowResize();
  window.addEventListener("resize", onWindowResize);

  const handleMouseMove = (e: MouseEvent) => {
    camera.rotation.y = (e.clientX / window.innerWidth - 0.5) * -0.1;
    camera.rotation.x = (e.clientY / window.innerHeight - 0.5) * -0.1;
  };

  const animate = () => {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
  };

  animate();

  return (
    <div class={styles.container} onMouseMove={handleMouseMove}>
      {renderer.domElement}
    </div>
  );
};
