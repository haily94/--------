import "../lib/smooth";
import "./styles/style.css";
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
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
  // loop: true,

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

const header = document.querySelector('header');
const titles = document.querySelectorAll('.title_container > div');

gsap.set(titles,{y:100,opacity:0}) /* 초기 위치값 */
gsap.to(titles[0],{y:0,opacity:1}) /* 처음 아이템 */


swiper.on('slideChange', function (e) {
  const index = e.realIndex;


  gsap.to(titles,{y:100,opacity:0})

  gsap.to(titles[index],{y:0,opacity:1}) /* 하나씩 등장 */

  if(index === 0){
     header.style.filter = 'brightness(1)'
   
  }

  if(index === 1){
    header.style.filter = 'brightness(0)'
  }

  if(index === 2){
    header.style.filter = 'brightness(1)'
  }
    
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


//⭐️타이틀 애니메이션(스크롤 트리거)
ScrollTrigger.create({
  trigger: '.section02',
  start: 'top center',
  end: 'bottom center',
  onEnter:()=>{
    gsap.to('.section2title img',{stagger:0.1,duration:0.5,y:0})
  },
  // animation: ,
  // pin: false,
  // pinSpacing: false,
  // markers: true,
  scrub: true,
})

ScrollTrigger.create({
  trigger: '.section03',
  start: 'top center',
  end: 'bottom center',
  onEnter:()=>{
    gsap.to('.section3title img',{stagger:0.1,duration:0.5,y:0})
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
    gsap.to('.section4title img',{stagger:0.1,duration:0.5,y:0})
  },
  // animation: ,
  // pin: false,
  // pinSpacing: false,
  // markers: true,
  scrub: true,
})

ScrollTrigger.create({
  trigger: '.section05',
  start: 'top center',
  end: 'bottom center',
  onEnter:()=>{
    gsap.to('.section5_left_textbox img',{stagger:0.1,duration:0.5,y:0})
  },
  // animation: ,
  // pin: false,
  // pinSpacing: false,
  // markers: true,
  scrub: true,
})
 
ScrollTrigger.create({
  trigger: '.section06',
  start: 'top center',
  end: 'bottom center',
  onEnter:()=>{
    gsap.to('.section6_title_box img',{stagger:0.1,duration:0.5,y:0})
  },
  // animation: ,
  // pin: false,
  // pinSpacing: false,
  // markers: true,
  scrub: true,
})
 
// ❓❓❓❓❓❓❓❓
ScrollTrigger.create({
  trigger: '.section6_title_box',
  start: 'top center',
  end: 'bottom center',
  onEnter:()=>{
    gsap.to('.section6_detail_text_box',{stagger:0.1,duration:0.5,y:0})
  },
  // animation: ,
  // pin: false,
  // pinSpacing: false,
  // markers: true,
  scrub: true,
})
 
ScrollTrigger.create({
  trigger: '.section07',
  start: 'top center',
  end: 'bottom center',
  onEnter:()=>{
    gsap.to('.section7_head img',{stagger:0.1,duration:0.5,y:0})
  },
  // animation: ,
  // pin: false,
  // pinSpacing: false,
  // markers: true,
  scrub: true,
})





markers()



