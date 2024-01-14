document.addEventListener('DOMContentLoaded', function() {
  const navbar = document.querySelector('.rd-navbar-brand');

  window.addEventListener('scroll', function() {
    if (window.scrollY > 0) {
      // Scrolled
      navbar.classList.add('scrolled');
    } else {
      // Top
      navbar.classList.remove('scrolled');
    }
  });
});
