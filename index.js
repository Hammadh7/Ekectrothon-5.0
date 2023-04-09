const aboutLink = document.querySelector('a[href="#about-section"]');

aboutLink.addEventListener('click', (event) => {
  event.preventDefault(); // prevent the default link behavior
  const aboutSection = document.querySelector('#about-section');
  aboutSection.scrollIntoView({ behavior: 'smooth' }); // scroll to the section
});
  
 





//
const text = "Your Finance Journey With Finanace Guru";
const delay = 100; // adjust speed of typing
const pause = 1000; // pause for 1 second

let index = 0;
let isDeleting = false;
let textContainer = document.getElementById("text");

function animateText() {
  const char = text.charAt(index);
  if (isDeleting) {
    textContainer.textContent = text.substring(0, index - 1);
  } else {
    textContainer.textContent = text.substring(0, index) + char;
  }
  index += isDeleting ? -1 : 1;
  if (index == text.length + 1) {
    isDeleting = true;
    index = text.length - 1;
  } else if (index == -1) {
    isDeleting = false;
    index = 0;
  }
  setTimeout(animateText, isDeleting ? delay / 2 : delay);
}

setTimeout(animateText, pause);
