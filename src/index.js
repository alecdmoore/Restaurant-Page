import pageLoad from "./pageLoad.js";
pageLoad();

const homeButton = document.getElementById("home");
const menuButton = document.getElementById("menu");
const contactButton = document.getElementById("contact");

homeButton.addEventListener("click", () => {
  document.getElementById("container-home").style.display = "inline";
  document.getElementById("container-menu").style.display = "none";
  document.getElementById("container-contact").style.display = "none";
});

menuButton.addEventListener("click", () => {
  document.getElementById("container-home").style.display = "none";
  document.getElementById("container-menu").style.display = "inline";
  document.getElementById("container-contact").style.display = "none";
});

contactButton.addEventListener("click", () => {
  document.getElementById("container-home").style.display = "none";
  document.getElementById("container-menu").style.display = "none";
  document.getElementById("container-contact").style.display = "inline";
});
