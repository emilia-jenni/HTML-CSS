let header = document.querySelector("header");
let buttonBackToTop = document.getElementById("backToTop");

window.onscroll = function () {
  headerFunction();
};

const headerFunction = () => {
  if (
    document.header.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    header.classList.add("bg");
  } else {
    header.classList.remove("bg");
  }
};

window.addEventListener("scroll", headerFunction);

window.onscroll = function () {
  scrollFunction();
};

const scrollFunction = () => {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    buttonBackToTop.style.display = "block";
  } else {
    buttonBackToTop.style.display = "none";
  }
};

const getToTop = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

buttonBackToTop.addEventListener("click", getToTop);
