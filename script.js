function showHDImages() {
  console.log("im in");

  let bigBurger = document.getElementById("bigBurger");

  const newLocal = "none";
  document
    .getElementById("burgerWrap1")
    .setAttribute("style", "backgroundImage: none; filter: none;");

  bigBurger.className = "burgerFadeInOnLoad";
}
