const butterflyContainer = document.querySelector('.butterflies');

function createButterfly() {
  const b = document.createElement('div');
  b.classList.add('butterfly');
  resetButterfly(b);
  butterflyContainer.appendChild(b);

  setInterval(() => {
    resetButterfly(b);
  }, 5000 + Math.random() * 3000);
}

function resetButterfly(b) {
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;

  const startX = Math.random() * screenWidth;
  const startY = Math.random() * (screenHeight * 0.5);

  const endX = Math.random() * screenWidth;
  const endY = Math.random() * (screenHeight * 0.5);

  b.style.left = `${startX}px`;
  b.style.top = `${startY}px`;

  b.animate([
    { transform: `translate(${startX}px, ${startY}px)` },
    { transform: `translate(${endX}px, ${endY}px)` }
  ], {
    duration: 5000 + Math.random() * 3000,
    iterations: 1,
    easing: 'ease-in-out',
    fill: 'forwards'
  });
}

// Create 5 butterflies
for (let i = 0; i < 5; i++) {
  createButterfly();
}

