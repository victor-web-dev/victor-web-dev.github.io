// const { MostUsedIcons: usedIcons } = require("./assets/data/icons-list");
import { MostUsedIcons as usedIcons } from "./assets/data/icons-list.js";

const navBtnClick = () => {
  const checkbox = document.querySelector(".menu-checkbox");
  const navItem = document.querySelectorAll(".nav-item");

  checkbox.addEventListener("change", (event) => {
    if (!event.target.checked) {
      navItem.forEach(
        (element) => (element.className = "nav-item display-none")
      );
    } else {
      navItem.forEach((element) => (element.className = "nav-item"));
    }
  });
};

const fillUpTechDiv = () => {
  const mostDiv = document.getElementById("most-used-tech");
  // const lessDiv = document.getElementById("less-used-tech");
  usedIcons.forEach((el) => {
    mostDiv.innerHTML += `
    <img class="logo" src="${el.src}" title="${el.title}" alt="${el.alt}"/>
    `;
  });
};

const exec = () => {
  navBtnClick();
  fillUpTechDiv();
};

exec();
