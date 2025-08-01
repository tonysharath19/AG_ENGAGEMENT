/* Page open count logic - can be removed when going live */
const pageOpenCountDisplay = document.getElementById("pageOpenCountDisplay");
let pageOpenCount = localStorage.getItem("pageOpenCount");
if (!pageOpenCount) {
  pageOpenCount = 0;
} else {
  pageOpenCount = parseInt(pageOpenCount, 10);
}
pageOpenCount++;
localStorage.setItem("pageOpenCount", pageOpenCount);
if (pageOpenCountDisplay) {
  pageOpenCountDisplay.textContent = pageOpenCount;
}
/* End of page open count logic */

const leftHeart = document.getElementById("leftHeart");
const rightHeart = document.getElementById("rightHeart");
const hint = document.getElementById("hint");
const initials = document.getElementById("initials");
const bgm = document.getElementById("bgm");

let clicked = false;

function handleMerge() {
  if (clicked) return;
  clicked = true;

  // Start music
  bgm.play();

  // Hide hint
  setTimeout(() => {
    hint.style.opacity = 0;
  }, 1500);

  // Add glow to both hearts
  setTimeout(() => {
    leftHeart.classList.add("glow");
    rightHeart.classList.add("glow");
  }, 1000); // Apply glow after 1 second

  // Show initials after glow and hide hearts
  setTimeout(() => {
    leftHeart.style.opacity = 0; // Fade out hearts
    rightHeart.style.opacity = 0; // Fade out hearts
    // Give a small delay for opacity transition before hiding display
    setTimeout(() => {
      leftHeart.style.display = "none";
      rightHeart.style.display = "none";
    }, 500); // Wait for 0.5s opacity transition

    initials.style.display = "block";
    initials.style.opacity = 0;
    initials.style.transition = "opacity 3s ease, transform 3s ease";
    setTimeout(() => {
      initials.style.opacity = 1;
      initials.style.transform = "translate(-50%, -50%) scale(1)";
    }, 100);
  }, 3500); // After glow has been visible for a bit (1000ms + 2500ms for glow effect)

  // After initials are shown, fade out and redirect to next scene
  setTimeout(() => {
    const initials = document.getElementById("initials");
    initials.style.transition = "opacity 3.5s ease";
    initials.style.opacity = 0;

    setTimeout(() => {
      window.location.href = "scene2.html";
    }, 1500); // Wait for fade-out
  }, 5500); // Keep initials visible for 8 seconds (3500ms + 8000ms)
}

leftHeart.addEventListener("click", handleMerge);
rightHeart.addEventListener("click", handleMerge);
