window.onload = function () {
  const accordionElem = document.querySelectorAll(".item");
  const rootStyles = getComputedStyle(document.documentElement);
  const accordionHeight = rootStyles.getPropertyValue("--accordion-height");


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
