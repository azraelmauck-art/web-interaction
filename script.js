document.addEventListener("DOMContentLoaded", () => {
  const gallery = document.getElementById("gallery");
  const box = document.querySelector(".box");
  const toggleButton = document.getElementById("toggleImage");
 
let darkMode = localStorage.getItem("darkMode");

if (darkMode == "true") {
  addDarkMode();
}
document.querySelector(".switch").addEventListener("click", function () {
  darkMode = localStorage.getItem("darkMode");
  if (darkMode == "true") {
    removeDarkMode();
  } else {
    addDarkMode();
  }
});

function addDarkMode() {
  darkMode = localStorage.setItem("darkMode", "true");
  document.getElementsByTagName("body")[0].classList.add("darkMode");
}

function removeDarkMode() {
  darkMode = localStorage.setItem("darkMode", "false");
  document.getElementsByTagName("body")[0].classList.remove("darkMode");
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
