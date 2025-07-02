function showSection(id, element) {
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => section.classList.add('hidden'));

  document.getElementById(id).classList.remove('hidden');

  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => link.classList.remove('active'));
  element.classList.add('active');
}

// Typing effect
const roles = ["an AI Developer", "a Sporty Guy", "a Thoughful Reader"];
let index = 0;
let charIndex = 0;
let isDeleting = false;
const typingEl = document.getElementById('typing');

function typeLoop() {
  const currentText = roles[index];
  const isComplete = charIndex === currentText.length;

  typingEl.innerHTML = currentText.substring(0, charIndex) + '<span class="cursor">|</span>';

  if (!isDeleting) {
    if (charIndex < currentText.length) {
      charIndex++;
      setTimeout(typeLoop, 70); 
    } else {
      setTimeout(() => {
        isDeleting = true;
        setTimeout(typeLoop, 50);
      }, 1500); 
    }
  } else {
    if (charIndex > 0) {
      charIndex--;
      setTimeout(typeLoop, 35); 
    } else {
      isDeleting = false;
      index = (index + 1) % roles.length;
      setTimeout(typeLoop, 150); 
    }
  }
}

document.addEventListener("DOMContentLoaded", typeLoop);



// Read more
function toggleReadMore() {
  const short = document.getElementById('bio-short');
  const long = document.getElementById('bio-long');
  const btn = document.querySelector('.read-more-btn');

  const isExpanded = !long.classList.contains('hidden');

  if (isExpanded) {
    long.classList.add('hidden');
    short.classList.remove('hidden');
    btn.textContent = 'Read more';
  } else {
    long.classList.remove('hidden');
    short.classList.add('hidden');
    btn.textContent = 'Show less';
  }
}

//Effect chuyển cảnh fade
function showSection(id, el) {
  const sections = document.querySelectorAll('.section');
  const navLinks = document.querySelectorAll('.nav-link');

  sections.forEach(section => {
    section.classList.remove('visible');
    setTimeout(() => {
      section.classList.add('hidden');
    }, 500); 
  });

  navLinks.forEach(link => link.classList.remove('active'));

  if (el.classList.contains('nav-link')) {
    el.classList.add('active');
  }

  const target = document.getElementById(id);
  if (target) {
    setTimeout(() => {
      target.classList.remove('hidden');
      target.classList.add('visible');
    }, 500);
  }
}
