function showHDImages() {
  console.log("im in");
  let smallBurger = document.getElementById("smallBurger");

  let bigBurger = document.getElementById("bigBurger");

  bigBurger.className = "burgerFadeInOnLoad";
  setTimeout(() => {
    smallBurger.className = "burgerHidden";
  }, 2000);
}
