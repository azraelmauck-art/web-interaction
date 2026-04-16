document.addEventListener("DOMContentLoaded", () => {
  const gallery = document.getElementById("gallery");
  const box = document.querySelector(".box");
  const toggleButton = document.getElementById("toggleImage");
  const button = document.getElementById("toggleDarkmode")

let darkMode = false;
 
if (darkMode) {
  document.body.style.background = "black";
  document.body.style.color = "white";
} else {
  document.body.style.background = "white";
  document.body.style.color = "black";
}
  
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
