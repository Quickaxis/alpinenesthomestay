// Alpine Nest Homestay Controller Scripting

// 1. DYNAMIC NAV SCROLL TRANSITIONS
const navbar = document.getElementById('mainNavbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// 2. MOBILE MENU CONTROL
const mobileToggle = document.getElementById('mobileToggle');
const mobileNavOverlay = document.getElementById('mobileNavOverlay');

function toggleMobileMenu() {
  mobileToggle.classList.toggle('active');
  mobileNavOverlay.classList.toggle('active');
  if (mobileNavOverlay.classList.contains('active')) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }
}

if (mobileToggle) {
  mobileToggle.addEventListener('click', toggleMobileMenu);
}

// 3. ROOM PHOTO CAROUSELS LOGIC
const carousels = {
  skyline: { currentIdx: 0, total: 7 },
  capsule: { currentIdx: 0, total: 5 },
  cozy: { currentIdx: 0, total: 7 }
};

function updateCarouselUI(carouselId) {
  const container = document.getElementById(`carousel-${carouselId}`);
  if (!container) return;

  const slides = container.querySelector('.carousel-slides');
  const index = carousels[carouselId].currentIdx;
  
  // Slide transition
  slides.style.transform = `translateX(-${index * 100}%)`;
  
  // Dots highlighting
  const dots = container.querySelectorAll('.carousel-dots .dot');
  dots.forEach((dot, idx) => {
    dot.classList.remove('active');
    if (idx === index) {
      dot.classList.add('active');
    }
  });
}

function moveCarousel(carouselId, direction) {
  const data = carousels[carouselId];
  data.currentIdx = (data.currentIdx + direction + data.total) % data.total;
  updateCarouselUI(carouselId);
}

function setCarouselSlide(carouselId, index) {
  carousels[carouselId].currentIdx = index;
  updateCarouselUI(carouselId);
}

// 4. MOUSE 3D TILT EFFECT ON CARDS
const tiltCards = document.querySelectorAll('.card-tilt-effect');
tiltCards.forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Rotate scaling
    const rotateX = -((y - centerY) / centerY) * 7;
    const rotateY = ((x - centerX) / centerX) * 7;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  });
  
  card.addEventListener('mouseleave', () => {
    card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
  });
});

// 5. GALLERY FILTER LOGIC
function filterGallery(category) {
  const filterBtns = document.querySelectorAll('.gallery-filters .filter-btn');
  filterBtns.forEach(btn => {
    btn.classList.remove('active');
    if (btn.getAttribute('onclick').includes(category)) {
      btn.classList.add('active');
    }
  });

  const cards = document.querySelectorAll('#pinterestGrid .gallery-photo-card');
  cards.forEach(card => {
    // Fade out and hide
    if (category === 'all' || card.classList.contains(`g-item-${category}`)) {
      card.style.display = 'block';
      setTimeout(() => {
        card.style.opacity = '1';
        card.style.transform = 'scale(1)';
      }, 50);
    } else {
      card.style.opacity = '0';
      card.style.transform = 'scale(0.95)';
      setTimeout(() => {
        card.style.display = 'none';
      }, 350);
    }
  });
}

