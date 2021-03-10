const navIcon = document.getElementById("icon");
const navList = document.getElementById("nav");
const navBar = document.getElementById("navbar");
const copy = document.getElementById("copyright");

navIcon.addEventListener("click", () => {
  navList.classList.toggle("navigation__nav--responsive");
  navBar.classList.toggle("navigation--responsive");
});

window.addEventListener("scroll", () => {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    navBar.style.opacity = "0.8";
  } else {
    navBar.style.opacity = "1";
  }
});

navBar.addEventListener("mouseenter", () => {
  navBar.style.opacity = "1";
});

navBar.addEventListener("mouseleave", () => {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    navBar.style.opacity = "0.8";
  } else {
    navBar.style.opacity = "1";
  }
});

copy.appendChild(document.createTextNode(new Date().getFullYear()));
