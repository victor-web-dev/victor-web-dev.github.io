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

const exec = () => {
  navBtnClick();
};

exec();
