import "../lib/smooth";
import "./styles/detail.css";
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import { markers } from "../lib/smooth";

import { gsap } from "gsap";
// import { Draggable } from "gsap/Draggable";
// import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);



document.addEventListener("DOMContentLoaded", function () {
    let heartButton = document.querySelector(".heart-btn");

    heartButton.addEventListener("click", function () {
        this.classList.toggle("active");
    });
});



const swiper = new Swiper(".swiper", {
  // Optional parameters
  // direction: 'vertical',
  // loop: true,

  // If we need pagination
  // pagination: {
  //   el: '.swiper-pagination',
  // },

  // // Navigation arrows
  loop: true,
  navigation: {
    nextEl: '.next_btn',
  },
  pagination: {
    el: ".section01 .pagination",
    bulletClass: "bullet",
    bulletActiveClass: "active",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + `<img src="/detailpage/topsection/side_img0${index+1}.png" alt="" />` + "</span>";
    },
  },

  // // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },

});





let count = 1;
let price = 53000;
let total = 0;


const increment = document.querySelector('.incre');
const decrement = document.querySelector('.decre');
const countElem = document.querySelector('.count');
const totalElem = document.querySelector('.total-price');
let countText = +countElem.textContent;






increment.addEventListener('click',()=>{

  if(countText >= 10) return
  countText += count
  countElem.textContent = countText;

  total = price * countText 
  
  totalElem.textContent =  `${total.toLocaleString()}KRW`
  
  
})

decrement.addEventListener('click',()=>{
  if(countText <= 0) return

  countText -= count
  countElem.textContent = countText;
  total = price * countText 
  
  totalElem.textContent =  `${total.toLocaleString()}KRW`
})





const list = document.querySelectorAll('.right-detailsection li');

const state = [
  { clicked: false },
  { clicked: false },
  { clicked: false },
  { clicked: false },
]

list.forEach((li,i)=>{
  li.addEventListener('click',({currentTarget})=>{

    const btn = currentTarget.querySelector('.plus');
    const depth = currentTarget.querySelector('.depth');

    state[i].clicked = !(state[i].clicked); // 토글 스위치
    
    const current = state[i].clicked;
    
    btn.lastElementChild.src = current ? '/detailpage/bottomsection/minus.png' : '/detailpage/bottomsection/plus.png'

  

    let height = 0;

    switch (i) {
      case 0: height = current ? 131 : 104 ;break;
      case 1: height = current ? 203 : 104 ;break;
      case 2: height = current ? 131 : 104 ;break;
      case 3: height = current ? 107 : 104 ;break;
    }
    
    gsap.to(currentTarget,{height})
    gsap.to(depth,{opacity:current ? 1 : 0})

  })
})











markers()



