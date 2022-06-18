import type { Component } from "solid-js";
import { onMount } from "solid-js";

import { gsap } from "gsap";

const ScrollIndicator: Component = () => {
  let path: SVGPathElement;
  let dot: SVGCircleElement;
  onMount(() => {
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 2 });
    tl.to(path, { duration: 1, opacity: 1 }, 0);
    tl.to(path, { duration: 0.5, y: 25, ease: "power2.out" }, 0);
    tl.to(path, { duration: 0.5, opacity: 0 }, 1);
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
        rx="28.5"
        stroke="white"
        stroke-width="6"
      />
      <circle
        // @ts-ignore
        ref={dot}
        cx="32"
        cy="26"
        r="6"
        fill="white"
      />
      <path
        // @ts-ignore
        ref={path}
        d="M21 37L32.44 46L43 37"
        stroke="white"
        stroke-width="6"
        stroke-linecap="round"
        stroke-linejoin="round"
        opacity="0"
      />
    </svg>
  );
};

export default ScrollIndicator;