// 6. HD LIGHTBOX POPUP SYSTEM
const galleryLightbox = document.getElementById('galleryLightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxCaption = document.getElementById('lightboxCaption');

// Complete photos array mapping (20 images in total)
const lightboxData = [
  // Skyline Suite
  { src: 'photos/skylinesuite4.jpg', caption: 'Skyline Suite (Luxury 1BHK) - Bed Setup View' },
  { src: 'photos/skylinesuite5.jpg', caption: 'Skyline Suite (Luxury 1BHK) - Private Kitchen Setup' },
  { src: 'photos/skylinesuite1.jpg', caption: 'Skyline Suite (Luxury 1BHK) - Bedroom Perspective 1' },
  { src: 'photos/skylinesuite2.jpg', caption: 'Skyline Suite (Luxury 1BHK) - Bedroom Perspective 2' },
  { src: 'photos/skylinesuite3.jpg', caption: 'Skyline Suite (Luxury 1BHK) - Bedroom Perspective 3' },
  { src: 'photos/skylinesuite6.jpg', caption: 'Skyline Suite (Luxury 1BHK) - Dedicated Work Desk' },
  { src: 'photos/skylinesuite7.jpg', caption: 'Skyline Suite (Luxury 1BHK) - Living & Entrance Lounge' },
  
  // Capsule Studio
  { src: 'photos/capsule1.jpg', caption: 'Capsule Studio (Luxury 1RK) - Futuristic Theme Bed' },
  { src: 'photos/capsule2.jpg', caption: 'Capsule Studio (Luxury 1RK) - Ambient Cozy Lighting' },
  { src: 'photos/capsule3.jpg', caption: 'Capsule Studio (Luxury 1RK) - Curved Wood Detailing' },
  { src: 'photos/capsule4.jpg', caption: 'Capsule Studio (Luxury 1RK) - Dressing & Storage Frame' },
  { src: 'photos/capsule5.jpg', caption: 'Capsule Studio (Luxury 1RK) - In-room Kitchen Set' },
  
  // Cozy 2BHK Studio
  { src: 'photos/2bhk1.jpg', caption: 'Cozy Studio (Luxury 2BHK) - Master Bedroom' },
  { src: 'photos/2bhk2.jpg', caption: 'Cozy Studio (Luxury 2BHK) - Second Bedroom' },
  { src: 'photos/2bhk3.jpg', caption: 'Cozy Studio (Luxury 2BHK) - Spacing Living Hall' },
  { src: 'photos/2bhk4.jpg', caption: 'Cozy Studio (Luxury 2BHK) - Gated Balcony Area' },
  { src: 'photos/2bhk5.jpg', caption: 'Cozy Studio (Luxury 2BHK) - Study Workspace Desk' },
  { src: 'photos/2bhk6.jpg', caption: 'Cozy Studio (Luxury 2BHK) - Fully Equipped Kitchen' },
  { src: 'photos/2bhk7.jpg', caption: 'Cozy Studio (Luxury 2BHK) - Attached Bathroom Space' }
];

let currentLightboxIndex = 0;

function openLightbox(index) {
  currentLightboxIndex = index;
  galleryLightbox.style.display = 'flex';
  updateLightboxContent();
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  galleryLightbox.style.display = 'none';
  document.body.style.overflow = 'auto';
}

function updateLightboxContent() {
  const data = lightboxData[currentLightboxIndex];
  if (lightboxImg) {
    lightboxImg.style.opacity = '0.2';
    setTimeout(() => {
      lightboxImg.src = data.src;
      lightboxCaption.innerText = data.caption;
      lightboxImg.style.opacity = '1';
    }, 150);
  }
}

function changeLightboxImg(direction) {
  currentLightboxIndex = (currentLightboxIndex + direction + lightboxData.length) % lightboxData.length;
  updateLightboxContent();
}

// Lightbox overlay clicking close
if (galleryLightbox) {
  galleryLightbox.addEventListener('click', (e) => {
    if (e.target === galleryLightbox) {
      closeLightbox();
    }
  });
}

// Keyboard arrow controls for lightbox
document.addEventListener('keydown', (e) => {
  if (galleryLightbox && galleryLightbox.style.display === 'flex') {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') changeLightboxImg(1);
    if (e.key === 'ArrowLeft') changeLightboxImg(-1);
  }
});

// 7. INTERACTIVE MODAL BOOKING
const bookingModal = document.getElementById('bookingModal');
const roomSelect = document.getElementById('roomSelect');

function openBookingModal() {
  bookingModal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeBookingModal() {
  bookingModal.classList.remove('active');
  document.body.style.overflow = 'auto';
}

function selectRoomAndOpenModal(roomName) {
  if (roomSelect) {
    for (let i = 0; i < roomSelect.options.length; i++) {
      if (roomSelect.options[i].value.includes(roomName)) {
        roomSelect.selectedIndex = i;
        break;
      }
    }
  }
  openBookingModal();
}

function handleBookingSubmit(event) {
  event.preventDefault();
  
  const room = document.getElementById('roomSelect').value;
  const checkin = document.getElementById('checkinDate').value;
  const checkout = document.getElementById('checkoutDate').value;
  const guests = document.getElementById('guestCount').value;
  const name = document.getElementById('guestName').value;
  
  if (new Date(checkin) >= new Date(checkout)) {
    alert("Check-out date must succeed check-in date.");
    return;
  }
  
  const checkinFormatted = new Date(checkin).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
  const checkoutFormatted = new Date(checkout).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });

  // Gated WhatsApp details
  const primaryNumber = "918486627950";
  const messageText = `Hello Alpine Nest Homestay Team! 🏔️\n\nI would like to make a reservation inquiry:\n\n👤 *Primary Guest Name:* ${name}\n🏨 *Selected Suite:* ${room}\n📅 *Check-In Date:* ${checkinFormatted}\n📅 *Check-Out Date:* ${checkoutFormatted}\n👥 *Number of Guests:* ${guests} Guest(s)\n\nPlease confirm availability. Thank you!`;
  
  const encodedText = encodeURIComponent(messageText);
  const waLinkUrl = `https://wa.me/${primaryNumber}?text=${encodedText}`;
  
  window.open(waLinkUrl, '_blank');
  closeBookingModal();
}

if (bookingModal) {
  bookingModal.addEventListener('click', (e) => {
    if (e.target === bookingModal) {
      closeBookingModal();
    }
  });
}

// Initial dates validation boundary
document.addEventListener('DOMContentLoaded', () => {
  const checkinIn = document.getElementById('checkinDate');
  const checkoutIn = document.getElementById('checkoutDate');
  
  if (checkinIn && checkoutIn) {
    const todayStr = new Date().toISOString().split('T')[0];
    checkinIn.min = todayStr;
    checkoutIn.min = todayStr;
    
    checkinIn.addEventListener('change', () => {
      checkoutIn.min = checkinIn.value;
    });
  }
});

// Helper for Footer Links to scroll directly to the selected room card
function switchRoomLink(roomKey) {
  const card = document.getElementById(`carousel-${roomKey}`);
  if (card) {
    card.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}

// 8. INTERSECTION OBSERVER FOR FADE UP REVEALS
const reveals = document.querySelectorAll('.scroll-reveal');
const obsOptions = {
  root: null,
  threshold: 0.08,
  rootMargin: '0px 0px -40px 0px'
};

const observer = new IntersectionObserver((entries, self) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
      self.unobserve(entry.target);
    }
  });
}, obsOptions);

reveals.forEach(el => {
  observer.observe(el);
});
