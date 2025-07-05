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

  // Hiển thị văn bản
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
    }, 500); 
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
    }, 500); 
  }
}

  // Intersection Observer for animation trigger
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animationDelay = `${entry.target.dataset.delay || 0}ms`;
        entry.target.style.animationPlayState = 'running';
      }
    });
  }, observerOptions);

  // Observe achievement items
  document.addEventListener('DOMContentLoaded', () => {
    const achievementItems = document.querySelectorAll('.achievement-item');
    achievementItems.forEach((item, index) => {
      item.dataset.delay = index * 200;
      item.style.animationPlayState = 'paused';
      observer.observe(item);
    });
  });

// Xử lý zoom cho tất cả ảnh có class zoomable-image
document.querySelectorAll('.zoomable-image').forEach(img => {
  img.addEventListener('click', function() {
    const modal = document.getElementById('image-modal');
    const modalImg = document.getElementById('modal-img');
    
    modalImg.src = this.src;
    modalImg.alt = this.alt || 'Ảnh phóng to';
    modal.classList.remove('hidden');
    
    // Thêm hiệu ứng fade in
    setTimeout(() => {
      modalImg.style.opacity = '1';
    }, 10);
  });
});

// Đóng modal
document.querySelector('.close-button')?.addEventListener('click', () => {
  const modal = document.getElementById('image-modal');
  modal.querySelector('#modal-img').style.opacity = '0';
  modal.classList.add('hidden');
});

// Đóng khi click bên ngoài ảnh
document.getElementById('image-modal')?.addEventListener('click', function(e) {
  if (e.target === this) {
    this.querySelector('#modal-img').style.opacity = '0';
    this.classList.add('hidden');
  }
});
