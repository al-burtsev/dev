import './style.css'
import gsap from 'gsap';
import { SplitText } from 'gsap/all';

gsap.registerPlugin(SplitText);

const splitTitle = new SplitText('.title', { type: 'chars' });
const mm = gsap.matchMedia();

mm.add("(max-width: 500px)", () => {
  gsap.to('.box1', {
    rotation: 360,
    duration: 1,
  })
})
mm.add("(min-width: 501px)", () => {
  gsap.to('.box1', {
    rotation: -360,
    duration: 1,
  })
})
mm.add("(min-width: 501px)", () => {
  const tl = gsap.timeline();
  tl
    .to('.box2', {
      rotation: 360,
      borderRadius: '1rem',
    })
    .to('.box2', {
      scale: 0.5,
    })
})
mm.add({
  isDesktop: "(min-width: 501px)",
  isMobile: "(max-width: 500px)",
}, (context) => {

  const { isMobile } = context.conditions;

  gsap.to('.box', {
    rotation: isMobile ? -360 : 360,
    duration: 1,
    borderRadius: '1rem',
  })
})