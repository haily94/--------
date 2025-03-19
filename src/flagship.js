import "../lib/smooth";
import "./styles/flagship.css";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";
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

const bukchonBtn = document.querySelector(".bukchon-btn");
const bukchonEn = document.querySelector(".bukchon-en");
const storeImgBox = document.querySelector(".store-imgbox");

bukchonBtn.addEventListener("click", function () {
  bukchonBtn.classList.add("active"); // 버튼 활성화 스타일 변경
  bukchonEn.classList.add("active"); // 이미지 나타나는 효과 적용
  dosanBtn.classList.remove("active"); // 버튼 활성화 스타일 변경
  dosanEn.classList.remove("active"); // 이미지 나타나는 효과 적용
  storeImgBox.classList.remove("active2"); // 클릭하면 이미지 변경
  storeImgBox.classList.add("active1"); // 클릭하면 이미지 변경
});

const dosanBtn = document.querySelector(".dosan-btn");
const dosanEn = document.querySelector(".dosan-en");

dosanBtn.addEventListener("click", function () {
  bukchonBtn.classList.remove("active"); // 버튼 활성화 스타일 변경
  bukchonEn.classList.remove("active"); // 이미지 나타나는 효과 적용
  dosanBtn.classList.add("active"); // 버튼 활성화 스타일 변경
  dosanEn.classList.add("active"); // 이미지 나타나는 효과 적용
  storeImgBox.classList.remove("active1"); // 클릭하면 이미지 변경
  storeImgBox.classList.add("active2"); // 클릭하면 이미지 변경
});
