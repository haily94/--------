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

  // // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },

});




markers()



