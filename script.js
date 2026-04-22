document.addEventListener("DOMContentLoaded", () => {
  const gallery = document.getElementById("gallery");
  const box = document.querySelector(".box");
  let image = document.getElementById("image");
  const colorButton = document.getElementById("changeColor");

  colorButton.addEventListener("click", () => {
    box.style.backgroundColor =
    box.style.backgroundColor === "lightgreen" ? "brown" : "lightgreen"; 
  });

image.addEventListener('mouseover', function(){
  image.src = "./assets/images/formosan-ferret-badger.png"
})
image.addEventListener('mouseout', function(){
    image.src = "./assets/images/marbled-polecat.png"
  })

  console.log("Page loaded!")
});
