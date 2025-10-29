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

// === INTERNSHIP CAROUSEL FUNCTIONS ===
let slideIndexes = {};

function changeSlide(carouselId, direction) {
  const carousel = document.getElementById(carouselId);
  if (!carousel) return;
  
  const slides = carousel.querySelectorAll('.carousel-slide');
  const dots = carousel.closest('.internship-card').querySelectorAll('.dot');
  
  // Initialize slide index if not exists
  if (!slideIndexes[carouselId]) {
    slideIndexes[carouselId] = 1;
  }
  
  // Hide current slide
  slides[slideIndexes[carouselId] - 1].classList.remove('active');
  dots[slideIndexes[carouselId] - 1].classList.remove('active');
  
  // Calculate new index
  slideIndexes[carouselId] += direction;
  
  // Wrap around if necessary
  if (slideIndexes[carouselId] > slides.length) {
    slideIndexes[carouselId] = 1;
  }
  if (slideIndexes[carouselId] < 1) {
    slideIndexes[carouselId] = slides.length;
  }
  
  // Show new slide
  slides[slideIndexes[carouselId] - 1].classList.add('active');
  dots[slideIndexes[carouselId] - 1].classList.add('active');
}

function currentSlide(carouselId, slideNumber) {
  const carousel = document.getElementById(carouselId);
  if (!carousel) return;
  
  const slides = carousel.querySelectorAll('.carousel-slide');
  const dots = carousel.closest('.internship-card').querySelectorAll('.dot');
  
  // Hide all slides
  slides.forEach(slide => slide.classList.remove('active'));
  dots.forEach(dot => dot.classList.remove('active'));
  
  // Show selected slide
  slides[slideNumber - 1].classList.add('active');
  dots[slideNumber - 1].classList.add('active');
  
  // Update slide index
  slideIndexes[carouselId] = slideNumber;
}

// Auto-play carousel (optional)
function autoPlayCarousel(carouselId, interval = 5000) {
  setInterval(() => {
    changeSlide(carouselId, 1);
  }, interval);
}

// Initialize auto-play for all carousels (optional)
document.addEventListener('DOMContentLoaded', function() {
  // Uncomment if you want auto-play
  // autoPlayCarousel('aiot-carousel', 5000);
});

// === PROJECT FEATURE MODAL DATA ===
const projectFeatureData = {
    'mood-diary': {
        title: 'Mood Diary',
        description: 'Track your emotional journey with our intuitive mood tracking system. Record daily feelings, identify patterns, and gain insights into your mental health.',
        videoUrl: 'https://www.youtube.com/embed/w2ltpWCmu0E', // Replace with your actual video
        features: [
            'Daily mood tracking with emoji selection',
            'Emotional pattern analysis',
            'Monthly mood reports',
            'Personalized insights and recommendations'
        ]
    },
    'calmi-ai': {
        title: 'Calmi AI Assistant',
        description: 'Your 24/7 AI companion powered by advanced language models. Get instant emotional support, coping strategies, and personalized mental health guidance.',
        videoUrl: 'https://www.youtube.com/embed/JbBSaQSR_Bo', // Replace with your actual video
        features: [
            'Real-time emotional support',
            'Personalized coping strategies',
            'Crisis intervention guidance',
            'Multilingual support'
        ]
    },
    'community-forum': {
        title: 'Community Forum',
        description: 'Connect with others on similar journeys. Share experiences, find support, and build meaningful connections in a safe, moderated environment.',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Replace with your actual video
        features: [
            'Anonymous sharing options',
            'Moderated discussions',
            'Support groups by topic',
            'Professional moderator oversight'
        ]
    }
};

// === PROJECT FEATURE MODAL FUNCTIONS ===
function openProjectFeature(featureId) {
    const modal = document.getElementById('project-feature-modal');
    const modalContent = document.getElementById('project-modal-content');
    const data = projectFeatureData[featureId];
    
    if (!data) return;
    
    // Save current scroll position
    const scrollY = window.scrollY;
    document.body.setAttribute('data-scroll-position', scrollY);
    
    // Build modal content with video
    modalContent.innerHTML = `
        <h3 class="project-modal-title">${data.title}</h3>
        <p class="project-modal-description">${data.description}</p>
        
        <div class="project-video-container">
            <div class="project-video-wrapper">
                <iframe 
                    src="${data.videoUrl}?autoplay=1" 
                    title="${data.title} Demo" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                </iframe>
            </div>
        </div>
        
        <h4 style="color: rgba(255, 255, 255, 0.9); margin: 20px 0 15px;">Key Features:</h4>
        <ul class="project-feature-list">
            ${data.features.map(feature => `<li>${feature}</li>`).join('')}
        </ul>
    `;
    
    // Add modal-open class to body to prevent background scrolling
    document.body.classList.add('modal-open');
    modal.classList.add('active');
    
    // Scroll modal content to top
    modalContent.scrollTop = 0;
}

function closeProjectFeature() {
    const modal = document.getElementById('project-feature-modal');
    const modalContent = document.getElementById('project-modal-content');
    
    // Remove modal-open class from body
    document.body.classList.remove('modal-open');
    
    // Restore scroll position
    const scrollY = document.body.getAttribute('data-scroll-position');
    if (scrollY) {
        window.scrollTo(0, parseInt(scrollY));
        document.body.removeAttribute('data-scroll-position');
    }
    
    modal.classList.remove('active');
    
    // Stop video playback
    setTimeout(() => {
        modalContent.innerHTML = '';
    }, 300);
}

// Initialize modal event listeners when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // Close modal when clicking overlay
    const projectOverlay = document.querySelector('.project-modal-overlay');
    if (projectOverlay) {
        projectOverlay.addEventListener('click', closeProjectFeature);
    }
    
    // Prevent scroll propagation from modal content
    const projectModalContent = document.getElementById('project-modal-content');
    if (projectModalContent) {
        projectModalContent.addEventListener('wheel', function(e) {
            const deltaY = e.deltaY;
            const contentHeight = this.scrollHeight;
            const visibleHeight = this.offsetHeight;
            const scrollTop = this.scrollTop;
            
            if ((deltaY < 0 && scrollTop === 0) || 
                (deltaY > 0 && scrollTop + visibleHeight >= contentHeight)) {
                e.preventDefault();
            }
            e.stopPropagation();
        });
    }
});

// ESC key handler for project modal
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        const projectModal = document.getElementById('project-feature-modal');
        if (projectModal && projectModal.classList.contains('active')) {
            closeProjectFeature();
        }
    }
});

document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');
  const body = document.body;
  
  // Tạo overlay
  const overlay = document.createElement('div');
  overlay.className = 'menu-overlay';
  document.body.appendChild(overlay);
  
  // Toggle menu
  hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    overlay.classList.toggle('active');
    body.classList.toggle('menu-open');
  });
  
  // Close menu when clicking overlay
  overlay.addEventListener('click', function() {
    closeMenu();
  });
  
  // Close menu when clicking nav links (đã thêm trong HTML)
  window.closeMenu = function() {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
    overlay.classList.remove('active');
    body.classList.remove('menu-open');
  }
  
  // Close menu on window resize if needed
  window.addEventListener('resize', function() {
    if (window.innerWidth > 1024) {
      closeMenu();
    }
  });
});
