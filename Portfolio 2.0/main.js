let header = document.getElementById("main_nav");

const scrollHeader = () => {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    header.style.background = "#F4F2FD";
    header.style.padding = "10px";
  } else {
    header.style.background = "transparent";
    header.style.padding = "42px";
  }
};

window.addEventListener("scroll", scrollHeader);
