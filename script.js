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

document.addEventListener('DOMContentLoaded', () => {
  const achievementItems = document.querySelectorAll('.achievement-item');
  achievementItems.forEach((item, index) => {
    item.dataset.delay = index * 200;
    item.style.animationPlayState = 'paused';
    observer.observe(item);
  });
});

// little corner
let currentIndex = 0;
const track = document.getElementById('book-track');

function scrollBooks(direction) {
  const books = track.querySelectorAll('.book');
  const total = books.length;

  books[currentIndex].classList.remove('book-center');

  currentIndex = (currentIndex + direction + total) % total;

  books[currentIndex].classList.add('book-center');

  const offset = -160 * currentIndex + (track.offsetWidth / 2 - 160);
  track.style.transform = `translateX(${offset}px)`;
}

// === XỬ LÝ ZOOM ẢNH ĐƯỢC CẢI THIỆN ===
function initImageZoom() {
  // Xóa event listeners cũ
  document.querySelectorAll('.zoomable-image').forEach(img => {
    img.replaceWith(img.cloneNode(true));
  });
  
  // Thêm event listeners mới
  document.querySelectorAll('.zoomable-image').forEach(img => {
    img.addEventListener('click', function(e) {
      e.stopPropagation(); // Ngăn event bubble up
      
      const modal = document.getElementById('image-modal');
      const modalImg = document.getElementById('modal-img');
      
      if (modal && modalImg) {
        modalImg.src = this.src;
        modalImg.alt = this.alt || 'Ảnh phóng to';
        modal.classList.remove('hidden');
        
        // Đảm bảo ảnh giữ tỉ lệ gốc
        modalImg.style.maxWidth = '90%';
        modalImg.style.maxHeight = '90vh';
        modalImg.style.width = 'auto';
        modalImg.style.height = 'auto';
        modalImg.style.objectFit = 'contain';
        
        setTimeout(() => {
          modalImg.style.opacity = '1';
        }, 10);
      }
    });
  });
}

// Gọi hàm khi DOM loaded
document.addEventListener('DOMContentLoaded', function() {
  initImageZoom();
  
  // Re-init khi chuyển section
  const originalShowSection = window.showSection;
  window.showSection = function(id, el) {
    originalShowSection(id, el);
    setTimeout(() => {
      initImageZoom();
    }, 600);
  };
});

// Đóng modal zoom ảnh
document.querySelector('.close-button')?.addEventListener('click', () => {
  const modal = document.getElementById('image-modal');
  const modalImg = document.getElementById('modal-img');
  if (modal && modalImg) {
    modalImg.style.opacity = '0';
    setTimeout(() => {
      modal.classList.add('hidden');
    }, 300);
  }
});

// Đóng khi click bên ngoài ảnh
document.getElementById('image-modal')?.addEventListener('click', function(e) {
  if (e.target === this || e.target.classList.contains('modal-content')) {
    const modalImg = document.getElementById('modal-img');
    modalImg.style.opacity = '0';
    setTimeout(() => {
      this.classList.add('hidden');
    }, 200);
  }
});

// Đóng modal zoom với ESC
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    const imageModal = document.getElementById('image-modal');
    if (imageModal && !imageModal.classList.contains('hidden')) {
      const modalImg = document.getElementById('modal-img');
      modalImg.style.opacity = '0';
      setTimeout(() => {
        imageModal.classList.add('hidden');
      }, 300);
    }
  }
});

// === ACHIEVEMENT MODAL FUNCTIONS ===
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Re-init zoom cho ảnh trong modal
    setTimeout(() => {
      initImageZoom();
    }, 100);
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
}

// Close achievement modal when clicking outside
document.querySelectorAll('.modal').forEach(modal => {
  modal.addEventListener('click', function(e) {
    // Chỉ đóng nếu click vào background, không phải content
    if (e.target === this) {
      this.classList.remove('active');
      document.body.style.overflow = 'auto';
    }
  });
});

// Update ESC key handler cho cả 2 loại modal
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    // Đóng achievement modals
    document.querySelectorAll('.modal.active').forEach(modal => {
      modal.classList.remove('active');
      document.body.style.overflow = 'auto';
    });
    
    // Đóng image zoom modal
    const imageModal = document.getElementById('image-modal');
    if (imageModal && !imageModal.classList.contains('hidden')) {
      const modalImg = document.getElementById('modal-img');
      modalImg.style.opacity = '0';
      setTimeout(() => {
        imageModal.classList.add('hidden');
      }, 300);
    }
  }
});
