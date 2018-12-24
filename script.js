function showHDImages() {
  console.log("im in");
  let smallBurger = document.getElementById("smallBurger");

  let bigBurger = document.getElementById("bigBurger");
  setTimeout(() => {
    smallBurger.style.opacity = ".3";
    smallBurger.className = "burgerHidden";
  }, 100);
  bigBurger.className = "burgerFadeInOnLoad";
}
