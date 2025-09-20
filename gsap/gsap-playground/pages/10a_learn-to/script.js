import gsap from "gsap";


// var1 with yoyo
// const showToastLoop = () => {
//     gsap.to('.toast', {
//         y: 0,
//         opacity: 1,
//         scale: 1,
//         duration: 0.8,
//         yoyo: true,
//         repeat: -1,
//         repeatDelay: 2.5,
//         ease: 'power4.out'
//     })
// };

//var2 with callbacks
// const showToastLoop = () => {
//     gsap.to('.toast', {
//         y: 0,
//         opacity: 1,
//         scale: 1,
//         duration: 0.8,
//         ease: 'power4.out',
//         onComplete: () => {
//             gsap.to('.toast', {
//                 delay: 2.5,
//                 y: 100,
//                 opacity: 0,
//                 scale: 0.95,
//                 duration: 0.7,
//                 ease: 'power.in',
//                 onComplete: () => {
//                     setTimeout(showToastLoop, 2500);
//                 }
//             })
//         }
//     })
// };

// var3 with Timeline
const showToastLoop = () => {
  const tl = gsap.timeline({ repeat: -1, repeatDelay: 2.5 });
  
  tl.to('.toast', {
    y: 0,
    opacity: 1,
    scale: 1,
    duration: 0.8,
    ease: 'power4.out'
  })
  .to('.toast', {
    y: 100,
    opacity: 0,
    scale: 0.95,
    duration: 0.7,
    delay: 2.5,
    ease: 'power.in'
  });
};

showToastLoop();
