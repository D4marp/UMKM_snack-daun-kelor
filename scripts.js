// ========== Mobile Menu Open/Close ==========

// Open Menu
document.getElementById('openMenu').onclick = function () {
  document.getElementById('mobileMenu').classList.remove('hidden');
};

// Close Menu
document.getElementById('closeMenu').onclick = function () {
  document.getElementById('mobileMenu').classList.add('hidden');
};

// ESC key to close menu
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    document.getElementById('mobileMenu').classList.add('hidden');
  }
});


// ========== Dark Mode Setup with LocalStorage ==========

// Load saved theme on page load
window.addEventListener('DOMContentLoaded', () => {
  const theme = localStorage.getItem('theme');
  const html = document.documentElement;

  if (theme === 'dark') {
    html.classList.add('dark');
    document.getElementById('ball').classList.add('translate-x-5');
    document.getElementById('mobileBall').classList.add('translate-x-5');
  }
});

// Toggle Dark Mode
function toggleDarkMode() {
  const html = document.documentElement;
  const isDark = html.classList.toggle('dark');

  // Move the toggle balls
  document.getElementById('ball').classList.toggle('translate-x-5');
  document.getElementById('mobileBall').classList.toggle('translate-x-5');

  // Save theme in localStorage
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

// Add click events
document.getElementById('darkToggle').onclick = toggleDarkMode;
document.getElementById('mobileDarkToggle').onclick = toggleDarkMode;
