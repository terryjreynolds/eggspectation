function showHDImages() {
  console.log("im in");
  let smallBurger = document.getElementById("smallBurger");

  let bigBurger = document.getElementById("bigBurger");

  smallBurger.className = "burgerTransparent";

  bigBurger.className = "burgerFadeInOnLoad";
}
