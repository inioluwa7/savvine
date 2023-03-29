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


const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Veritas World",];
const typingDelay = 100;
const erasingDelay = 100;
const newTextDelay = 1000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
  	setTimeout(erase, newTextDelay);
  }
}

function erase() {
	if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});