const body = document.body;
const logoButton = document.getElementById("logoButton");
const homeButton = document.getElementById("homeButton");
const main = document.getElementById("main");

logoButton.addEventListener("click", () => {
  body.classList.add("open");
  main.setAttribute("aria-hidden", "false");
});

homeButton.addEventListener("click", () => {
  body.classList.remove("open");
  main.setAttribute("aria-hidden", "true");
});
