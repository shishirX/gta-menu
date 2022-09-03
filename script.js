document.querySelectorAll("li").forEach((e) => {
  e.addEventListener("mouseenter", playSound);
  e.addEventListener("mouseleave", stopSound);
});

const overlay = document.querySelector(".overlay");
overlay.addEventListener("click", () => {
  overlay.classList.add("hidden");
});

function playSound() {
  const thisSound = document.getElementById("soundObj");
  thisSound.play();
}

function stopSound() {
  const thisSound = document.getElementById("soundObj");
  thisSound.pause();
  thisSound.currentTime = 0;
}
