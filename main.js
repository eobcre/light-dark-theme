const themeContainer = document.querySelector('.theme-container');

document.querySelector('.toggle-button').addEventListener('click', () => {
  document.body.classList.toggle('dark');
  const currentRotation = parseInt(
    getComputedStyle(themeContainer).getPropertyValue('--rotation')
  );
  themeContainer.style.setProperty('--rotation', currentRotation + 180);
});
