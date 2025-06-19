// Navbar background change on scroll
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  navbar.style.backgroundColor = window.scrollY > 50 ? '#222' : '#333';
});

// Form validation
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const status = document.getElementById('form-status');

  if (!name || !email || !message) {
    status.textContent = 'Please fill in all fields.';
    status.style.color = 'red';
  } else {
    status.textContent = 'Message sent successfully!';
    status.style.color = 'green';
    this.reset();
  }
});

