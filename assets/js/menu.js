// Mobile menu toggle.
document.addEventListener('DOMContentLoaded', function() {
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
});
