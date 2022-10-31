var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
const random = document.querySelector("button");

function setGradient() {
  body.style.background =
    "linear-gradient(to right," + color1.value + ", " + color2.value + ")";

  css.textContent = body.style.background + ",";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

////Copied code for random button generator
randomColor = () => {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

random.addEventListener("click", () => {
  color1.value = randomColor();
  color2.value = randomColor();
  setGradient();
});
