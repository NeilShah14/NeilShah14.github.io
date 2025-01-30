const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const response = document.getElementById('response');

// Confetti function
function triggerConfetti() {
  confetti({
    particleCount: 100, // Number of confetti particles
    spread: 70, // Spread of the confetti
    origin: { y: 0.6 }, // Start from the bottom
  });
}

// Sad face animation function
function showSadFace() {
  const sadFace = document.createElement('div');
  sadFace.innerHTML = '😢';
  sadFace.style.position = 'fixed';
  sadFace.style.top = '50%';
  sadFace.style.left = '50%';
  sadFace.style.transform = 'translate(-50%, -50%)';
  sadFace.style.fontSize = '100px';
  sadFace.style.zIndex = '1000';
  sadFace.style.animation = 'fadeOut 2s forwards';
  document.body.appendChild(sadFace);

  // Remove the sad face after the animation ends
  setTimeout(() => {
    sadFace.remove();
  }, 2000); // 2 seconds
}

// Yes button click event
yesButton.addEventListener('click', () => {
  response.textContent = "Yay! You've made me the happiest person! 💖";
  triggerConfetti(); // Trigger confetti
});

// No button click event
noButton.addEventListener('click', () => {
  response.textContent = "Oh no! Please reconsider! 😢";
  showSadFace(); // Show sad face animation

  // Move the "No" button randomly
  noButton.style.position = 'absolute';
  noButton.style.left = `${Math.random() * 80 + 10}%`;
  noButton.style.top = `${Math.random() * 80 + 10}%`;
});
