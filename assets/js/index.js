document.addEventListener('DOMContentLoaded', function() {
  setupMobileMenu();
});

function setupMobileMenu() {
  const hamburger = document.querySelector('.heading__hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', function() {
      const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';

      if (isExpanded) {
        hamburger.setAttribute('aria-expanded', false);
        mobileMenu.classList.toggle('mobile-menu--open');
        document.body.style.overflow = '';
      } else {
        hamburger.setAttribute('aria-expanded', true);
        mobileMenu.classList.toggle('mobile-menu--open');
        document.body.style.overflow = 'hidden';
      }
    });
  }
}
