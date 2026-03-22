document.addEventListener('DOMContentLoaded', function() {
  setupOSButtons();
  setupDownloadModal();
});

function setupOSButtons() {
  const os = getOS();
  if (os === null) {
    console.error('OS not recognized');
    return;
  }

  const elementsToShow = [
    ...document.querySelectorAll(`[data-os="${os}"]`),
    ...document.querySelectorAll('[data-os="identified"]')
  ];
  elementsToShow.forEach((element) => {
    element.classList.remove('hidden');
  });

  const elementsToHide = document.querySelectorAll('[data-os="other"]');
  elementsToHide.forEach((element) => {
    element.classList.add('hidden');
  });
}

function setupDownloadModal() {
  var dialog = document.getElementById('download-modal');
  var closeBtn = dialog.querySelector('.download-modal__close');
  var downloads = document.getElementById('downloads');
  var triggerElement = null;

  downloads.addEventListener('click', function(e) {
    var link = e.target.closest('.downloads-list__link');
    if (!link) return;
    if (link.target === '_blank') return;
    if (!link.href || !link.href.startsWith('https://github.com/')) return;

    triggerElement = link;
    setTimeout(function() {
      if (!dialog.open) {
        dialog.showModal();
      }
    }, 100);
  });

  closeBtn.addEventListener('click', function() {
    dialog.close();
  });

  dialog.addEventListener('click', function(e) {
    if (e.target === dialog) {
      dialog.close();
    }
  });

  dialog.addEventListener('close', function() {
    if (triggerElement) {
      triggerElement.focus();
      triggerElement = null;
    }
  });
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
