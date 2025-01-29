const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const response = document.getElementById('response');

yesButton.addEventListener('click', () => {
  response.textContent = "Yay! You've made me the happiest person! 💖";
});

noButton.addEventListener('click', () => {
  response.textContent = "Oh no! Please reconsider! 😢";
  noButton.style.position = 'absolute';
  noButton.style.left = `${Math.random() * 80 + 10}%`;
  noButton.style.top = `${Math.random() * 80 + 10}%`;
});