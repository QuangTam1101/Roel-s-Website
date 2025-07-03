/* === BASE === */
body {
  font-family: 'Segoe UI', sans-serif;
  background-color: #383838;
  color: #fff;
  margin: 0;
}

.hidden {
  display: none;
}

/* === HEADER === */
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  background-color: #1d1d1d;
}

.logo {
  font-size: 24px;
  font-weight: bold;
}

.highlight {
  color: #8DD8FF;
}

/* === NAVIGATION === */
nav ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
  list-style: none;
  padding: 0;
  margin: 40px 0;
}

.nav-link {
  position: relative;
  padding: 12px 24px;
  color: #fff;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  border: none;
  outline: none;
  border-radius: 12px;
  background: #222;
  z-index: 1;
  transition: all 0.3s ease;
  overflow: hidden;
}

/* Background gradient cho mỗi button (ẩn ban đầu) */
.nav-link::after {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
  transition: left 0.6s ease;
  z-index: -1;
}

/* Hiệu ứng glow border */
.nav-link::before {
  content: "";
  position: absolute;
  top: -3px;
  left: -3px;
  width: calc(100% + 6px);
  height: calc(100% + 6px);
  background: linear-gradient(45deg, transparent, transparent);
  border-radius: 15px;
  z-index: -2;
  opacity: 0;
  transition: opacity 0.3s ease;
  filter: blur(8px);
  animation: borderRotate 3s linear infinite;
}

