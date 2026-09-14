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

  const size = 2 + Math.random() * 6;
flake.style.width = size + "px";
flake.style.height = size + "px";

  const opacity = 0.3 + Math.random() * 0.8;
flake.style.opacity = opacity;

const blur = size * 0.35;
flake.style.filter = `blur(${blur}px)`;
  
  snow.appendChild(flake);
}
