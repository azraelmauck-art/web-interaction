document.addEventListener("DOMContentLoaded", () => {
  const gallery = document.getElementById("gallery");
  const box = document.querySelector(".box");
  const toggleButton = document.getElementById("toggleImage");
  const toggleDarkmode = document.getElementById("toggleDarkmode")
 
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
