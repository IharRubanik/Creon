window.onload = function () {
  const burgerMenu = document.querySelector(".burger-menu");
  const body = document.querySelector("body");
  const header = document.querySelector(".header");
  const blurMenu = document.querySelector(".blur");
  const quantitySelection = document.querySelectorAll(".quantity-selection");

  const mediaQuery1280 = window.matchMedia(
    "only screen and (max-width: 1280px)"
  );
  const mediaQuery860 = window.matchMedia("only screen and (max-width: 860px)");
  const mediaQuery600 = window.matchMedia("only screen and (max-width: 600px)");

  // burger menu
  burgerMenu.addEventListener("click", function () {
    if (!header.classList.contains("active")) {
      header.classList.add("active");
      body.style.overflow = "hidden";
      blurMenu.classList.add("active");
      blurMenu.style.zIndex = "10";
    } else {
      header.classList.remove("active");
      body.style.overflow = "visible";
      blurMenu.classList.remove("active");
      setTimeout(() => {
        blurMenu.style.zIndex = "-1";
      }, 250);
    }
  });

//  click


if(mediaQuery1280 || mediaQuery860 || mediaQuery600 ) {
    for (let i = 0; i < quantitySelection.length; i++) {
        quantitySelection[i].addEventListener('click', function(){
            quantitySelection[i].classList.add('click')
            setTimeout(() => {
                quantitySelection[i].classList.remove('click')
            }, 250);
        })
    }
}
};
