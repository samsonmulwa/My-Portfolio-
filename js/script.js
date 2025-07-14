const toggleSwitch = document.querySelector('#checkbox');
const currentTheme = localStorage.getItem('theme');
const themeLabel = document.getElementById('theme-label');
const icon = document.querySelector('.fa-moon'); // Font Awesome icon

// Check for saved user preference on page load
if (currentTheme) {
  document.body.classList.add(currentTheme);
  if (currentTheme === 'dark-mode') {
    toggleSwitch.checked = true;
    themeLabel.textContent = 'Light Mode';
    icon.classList.replace('fa-moon', 'fa-sun'); // Set icon to sun if dark mode is enabled
  }
}

// Switch theme dynamically
function switchTheme(e) {
  if (e.target.checked) {
    document.body.classList.add('dark-mode');
    localStorage.setItem('theme', 'dark-mode');
    themeLabel.textContent = 'Light Mode';
    icon.classList.replace('fa-moon', 'fa-sun'); // Moon → Sun
  } else {
    document.body.classList.remove('dark-mode');
    localStorage.setItem('theme', 'light-mode');
    themeLabel.textContent = 'Dark Mode';
    icon.classList.replace('fa-sun', 'fa-moon'); // Sun → Moon
  }
}

toggleSwitch.addEventListener('change', switchTheme);