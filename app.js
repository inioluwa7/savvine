let navBtn = document.querySelector('nav button i');
const navbar = document.querySelector('.navbar');



window.addEventListener('scroll', () => {
  if (window.pageYOffset > 50) { // change the number to desired value
    navbar.classList.add('scrolled');
    navbar.classList.remove('shadow-none');
  } else {
    navbar.classList.remove('scrolled');
    navbar.classList.add('shadow-none');
  }
});

navBtn.addEventListener('click', () => {
    navbar.classList.add('scrolled');
});