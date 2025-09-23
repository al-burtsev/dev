import "./style.css";
import gsap from "gsap";

import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
  trigger: ".pin-section",
  start: "top center",
  end: "+=500",
  pin: ".box",
  markers: true,
});
