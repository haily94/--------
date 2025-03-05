import "../lib/smooth";
import "./styles/style.css";
import Swiper from "swiper";
import "swiper/css";
import { markers } from "../lib/smooth";

import { gsap } from "gsap";
// import { Draggable } from "gsap/Draggable";
// import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
// gsap.registerPlugin(ScrollTrigger,Draggable,MotionPathPlugin);

// 1. 터미널 창에서 npm i 실행한다.
// 2. 깃헙에 올린다.
// 3. npm run dev로 사이트를 연다.
// 4. 코딩 시작.

// const swiper = new Swiper(...);
const swiper = new Swiper(".swiper", {
  // Optional parameters
  // direction: 'vertical',
  loop: true,

  // If we need pagination
  // pagination: {
  //   el: '.swiper-pagination',
  // },

  // // Navigation arrows
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },

  // // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
});

const swiper2 = new Swiper(".bestP_container", {
  slidesPerView: 4,
  spaceBetween: 20,
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },
});




const svg = document.querySelector('.circle_svg');
const length = svg.getTotalLength();

// gsap.set(svg,{strokeDashoffset:length,strokeDasharray:length})


// svg.setAttribute()



ScrollTrigger.create({
  trigger: '.section02',
  start: 'top center',
  end: 'bottom center',
  onEnter:()=>{
    gsap.to('.section2title img',{stagger:0.1,duration:0.9,y:0})
  },
  // animation: ,
  // pin: false,
  // pinSpacing: false,
  // markers: true,
  scrub: true,
})
 
ScrollTrigger.create({
  trigger: '.section04',
  start: 'top center',
  end: 'bottom center',
  onEnter:()=>{
    gsap.to('.section4title img',{stagger:0.1,duration:0.9,y:0})
  },
  // animation: ,
  // pin: false,
  // pinSpacing: false,
  // markers: true,
  scrub: true,
})
 





markers()



