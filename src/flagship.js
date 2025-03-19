import "../lib/smooth";
import "./styles/flagship.css";
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


document.addEventListener("DOMContentLoaded", function () {
    const bukchonBtn = document.querySelector(".bukchon-btn");
    const bukchonEn = document.querySelector(".bukchon-en");

    bukchonBtn.addEventListener("click", function () {
        bukchonBtn.classList.toggle("active"); // 버튼 활성화 스타일 변경
        bukchonEn.classList.toggle("active"); // 이미지 나타나는 효과 적용
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const dosanBtn = document.querySelector(".bukchon-btn");
    const storeImgBox = document.querySelector(".store-imgbox");

    dosanBtn.addEventListener("click", function () {
        storeImgBox.classList.toggle("active"); // 클릭하면 이미지 변경
    });
});



document.addEventListener("DOMContentLoaded", function () {
    const bukchonBtn = document.querySelector(".dosan-btn");
    const bukchonEn = document.querySelector(".dosan-en");

    bukchonBtn.addEventListener("click", function () {
        bukchonBtn.classList.toggle("active"); // 버튼 활성화 스타일 변경
        bukchonEn.classList.toggle("active"); // 이미지 나타나는 효과 적용
    });
});
