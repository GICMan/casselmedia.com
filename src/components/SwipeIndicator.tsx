import type { Component } from "solid-js";
import { onMount } from "solid-js";

import { gsap } from "gsap";

const ScrollIndicator: Component = () => {
  //   let path: SVGPathElement;
  //   let dot: SVGCircleElement;
  onMount(() => {
    // const tl = gsap.timeline({ repeat: -1, repeatDelay: 2 });
    // tl.to(path, { duration: 1, opacity: 1 }, 0);
    // tl.to(path, { duration: 0.5, y: 25, ease: "power2.out" }, 0);
    // tl.to(path, { duration: 0.5, opacity: 0 }, 1);
  });

  return (
    <svg
      height="50"
      width="40"
      viewBox="0 0 63 98"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="3"
        y="3"
        width="57"
        height="92"
        rx="7"
        stroke="white"
        stroke-width="6"
      />
      <path
        d="M27 60L36 48.56L27 38"
        stroke="white"
        stroke-width="6"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <rect x="16" y="2" width="32" height="8" rx="4" fill="white" />
    </svg>
  );
};

export default ScrollIndicator;
