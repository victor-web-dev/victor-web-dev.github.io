const scrollSection = (origin, direction, component, bgPosY = 33) => {
  let pos = 0;
  const { index } = origin;
  if (direction === "down") {
    pos += (index + 1) * bgPosY;
    component.style.backgroundPositionY = `${pos}%`;
  } else {
    let prev = parseInt(component.style.backgroundPositionY.replace("%", ""));
    pos = prev - bgPosY;
    component.style.backgroundPositionY = `${pos}%`;
  }
};

const initFullPage = () => {
  document.addEventListener("DOMContentLoaded", () => {
    new fullpage("#fullpage", {
      licenseKey: "gplv3-license",
      // Navigation
      // menu: "#menu",
      lockAnchors: false,
      // anchors: ["homePage", "aboutPage", "projectsPage", "contactPage"],
      // navigation: true,
      // navigationPosition: "right",
      // navigationTooltips: ["firstSlide", "secondSlide"],
      showActiveTooltip: false,
      slidesNavigation: true,
      slidesNavPosition: "bottom",

      // Scrolling
      css3: true,
      scrollingSpeed: 700,
      autoScrolling: true,
      fitToSection: true,
      fitToSectionDelay: 600,
      scrollBar: false,
      easing: "easeInOutCubic",
      easingcss3: "ease",
      loopBottom: false,
      loopTop: false,
      loopHorizontal: true,
      continuousVertical: false,
      continuousHorizontal: false,
      scrollHorizontally: false,
      interlockedSlides: false,
      dragAndMove: false,
      offsetSections: false,
      resetSliders: false,
      fadingEffect: false,
      // normalScrollElements: "#project-items-container",
      scrollOverflow: true,
      scrollOverflowMacStyle: false,
      scrollOverflowReset: false,
      touchSensitivity: 15,
      bigSectionsDestination: null,

      // Accessibility
      keyboardScrolling: true,
      animateAnchor: true,
      recordHistory: true,

      // Design
      controlArrows: true,
      controlArrowsHTML: [
        '<div class="fp-arrow"></div>',
        '<div class="fp-arrow"></div>',
      ],
      verticalCentered: true,
      // sectionsColor: ["#ccc", "#fff"],
      // paddingTop: "3em",
      // paddingBottom: "10px",
      // fixedElements: "#header, .footer",
      responsiveWidth: 0,
      responsiveHeight: 0,
      responsiveSlides: false,
      parallax: false,
      parallaxOptions: {
        type: "reveal",
        percentage: 62,
        property: "translate",
      },
      dropEffect: false,
      dropEffectOptions: { speed: 2300, color: "#F82F4D", zIndex: 9999 },
      waterEffect: false,
      waterEffectOptions: { animateContent: true, animateOnMouseMove: true },
      cards: false,
      cardsOptions: {
        perspective: 100,
        fadeContent: true,
        fadeBackground: true,
      },

      // Custom selectors
      sectionSelector: ".section",
      slideSelector: ".slide",

      lazyLoading: true,
      observer: true,
      credits: {
        enabled: true,
        label: "Made with fullPage.js",
        position: "right",
      },

      onLeave: function (origin, destination, direction, trigger) {
        // let leavingSection = this;
        const body = document.getElementById("body");

        scrollSection(origin, direction, body);
      },
    });
  });
};

const exec = () => {
  initFullPage();
};

exec();
