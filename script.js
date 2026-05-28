// script.js
const menuToggle = document.getElementById('menu-toggle');
const navList = document.querySelector('.nav ul');

menuToggle.addEventListener('click', () => {
  navList.style.display = navList.style.display === 'flex' ? 'none' : 'flex';
});
