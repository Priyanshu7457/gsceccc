const burger = document.querySelector(".burger");
const navList = document.querySelector(".nav-list");
const navBar = document.querySelector(".navbar");
const toggle = () => {
  navList.classList.toggle("v-class");
  navBar.classList.toggle("h-nav");
};

const comingSoon = () => {
  alert("This Course Coming Soon");
};
