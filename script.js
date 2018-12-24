function showHDImages() {
  console.log("im in");
  let smallBurger = document.getElementById("smallBurger");
  console.log(smallBurger);

  let bigBurger = document.getElementById("bigBurger");
  smallBurger.className = "burgerHidden";
  bigBurger.className = "burgerShow";
}
