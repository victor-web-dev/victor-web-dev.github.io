import {
  mostUsedIcons as usedIcons,
  lessUsedIcons,
} from "../assets/data/icons-list.js";

const fillUpTechDiv = () => {
  const mostDiv = document.getElementById("most-used-tech");
  const lessDiv = document.getElementById("less-used-tech");
  usedIcons.forEach((el) => {
    mostDiv.innerHTML += `
      <img class="logo" src="${el.src}" title="${el.title}" alt="${el.alt}"/>
      `;
  });

  lessUsedIcons.forEach((el) => {
    lessDiv.innerHTML += `
      <img class="logo" src="${el.src}" title="${el.title}" alt="${el.alt}"/>
      `;
  });
};

const exec = () => {
  fillUpTechDiv();
};

exec();