@keyframes borderRotate {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* Hover effects */
.nav-link:hover {
  transform: translateY(-2px) scale(1.05);
  box-shadow: 0 8px 25px rgba(0,0,0,0.3);
}

.nav-link:hover::before {
  opacity: 1;
}

.nav-link:hover::after {
  left: 100%;
}

.nav-link:active {
  transform: translateY(0) scale(0.98);
}

/* Home */
.nav-link.home {
  background: linear-gradient(135deg, #222 0%, #2a1a1a 100%);
}

.nav-link.home:hover {
  background: linear-gradient(135deg, #ff1744 0%, #d50000 50%, #ff1744 100%);
  background-size: 200% 200%;
  animation: gradientShift 2s ease infinite;
}

.nav-link.home::before {
  background: linear-gradient(45deg, #ff1744, #d50000, #ff5722, #ff1744);
  background-size: 300% 300%;
}

/* About Me */
.nav-link.about {
  background: linear-gradient(135deg, #222 0%, #2a1f1a 100%);
}

.nav-link.about:hover {
  background: linear-gradient(135deg, #ff9800 0%, #f57c00 50%, #ff9800 100%);
  background-size: 200% 200%;
  animation: gradientShift 2s ease infinite;
}

.nav-link.about::before {
  background: linear-gradient(45deg, #ff9800, #f57c00, #ffab40, #ff9800);
  background-size: 300% 300%;
}

/* Achievements */
.nav-link.achievements {
  background: linear-gradient(135deg, #222 0%, #2a2a1a 100%);
}

.nav-link.achievements:hover {
  background: linear-gradient(135deg, #ffeb3b 0%, #fbc02d 50%, #ffeb3b 100%);
  background-size: 200% 200%;
  animation: gradientShift 2s ease infinite;
  color: #333;
}

.nav-link.achievements::before {
  background: linear-gradient(45deg, #ffeb3b, #fbc02d, #ffff57, #ffeb3b);
  background-size: 300% 300%;
}

/* My Projects */
.nav-link.projects {
  background: linear-gradient(135deg, #222 0%, #1a2a1a 100%);
}

.nav-link.projects:hover {
  background: linear-gradient(135deg, #4caf50 0%, #388e3c 50%, #4caf50 100%);
  background-size: 200% 200%;
  animation: gradientShift 2s ease infinite;
}

.nav-link.projects::before {
  background: linear-gradient(45deg, #4caf50, #388e3c, #66bb6a, #4caf50);
  background-size: 300% 300%;
}

/* Leadership & Activities */
.nav-link.leadership {
  background: linear-gradient(135deg, #222 0%, #1a1a2a 100%);
}

.nav-link.leadership:hover {
  background: linear-gradient(135deg, #2196f3 0%, #1976d2 50%, #2196f3 100%);
  background-size: 200% 200%;
  animation: gradientShift 2s ease infinite;
}

.nav-link.leadership::before {
  background: linear-gradient(45deg, #2196f3, #1976d2, #42a5f5, #2196f3);
  background-size: 300% 300%;
}

/* My Little Corner */
.nav-link.corner {
  background: linear-gradient(135deg, #222 0%, #2a1a2a 100%);
}

.nav-link.corner:hover {
  background: linear-gradient(135deg, #9c27b0 0%, #7b1fa2 50%, #9c27b0 100%);
  background-size: 200% 200%;
  animation: gradientShift 2s ease infinite;
}

.nav-link.corner::before {
  background: linear-gradient(45deg, #9c27b0, #7b1fa2, #ba68c8, #9c27b0);
  background-size: 300% 300%;
}

@keyframes gradientShift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

/* === SECTION === */
.section {
  display: none;
  padding: 40px;
  max-width: 1000px;
  margin: auto;
}

.section h2 {
  color: #8DD8FF;
}

.section:not(.hidden) {
  display: block;
}

/* === HOME LAYOUT === */
.home-container {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 40px;
  padding: 40px 20px;
}

.avatar {
  flex: 1 1 350px;
  max-width: 500px;
}

.avatar img {
  width: 100%;
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: none;
  filter: none;
  transition: transform 0.3s;
}

.avatar img:hover {
  transform: scale(1.02);
}

.intro {
  flex: 1 1 550px;
  max-width: 650px;
  margin-left: 20px
}

.hello-text {
  font-size: 32px;
  margin: 0;
  color: #fff !important;
}

.name-text {
  font-size: 48px;
  font-weight: bold;
  margin: 10px 0;
  color: #8DD8FF;
}

.typing-header {
  font-size: 24px;
  margin-bottom: 20px;
}

.typing-text {
  color: #8DD8FF;
  font-weight: bold;
}

.bio {
  font-size: 18px;
  line-height: 1.6;
  color: #ddd;
  text-align: justify;
}

.read-more-btn {
  background-color: #8DD8FF;
  color: #001c34;
  border: none;
  padding: 8px 16px;
  font-size: 14px;
  margin-top: 10px;
  border-radius: 4px;
  cursor: pointer;
  transition: 0.3s;
}

.read-more-btn:hover {
  background-color: #6fc8eb;
}

/* === RESPONSIVE === */
@media (max-width: 768px) {
  .home-container {
    flex-direction: column;
    text-align: center;
  }

  .intro,
  .avatar {
    max-width: 100%;
  }
}

/* === CURSOR BLINK === */
.cursor {
  animation: blink 0.8s infinite;
  color: #8DD8FF;
}

@keyframes blink {
  0% { opacity: 1; }
  50% { opacity: 0; }
  100% { opacity: 1; }
}

/* === RESUME === */
.resume-button {
  display: inline-block;
  background-color: #8DD8FF;
  color: #001c34;
  font-weight: 600;
  text-decoration: none;
  padding: 10px 20px;
  border-radius: 8px;
  margin-top: 20px;
  font-size: 16px;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.resume-button:hover {
  background-color: #6fc8eb;
  transform: translateY(-2px);
}


/* === ENHANCED ACHIEVEMENTS SECTION === */
.achievements-timeline {
  position: relative;
  padding: 2rem 0;
}

.achievements-timeline::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 3px;
  background: linear-gradient(180deg, #8DD8FF, #6fc8eb, #8DD8FF);
  transform: translateX(-50%);
  border-radius: 2px;
}

.achievement-item {
  display: flex;
  align-items: center;
  margin-bottom: 4rem;
  position: relative;
  animation: fadeInUp 0.8s ease-out;
}

.achievement-item:nth-child(even) {
  flex-direction: row-reverse;
}

.achievement-item::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 20px;
  height: 20px;
  background: linear-gradient(45deg, #8DD8FF, #6fc8eb);
  border-radius: 50%;
  border: 4px solid #383838;
  z-index: 2;
  box-shadow: 0 0 20px rgba(141, 216, 255, 0.5);
}

.achievement-content {
  flex: 1;
  max-width: 45%;
  background: linear-gradient(135deg, #2a2a2a, #1f1f1f);
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
  position: relative;
  border: 1px solid rgba(141, 216, 255, 0.1);
  transition: all 0.3s ease;
}

.achievement-content:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.6);
  border-color: rgba(141, 216, 255, 0.3);
}

.achievement-content::before {
  content: '';
  position: absolute;
  top: 50%;
  width: 0;
  height: 0;
  border: 15px solid transparent;
  transform: translateY(-50%);
}

.achievement-item:nth-child(odd) .achievement-content::before {
  right: -30px;
  border-left-color: #2a2a2a;
}

.achievement-item:nth-child(even) .achievement-content::before {
  left: -30px;
  border-right-color: #2a2a2a;
}

.achievement-category {
  display: inline-block;
  background: linear-gradient(45deg, #8DD8FF, #6fc8eb);
  color: #001c34;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.achievement-title {
  font-size: 1.5rem;
  color: #fff;
  margin-bottom: 0.5rem;
  font-weight: 700;
}

.achievement-description {
  color: #ccc;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.achievement-awards {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.award-badge {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(141, 216, 255, 0.1);
  padding: 0.5rem 1rem;
  border-radius: 25px;
  border: 1px solid rgba(141, 216, 255, 0.2);
  transition: all 0.3s ease;
}

.award-badge:hover {
  background: rgba(141, 216, 255, 0.2);
  transform: scale(1.05);
}

.award-icon {
  font-size: 1.2rem;
}

.award-text {
  font-size: 0.9rem;
  color: #8DD8FF;
  font-weight: 600;
}

.achievement-images {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}

.achievement-image {
  flex: 1;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease;
}

.achievement-image:hover {
  transform: scale(1.05);
}

.achievement-image img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  display: block;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
  margin-bottom: 3rem;
}

.stat-card {
  background: linear-gradient(135deg, #2a2a2a, #1f1f1f);
  padding: 2rem;
  border-radius: 15px;
  text-align: center;
  border: 1px solid rgba(141, 216, 255, 0.1);
  transition: all 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-5px);
  border-color: rgba(141, 216, 255, 0.3);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
}

.stat-number {
  font-size: 3rem;
  font-weight: 700;
  color: #8DD8FF;
  margin-bottom: 0.5rem;
}

.stat-label {
  color: #ccc;
  font-size: 1.1rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .achievements-timeline::before {
    left: 30px;
  }

  .achievement-item {
    flex-direction: column !important;
    align-items: flex-start;
    margin-left: 2rem;
  }

  .achievement-item::before {
    left: 30px;
    transform: translateX(-50%);
  }

  .achievement-content {
    max-width: 100%;
    margin-left: 2rem;
  }

  .achievement-content::before {
    display: none;
  }

  .stats-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
}

/* Leadership & Activities Styles */
.leadership-intro {
  text-align: center;
  margin-bottom: 3rem;
  padding: 2rem;
  background: linear-gradient(135deg, rgba(141, 216, 255, 0.1), rgba(111, 200, 235, 0.1));
  border-radius: 15px;
  border: 1px solid rgba(141, 216, 255, 0.2);
}

.leadership-intro p {
  font-size: 1.2rem;
  color: #ddd;
  margin: 0;
  line-height: 1.6;
}

.leadership-timeline {
  position: relative;
  padding: 2rem 0;
}

.leadership-timeline::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 3px;
  background: linear-gradient(180deg, #8DD8FF, #6fc8eb, #8DD8FF);
  transform: translateX(-50%);
  border-radius: 2px;
}

.leadership-item {
  display: flex;
  align-items: flex-start;
  margin-bottom: 4rem;
  position: relative;
  animation: fadeInUp 0.8s ease-out;
}

.leadership-item:nth-child(even) {
  flex-direction: row-reverse;
}

.leadership-item::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 2rem;
  transform: translateX(-50%);
  width: 20px;
  height: 20px;
  background: linear-gradient(45deg, #8DD8FF, #6fc8eb);
  border-radius: 50%;
  border: 4px solid #383838;
  z-index: 2;
  box-shadow: 0 0 20px rgba(141, 216, 255, 0.5);
}

.leadership-content {
  flex: 1;
  max-width: 45%;
  background: linear-gradient(135deg, #2a2a2a, #1f1f1f);
  padding: 2.5rem;
  border-radius: 20px;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);
  position: relative;
  border: 1px solid rgba(141, 216, 255, 0.1);
  transition: all 0.3s ease;
}

.leadership-content:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6);
  border-color: rgba(141, 216, 255, 0.3);
}

.leadership-content::before {
  content: '';
  position: absolute;
  top: 2rem;
  width: 0;
  height: 0;
  border: 15px solid transparent;
  transform: translateY(-50%);
}

.leadership-item:nth-child(odd) .leadership-content::before {
  right: -30px;
  border-left-color: #2a2a2a;
}

.leadership-item:nth-child(even) .leadership-content::before {
  left: -30px;
  border-right-color: #2a2a2a;
}

.leadership-header {
  margin-bottom: 2rem;
}

.role-badge {
  display: inline-block;
  padding: 0.5rem 1.2rem;
  border-radius: 25px;
  font-size: 0.9rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 1rem;
}

.role-badge.founder {
  background: linear-gradient(45deg, #ff6b6b, #ee5a52);
  color: white;
}

.role-badge.vice-president {
  background: linear-gradient(45deg, #4ecdc4, #45b7b8);
  color: white;
}

.role-badge.head-academic {
  background: linear-gradient(45deg, #45b7d1, #3498db);
  color: white;
}

.role-badge.organizer {
  background: linear-gradient(45deg, #96ceb4, #85c1a7);
  color: white;
}

.leadership-title {
  font-size: 1.8rem;
  font-weight: 700;
  color: #8DD8FF;
  margin-bottom: 0.5rem;
}

.leadership-subtitle {
  font-size: 1.1rem;
  color: #bbb;
  font-style: italic;
  margin-bottom: 0.5rem;
}

.leadership-period {
  font-size: 0.9rem;
  color: #999;
  font-weight: 500;
}

.leadership-description p {
  font-size: 1.1rem;
  color: #ddd;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.achievements-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
}

.achievement-point {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem;
  background: rgba(141, 216, 255, 0.05);
  border-radius: 10px;
  border-left: 3px solid #8DD8FF;
  transition: all 0.3s ease;
}

.achievement-point:hover {
  background: rgba(141, 216, 255, 0.1);
  transform: translateX(5px);
}

.achievement-icon {
  font-size: 1.2rem;
  flex-shrink: 0;
  margin-top: 0.1rem;
}

.achievement-point span:last-child {
  color: #ccc;
  line-height: 1.5;
}

.leadership-gallery {
  margin-top: 2rem;
}

.gallery-placeholder {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 1rem;
}

.photo-slot {
  aspect-ratio: 1;
  background: linear-gradient(135deg, rgba(141, 216, 255, 0.1), rgba(111, 200, 235, 0.1));
  border: 2px dashed rgba(141, 216, 255, 0.3);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  transition: all 0.3s ease;
  cursor: pointer;
}

.photo-slot:hover {
  background: linear-gradient(135deg, rgba(141, 216, 255, 0.2), rgba(111, 200, 235, 0.2));
  border-color: rgba(141, 216, 255, 0.5);
  transform: scale(1.05);
}

.photo-icon {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.photo-slot p {
  font-size: 0.8rem;
  color: #8DD8FF;
  margin: 0;
  font-weight: 500;
}

.impact-summary {
  margin-top: 4rem;
  text-align: center;
}

.impact-summary h3 {
  color: #8DD8FF;
  font-size: 2rem;
  margin-bottom: 2rem;
}

.impact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
}

.impact-card {
  background: linear-gradient(135deg, #2a2a2a, #1f1f1f);
  padding: 2rem;
  border-radius: 15px;
  text-align: center;
  border: 1px solid rgba(141, 216, 255, 0.1);
  transition: all 0.3s ease;
}

.impact-card:hover {
  transform: translateY(-5px);
  border-color: rgba(141, 216, 255, 0.3);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
}

.impact-number {
  font-size: 3rem;
  font-weight: 700;
  color: #8DD8FF;
  margin-bottom: 0.5rem;
}

.impact-label {
  color: #ccc;
  font-size: 1.1rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .leadership-timeline::before {
    left: 30px;
  }

  .leadership-item {
    flex-direction: column !important;
    align-items: flex-start;
    margin-left: 2rem;
  }

  .leadership-item::before {
    left: 30px;
    transform: translateX(-50%);
  }

  .leadership-content {
    max-width: 100%;
    margin-left: 2rem;
  }

  .leadership-content::before {
    display: none;
  }

  .gallery-placeholder {
    grid-template-columns: repeat(2, 1fr);
  }

  .impact-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
}

/* Zoom modal */
.image-modal {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 9999;
  left: 0;
  top: 0
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.85);
  transition: opacity 0.3s ease;
}

.image-modal.hidden {
  display: none;
}

.image-modal .modal-content {
  max-width: 90%;
  max-height: 90%;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
}

.image-modal .close-button {
  position: absolute;
  top: 30px;
  right: 40px;
  color: white;
  font-size: 40px;
  font-weight: bold;
  cursor: pointer;
  z-index: 10000;
}
