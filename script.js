// Function to create floating hearts
function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');

  // Random position
  heart.style.left = Math.random() * window.innerWidth + 'px';

  // Random animation duration
  heart.style.animationDuration = Math.random() * 3 + 3 + 's';

  document.querySelector('.floating-hearts').appendChild(heart);

  // Remove heart after animation
  setTimeout(() => {
      heart.remove();
  }, 5000);
}

// Generate floating hearts every 1 second
setInterval(createHeart, 800);



document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // Validate credentials (you can customize this)
    if (username === 'valentine' && password === 'love') {
      window.location.href = 'valentine.html';
    } else {
      alert('Invalid username or password. Try again!');
    }
  });




  