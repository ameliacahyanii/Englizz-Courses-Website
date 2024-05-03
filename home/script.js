let navbar = document.querySelector('.header .navbar');
document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
};

window.onscroll = () =>{
    navbar.classList.remove('active');
};


//TESTIMONIALS
document.querySelectorAll('.testimonials .image-container .controls .control-btn .content').forEach(btn =>{
    btn.onclick = () =>{
        let src = btn.getAttribute('src');
        document.querySelector('.testimonials .testi-container .image-container .image').src = src;
    }
});

var btn = document.getElementsByClassName("btn-testi");
      var slide = document.getElementById("slide");

      btn[0].onclick = function () {
        slide.style.transform = "translateX(0px)";
        for (i = 0; i < 4; i++) {
          btn[i].classList.remove("active-testi");
        }
        this.classList.add("active-testi");
      };

      btn[1].onclick = function () {
        slide.style.transform = "translateX(-800px)";
        for (i = 0; i < 4; i++) {
          btn[i].classList.remove("active-testi");
        }
        this.classList.add("active-testi");
      };

      btn[2].onclick = function () {
        slide.style.transform = "translateX(-1600px)";
        for (i = 0; i < 4; i++) {
          btn[i].classList.remove("active-testi");
        }
        this.classList.add("active-testi");
      };

      btn[3].onclick = function () {
        slide.style.transform = "translateX(-2400px)";
        for (i = 0; i < 4; i++) {
          btn[i].classList.remove("active-testi");
        }
        this.classList.add("active-testi");
      };


//QUIZ
//Initial References
let draggableObjects;
let dropPoints;
const StartButton = document.getElementById("start");
const result = document.getElementById("result");
const controls = document.querySelector(".controls-container");
const dragContainer = document.querySelector(".draggable-objects");
const dropContainer = documen.querySelector("drop-points");
const data =[
    "cow",
    "cat",
    "elephant",
    "horse",
    "frog",
    "butterfly"
];

let deviceType = "";
let initialX = 0,
initialY = 0;

let currentElement = "";
let moveElement = false;

// Detect touch device
const isTouchhDevice = () =>{
    try{
        document.createEvent("TouchEvent");
        deviceType = "touch";
        return true;
    } catch (e){
        deviceType = "mouse";
        return false;
    }
};


//PROGRESS
let number = document.getElementById("number");
      let counter = 0;
      setInterval(() => {
        if (counter == 64) {
          clearInterval();
        } else {
          counter += 1;
          number.innerHTML = counter + "%";
        }
      }, 30);


// SIGN IN & SIGN UP
const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});











