function showSection(id, element) {
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => section.classList.add('hidden'));

  document.getElementById(id).classList.remove('hidden');

  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => link.classList.remove('active'));
  element.classList.add('active');
}

// Typing effect
const roles = ["an AI developer", "a Web developer", "a Thinker, a Feeler, and a quiet Fighter"];
let index = 0;
let charIndex = 0;
let isDeleting = false;
const typingEl = document.getElementById('typing');

function typeLoop() {
  const currentText = roles[index];
  const isComplete = charIndex === currentText.length;

  // Hiển thị văn bản + dấu gạch |
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

//Effect chuyển cảnh
function showSection(id, el) {
  const sections = document.querySelectorAll('.section');
  const navLinks = document.querySelectorAll('.nav-link');

  // Ẩn tất cả sections với hiệu ứng fade out
  sections.forEach(section => {
    section.classList.remove('visible');
    setTimeout(() => {
      section.classList.add('hidden');
    }, 500); // thời gian trùng với transition 0.5s
  });

  // Xóa class active khỏi tất cả nav links
  navLinks.forEach(link => link.classList.remove('active'));

  // Kích hoạt nav link hiện tại
  if (el.classList.contains('nav-link')) {
    el.classList.add('active');
  }

  // Hiển thị section được chọn với fade in
  const target = document.getElementById(id);
  if (target) {
    setTimeout(() => {
      target.classList.remove('hidden');
      target.classList.add('visible');
    }, 500); // delay hiển thị sau khi fade out xong
  }
}
