document.addEventListener("DOMContentLoaded", () => {
  const gallery = document.getElementById("gallery");
  const box = document.querySelector(".box");
  const colorButton = document.getElementById("changeColor");
  const toggleButton = document.getElementById("toggleImage");
 
  colorButton.addEventListener("click", () => {
    box.style.backgroundColor =
    box.style.backgroundColor === "blue" ? "red" : "blue"; 
  });
 
  let toggled = false;
  toggleButton.addEventListener("click", () => {
    if (toggled) {
      gallery.src = "./assets/images/european-mink.png";
      toggled = false;
    } else {
      gallery.src = "./assets/images/european-polecat.png"; 
      toggled = true;
    }
  });

  console.log("Page loaded!")
});
