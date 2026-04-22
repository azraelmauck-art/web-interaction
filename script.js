document.addEventListener("DOMContentLoaded", () => {
  const gallery = document.getElementById("gallery");
  const box = document.querySelector(".box");
  const colorButton = document.getElementById("changeColor");

  colorButton.addEventListener("click", () => {
    box.style.backgroundColor =
    box.style.backgroundColor === "lightgreen" ? "brown" : "lightgreen"; 
  });

gallery.addEventListener('mouseover', function(){
  gallery.src = "./assets/images/formosan-ferret-badger.png"
})
gallery.addEventListener('mouseout', function(){
    gallery.src = "./assets/images/marbled-polecat.png"
  })

  console.log("Page loaded!")
});
