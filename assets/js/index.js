document.addEventListener('DOMContentLoaded', function() {
  setupOSButtons();
  setupMobileMenu();
});

function setupOSButtons() {
  const os = getOS();
  if (os === null) {
    console.error('OS not recognized');
    return;
  }
  const elementsToShow = [...document.querySelectorAll(`[data-os="${os}"]`), ...document.querySelectorAll(`[data-os="identified"]`)];
  elementsToShow.forEach((element) => {
    element.classList.remove('hidden');
  });
  const elementsToHide = document.querySelectorAll(`[data-os="other"]`);
  elementsToHide.forEach((element) => {
    element.classList.add('hidden');
  });
}

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

function getOS() {
  const platform = window.navigator?.userAgentData?.platform || window.navigator.platform,
    macosPlatforms = ['macOS', 'Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
    windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'];

  if (macosPlatforms.indexOf(platform) !== -1) {
    return 'macos';
  } else if (windowsPlatforms.indexOf(platform) !== -1) {
    return 'windows';
  } else if (/Linux/.test(platform)) {
    return 'linux';
  }
  return null;
}
