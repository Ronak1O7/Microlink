class AudioEngine {
  constructor() {
    this.weddingAudio = new Audio('https://commondatastorage.googleapis.com/codeskulptor-assets/week7-button.m4a');
    this.edmAudio = new Audio('https://commondatastorage.googleapis.com/codeskulptor-assets/week7-bounce.m4a');

    this.weddingAudio.loop = true;
    this.edmAudio.loop = true;

    this.weddingAudio.volume = 0;
    this.edmAudio.volume = 0;
    this.isUnlocked = false;
  }

  unlockAndPlay() {
    if (this.isUnlocked) return;

    // Play both tracks
    Promise.all([
      this.weddingAudio.play().catch(e => console.error("Wedding audio play failed:", e)),
      this.edmAudio.play().catch(e => console.error("EDM audio play failed:", e))
    ]).then(() => {
      this.isUnlocked = true;
    });
  }

  // Fader value: 0 (Full Microlink) to 100 (Full Wedding) based on percentage width of Microlink side
  updateFader(percentage) {
    if (!this.isUnlocked) return;

    // percentage is width of left side (Microlink).
    // 0% width = all Weddings (Right Side visible). Wedding Volume = 100%, EDM = 0%
    // 100% width = all Microlink (Left Side visible). Wedding Volume = 0%, EDM = 100%

    let edmVol = percentage / 100;
    let weddingVol = 1 - edmVol;

    // Add a slight curve for smoother perception
    this.weddingAudio.volume = Math.min(1, Math.max(0, Math.pow(weddingVol, 1.5)));
    this.edmAudio.volume = Math.min(1, Math.max(0, Math.pow(edmVol, 1.5)));
  }
}

const audioEngine = new AudioEngine();

// UI Elements
const microlinkSide = document.getElementById('microlink-side');
const sliderDivider = document.getElementById('slider-divider');
const centerMessage = document.getElementById('center-message');

let isDragging = false;
let isInteracted = false;

function init() {
  // Mouse Events
  sliderDivider.addEventListener('mousedown', startDrag);
  document.addEventListener('mousemove', drag);
  document.addEventListener('mouseup', endDrag);

  // Touch Events
  sliderDivider.addEventListener('touchstart', startDrag, { passive: false });
  document.addEventListener('touchmove', drag, { passive: false });
  document.addEventListener('touchend', endDrag);
}

function startDrag(e) {
  isDragging = true;

  if (!isInteracted) {
    isInteracted = true;
    audioEngine.unlockAndPlay();
    if (centerMessage) {
      centerMessage.classList.add('opacity-0');
      setTimeout(() => centerMessage.remove(), 500); // Remove after fade out
    }
  }
}

function drag(e) {
  if (!isDragging) return;
  e.preventDefault(); // Prevent text selection/scrolling

  const clientX = e.type === 'touchmove' ? e.touches[0].clientX : e.clientX;

  // Calculate percentage of screen width
  const windowWidth = window.innerWidth;
  let percentage = (clientX / windowWidth) * 100;

  // Clamp between 0 and 100
  percentage = Math.max(0, Math.min(100, percentage));

  // Update UI Layout
  microlinkSide.style.width = `${percentage}%`;
  sliderDivider.style.left = `${percentage}%`;

  // Update Audio
  audioEngine.updateFader(percentage);
}

function endDrag() {
  isDragging = false;
}

// Initialize
init();
