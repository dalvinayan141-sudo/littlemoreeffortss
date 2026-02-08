let currentPage = 0;
const pages = document.querySelectorAll(".page");

function nextPage() {
  if (currentPage < pages.length - 1) {
    pages[currentPage].classList.remove("active");
    currentPage++;
    pages[currentPage].classList.add("active");
  }
}

/* NO button stays inside screen */
function moveNo() {
  const btn = document.querySelector(".no-btn");

  const padding = 80;
  const maxX = window.innerWidth - btn.offsetWidth - padding;
  const maxY = window.innerHeight - btn.offsetHeight - padding;

  const x = Math.random() * maxX + padding / 2;
  const y = Math.random() * maxY + padding / 2;

  btn.style.position = "fixed";
  btn.style.left = x + "px";
  btn.style.top = y + "px";
  btn.style.transition = "all 0.1s ease";
}

/* Hearts + confetti */
const effects = ["💖","💕","💘","❤️","🎉","✨"];
const container = document.getElementById("effects");

setInterval(() => {
  const el = document.createElement("div");
  el.className = "effect";
  el.innerText = effects[Math.floor(Math.random() * effects.length)];
  el.style.left = Math.random() * 100 + "vw";
  el.style.fontSize = Math.random() * 20 + 14 + "px";
  el.style.animationDuration = Math.random() * 3 + 2 + "s";
  container.appendChild(el);
  setTimeout(() => el.remove(), 6000);
}, 200);
