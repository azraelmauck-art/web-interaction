document.addEventListener("DOMContentLoaded", () => {
  const gallery = document.getElementById("gallery");
  const box = document.querySelector(".box");
  const colorButton = document.getElementById("changeColor");
  const toggleButton = document.getElementById("toggleImage");
 
  colorButton.addEventListener("click", () => {
    box.style.backgroundColor =
    box.style.backgroundColor === "#AAF0D1" ? "#00CED1" ? "#3EA055" : "#AAF0D1"; 
  });
 
  let toggled = false;
  toggleButton.addEventListener("click", () => {
    if (toggled) {
      gallery.src = "./assets/images/formosan-ferret-badger.png";
      toggled = false;
    } else {
      gallery.src = "./assets/images/marbled-polecat.png"; 
      toggled = true;
    }
  });

  console.log("Page loaded!")
});
