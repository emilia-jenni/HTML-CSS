let header = document.querySelector(".main_nav");
let buttonBackToTop = document.getElementById("backToTop");
let nav = document.querySelector("nav");
let links = document.querySelectorAll("nav ul li a");
let mobilebtn = document.getElementById("mobilebtn");
let typing = document.getElementById("bannertxt");
let j = 0;
let txt = "i am emilia vuorenmaa";
let speed = 50;

typeWriter();

function typeWriter() {
  if (j < txt.length) {
    typing.innerHTML += txt.charAt(j);
    j++;
    setTimeout(typeWriter, speed);
  }
}

window.onscroll = function () {
  scrollFunction();
  if (window.location.pathname === "/Portfolio3.0/animations.html") {
    progressBar();
  }
};

const scrollFunction = () => {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    header.classList.add("bg");
    buttonBackToTop.style.display = "block";
  } else {
    header.classList.remove("bg");
    buttonBackToTop.style.display = "none";
  }
};

const getToTop = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

function progressBar() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}
const mobMenu = () => {
  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", mobMenu);
  }
  if (nav.classList.contains("responsive")) {
    nav.classList.remove("responsive");
    document.body.style.overflow = "";
  } else {
    nav.classList.add("responsive");
    document.body.style.overflow = "hidden";
  }
};

mobilebtn.addEventListener("click", mobMenu);
buttonBackToTop.addEventListener("click", getToTop);
