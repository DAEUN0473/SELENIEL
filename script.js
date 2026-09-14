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
  flake.style.animationDelay = -(Math.random() * 15) + "s";
  flake.style.animationDuration = (10 + Math.random() * 10) + "s";

  const size = 2 + Math.random() * 6;
flake.style.width = size + "px";
flake.style.height = size + "px";

const opacity = 0.2 + Math.random() * 0.7;
flake.style.opacity = opacity;

const blur = size * 0.35;
flake.style.filter = `blur(${blur}px)`;
  
  snow.appendChild(flake);
}

const particles = document.getElementById("particles");
const particleCount = 35;

for (let i = 0; i < particleCount; i++) {
  const particle = document.createElement("span");

  particle.className = "particle";

  particle.style.left = Math.random() * 100 + "vw";
  particle.style.top = Math.random() * 100 + "vh";

  const size = 1 + Math.random() * 2;
  particle.style.width = size + "px";
  particle.style.height = size + "px";

  particle.style.opacity = 0.1 + Math.random() * 0.5;

  const glow = 4 + Math.random() * 12;
  particle.style.boxShadow = `0 0 ${glow}px rgba(255, 255, 255, 0.8)`;

  particle.style.animationDuration =
    (3 + Math.random() * 5) + "s";

  particle.style.animationDelay =
    -(Math.random() * 8) + "s";
  
  particle.style.setProperty(
    "--float-x",
    (Math.random() * 20 - 10) + "px"
  );

  particle.style.setProperty(
    "--float-y",
    (Math.random() * 20 - 10) + "px"
  );

  particles.appendChild(particle);
}
