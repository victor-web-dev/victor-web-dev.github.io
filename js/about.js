import { mostUsedIcons as usedIcons } from "../assets/data/icons-list.js";

const fillUpTechDiv = () => {
  const mostDiv = document.getElementById("known-tech");
  usedIcons.forEach((el) => {
    mostDiv.innerHTML += `
      <img class="logo" src="${el.src}" title="${el.title}" alt="${el.alt}"/>
      `;
  });
};

const exec = () => {
  fillUpTechDiv();
};

exec();
