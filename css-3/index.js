const themeToggler = document.getElementById('theme-toggler');

themeToggler.addEventListener('click', () => {
  const body = document.querySelector('body');

  body.classList.toggle('dark-theme');
  console.log(body.classList);
});
