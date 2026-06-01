export class AudioEngine {
  private weddingAudio: HTMLAudioElement;
  private edmAudio: HTMLAudioElement;
  private isUnlocked: boolean = false;

  constructor() {
    this.weddingAudio = new Audio('https://commondatastorage.googleapis.com/codeskulptor-assets/week7-button.m4a');
    this.edmAudio = new Audio('https://commondatastorage.googleapis.com/codeskulptor-assets/week7-bounce.m4a');

    this.weddingAudio.loop = true;
    this.edmAudio.loop = true;

    this.weddingAudio.volume = 0;
    this.edmAudio.volume = 0;
  }

  public unlockAndPlay() {
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
  public updateFader(value: number) {
    if (!this.isUnlocked) return;

    // Smooth volume calculation
    // When value is -1: Wedding is 1, EDM is 0
    // When value is 0: Both are 0
    // When value is 1: Wedding is 0, EDM is 1

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

  public pause() {
    this.weddingAudio.pause();
    this.edmAudio.pause();
  }
}

export const audioEngine = new AudioEngine();
