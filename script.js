window.onload = function () {
  const accordionElem = document.querySelectorAll(".item");
  const rootStyles = getComputedStyle(document.documentElement);
  const accordionHeight = rootStyles.getPropertyValue("--accordion-height");
  const burgerMenu = document.querySelector(".burger-menu");
  const closeMenu = document.querySelector(".close");
  const body = document.querySelector("body");
  const header = document.querySelector(".header");
  const blurMenu = document.querySelector(".blur");


  const mediaQuery1280 = window.matchMedia("only screen and (max-width: 1280px)");
  const mediaQuery860 = window.matchMedia("only screen and (max-width: 860px)");
  const mediaQuery600 = window.matchMedia("only screen and (max-width: 600px)");

  // burger menu
  burgerMenu.addEventListener("click", function () {
    if (!header.classList.contains("active")) {
      header.classList.add("active");
      body.style.overflow = "hidden";
      blurMenu.classList.add("active");
      blurMenu.style.zIndex = "10";
    }
    else{
        header.classList.remove("active");
        body.style.overflow = "visible";
        blurMenu.classList.remove("active");
        setTimeout(() => {
          blurMenu.style.zIndex = "-1";
        }, 250);
    }
  });

  //   accordion
  for (let i = 0; i < accordionElem.length; i++) {
    accordionElem[0].classList.add("open");
    accordionElem[0].style.height =
      accordionElem[0].lastElementChild.scrollHeight + "px";
    accordionElem[i].addEventListener("click", function () {
      if (!accordionElem[i].classList.contains("open")) {
        accordionElem[i].classList.add("open");
        accordionElem[i].style.height =
          accordionElem[i].lastElementChild.scrollHeight + "px";
        if(mediaQuery1280 || mediaQuery860 || mediaQuery600){
            accordionElem[i].classList.add("click");
            setTimeout(() => {
                accordionElem[i].classList.remove("click"); 
            }, 250);
        }

      } else {
        accordionElem[i].classList.remove("open");
        accordionElem[i].style.height = accordionHeight;
      }
      removeOpen();
    });

    function removeOpen() {
      for (let t = 0; t < accordionElem.length; t++) {
        if (i !== t) {
          accordionElem[t].classList.remove("open");
          accordionElem[t].style.height = accordionHeight;
        }
      }
    }
  }
};
