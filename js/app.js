let navBtn = document.querySelector('nav button i');
const navbar = document.querySelector('.navbar');
// Get all fade-in sections
const sections = document.querySelectorAll('.fade-in-section');


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


// Loop through each section and add a scroll listener
sections.forEach(section => {
  window.addEventListener('scroll', () => {
    // Calculate the section's position relative to the viewport
    const sectionTop = section.getBoundingClientRect().top;
    const sectionBottom = section.getBoundingClientRect().bottom;

    // If the section is partially visible in the viewport, add the "is-visible" class
    if (sectionTop < window.innerHeight && sectionBottom > 0) {
      section.classList.add('is-visible');
    } else {
      section.classList.remove('is-visible');
    }
  });
});
