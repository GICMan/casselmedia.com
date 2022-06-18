import { Component, createEffect, onMount, Ref } from "solid-js";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Home from "./pages/Home";
import About from "./pages/About";

import styles from "./App.module.css";

const App: Component = () => {
  let appRef: any;
  let homeRef: any, homeProgressRef: any;
  let aboutRef: any, aboutProgressRef: any;

  let mobile: boolean = false;

  const createTween = (target: any, trigger: any, horizontal: boolean) => {
    let options = {
      scrollTrigger: {
        horizontal,
        trigger,
        scroller: appRef,
        start: horizontal ? "left left" : "top top",
        scrub: true
      }
    };

    if (horizontal) {
      options.width = 100;
      gsap.set(target, { height: 6, width: 0 });
    } else {
      options.height = 100;
      gsap.set(target, { height: 0, width: 6 });
    }

    gsap.to(target, options);
  };

  const updateProgressBar = () => {
    if (window.innerWidth <= 500 && mobile === false) {
      mobile = true;
      createTween(homeProgressRef, homeRef, true);
      createTween(aboutProgressRef, aboutRef, true);
    } else if (window.innerWidth > 500 && mobile === true) {
      mobile = false;
      createTween(homeProgressRef, homeRef, false);
      createTween(aboutProgressRef, aboutRef, false);
    }
  };

  onMount(() => {
    gsap.registerPlugin(ScrollTrigger);
    window.addEventListener("resize", updateProgressBar);
    if (window.innerWidth <= 500) {
      mobile = false;
    } else {
      mobile = true;
    }

    updateProgressBar();
  });

  return (
    <div class={styles.App} ref={appRef}>
      <div class={styles.progressBar}>
        <span class={styles.bar}>
          <span class={styles.progress} ref={homeProgressRef}></span>
        </span>
        <span class={styles.bar}>
          <span class={styles.progress} ref={aboutProgressRef}></span>
        </span>
      </div>
      <Home ref={homeRef} />
      <About ref={aboutRef} />
    </div>
  );
};

export default App;
