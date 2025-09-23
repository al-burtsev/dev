import "./style.css";
import gsap from "gsap";

import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

gsap.to(".box", {
  x: 500,
  rotate: 360,
  duration: 3,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".box",
    start: "top center",
    end: "bottom 20%",
    markers: true,
    scrub: 1.5,
  },
});
