document.addEventListener("DOMContentLoaded", () => {
  const gallery = document.getElementById("gallery");
  const box = document.querySelector(".box");
  const button = document.getElementById("themeToggle");
  const toggleButton = document.getElementById("toggleImage");
 
button.addEventListener("click", () => {
  darkMode = !darkMode; // flip between true/false
  document.body.classList.toggle("dark", darkMode);
 
  if (darkMode) {
    button.textContent = "Click for Light Mode!";
  } else {
    button.textContent = "Click for Dark Mode!";
  }
 
if (darkMode) {
  document.body.style.background = "black";
  document.body.style.color = "white";
} else {
  document.body.style.background = "white";
  document.body.style.color = "black";
}
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
