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

const snow = document.getElementById("snow");

const snowCount = 40;

for (let i = 0; i < snowCount; i++) {
  const flake = document.createElement("span");

  flake.className = "snowflake";

  flake.style.left = Math.random() * 100 + "vw";
  flake.style.animationDelay = Math.random() * 15 + "s";
  flake.style.animationDuration = (10 + Math.random() * 10) + "s";

  snow.appendChild(flake);
}
