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

  // Fader value: -1 (Full Wedding) to 1 (Full EDM)
  updateFader(value) {
    if (!this.isUnlocked) return;

    let weddingVol = 0;
    let edmVol = 0;

    if (value < 0) {
      weddingVol = Math.abs(value);
    } else if (value > 0) {
      edmVol = value;
    }

    // Add a slight curve for smoother perception
    this.weddingAudio.volume = Math.min(1, Math.max(0, Math.pow(weddingVol, 1.5)));
    this.edmAudio.volume = Math.min(1, Math.max(0, Math.pow(edmVol, 1.5)));
  }

  pause() {
    this.weddingAudio.pause();
    this.edmAudio.pause();
  }
}

const audioEngine = new AudioEngine();

// UI Elements
const body = document.body;
const handle = document.getElementById('handle');
const track = document.getElementById('track');
const trackGlow = document.getElementById('track-glow');
const weddingSide = document.getElementById('wedding-side');
const microlinkSide = document.getElementById('microlink-side');
const centerMessage = document.getElementById('center-message');
const crossfaderContainer = document.getElementById('crossfader-container');
const weddingLabel = document.getElementById('wedding-label');
const microlinkLabel = document.getElementById('microlink-label');

let isDragging = false;
let startX = 0;
let currentX = 0; // px offset from center
let faderValue = 0; // -1 to 1
let maxDrag = 0;
let isInteracted = false;

function init() {
  calculateMaxDrag();
  window.addEventListener('resize', calculateMaxDrag);

  handle.addEventListener('mousedown', startDrag);
  handle.addEventListener('touchstart', startDrag, { passive: false });

  document.addEventListener('mousemove', drag);
  document.addEventListener('touchmove', drag, { passive: false });

  document.addEventListener('mouseup', endDrag);
  document.addEventListener('touchend', endDrag);

  updateUI();
}

function calculateMaxDrag() {
  const trackWidth = track.offsetWidth;
  const handleWidth = handle.offsetWidth;
  maxDrag = (trackWidth - handleWidth) / 2;

  // Keep handle in place proportionally if window resizes
  currentX = faderValue * maxDrag;
  setHandlePosition();
}

function startDrag(e) {
  isDragging = true;
  startX = (e.type === 'touchstart' ? e.touches[0].clientX : e.clientX) - currentX;

  if (!isInteracted) {
    isInteracted = true;
    audioEngine.unlockAndPlay();
    centerMessage.classList.add('opacity-0');

    // Move fader to bottom
    crossfaderContainer.classList.remove('top-1/2', '-translate-y-1/2');
    crossfaderContainer.classList.add('top-[90%]');

    // Update track styling
    track.classList.remove('border-gray-500', 'bg-gray-800/80', 'shadow-[0_0_20px_rgba(0,255,255,0.2)]');
    track.classList.add('border-gray-600', 'bg-gray-900/50');
    trackGlow.style.opacity = 1;
  }
}

function drag(e) {
  if (!isDragging) return;
  e.preventDefault(); // Prevent text selection/scrolling

  const clientX = e.type === 'touchmove' ? e.touches[0].clientX : e.clientX;
  currentX = clientX - startX;

  // Clamp
  currentX = Math.max(-maxDrag, Math.min(maxDrag, currentX));

  // Calculate normalized fader value
  faderValue = currentX / maxDrag;

  setHandlePosition();
  updateUI();
  audioEngine.updateFader(faderValue);
}

function endDrag() {
  isDragging = false;
}

function setHandlePosition() {
  handle.style.transform = `translate(calc(-50% + ${currentX}px), -50%)`;
}

function updateUI() {
  // Update Background Color
  if (faderValue < -0.2) {
    body.style.backgroundColor = `rgba(250, 249, 246, ${Math.abs(faderValue)})`;
  } else {
    body.style.backgroundColor = 'rgba(0, 0, 0, 1)';
  }

  // Update Wedding Side
  if (faderValue < 0) {
    weddingSide.style.opacity = Math.abs(faderValue);
    weddingSide.style.zIndex = 10;
  } else {
    weddingSide.style.opacity = 0;
    weddingSide.style.zIndex = 0;
  }
  weddingSide.style.pointerEvents = faderValue < -0.5 ? 'auto' : 'none';

  // Update Microlink Side
  if (faderValue > 0) {
    microlinkSide.style.opacity = faderValue;
    microlinkSide.style.zIndex = 10;
  } else {
    microlinkSide.style.opacity = 0;
    microlinkSide.style.zIndex = 0;
  }
  microlinkSide.style.pointerEvents = faderValue > 0.5 ? 'auto' : 'none';

  // Update Handle Styling
  handle.className = "absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 h-[calc(100%-8px)] aspect-square rounded-full flex items-center justify-center cursor-grab active:cursor-grabbing shadow-xl transition-colors duration-300 pointer-events-auto";

  if (faderValue < -0.2) {
    handle.classList.add('bg-champagne-gold', 'shadow-[0_0_20px_rgba(212,175,55,0.5)]');
  } else if (faderValue > 0.2) {
    handle.classList.add('bg-cyan-glow', 'shadow-[0_0_20px_rgba(0,255,255,0.5)]');
  } else {
    handle.classList.add('bg-gray-300', 'shadow-md');
  }

  // Update Labels Opacity
  if (weddingLabel && microlinkLabel) {
    weddingLabel.style.opacity = faderValue < -0.1 ? 1 : 0.4;
    microlinkLabel.style.opacity = faderValue > 0.1 ? 1 : 0.4;
  }
}

// Initialize
init();
