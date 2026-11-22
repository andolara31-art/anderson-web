export type RetroSoundKind =
  | 'batman'
  | 'superman'
  | 'flash'
  | 'google'
  | 'quote'
  | 'unlock';

let sharedCtx: AudioContext | null = null;

function getAudioContext(): AudioContext | null {
  if (typeof window === 'undefined') return null;
  const AudioCtx =
    window.AudioContext ||
    (window as unknown as { webkitAudioContext?: typeof AudioContext })
      .webkitAudioContext;
  if (!AudioCtx) return null;

  if (!sharedCtx) {
    try {
      sharedCtx = new AudioCtx();
    } catch {
      return null;
    }
  }
  return sharedCtx;
}

interface ToneStep {
  freq: number;
  duration: number;
  delay: number;
  type: OscillatorType;
  peakGain: number;
}

const SOUND_PATTERNS: Record<RetroSoundKind, ToneStep[]> = {
  batman: [
    { freq: 220, duration: 0.065, delay: 0, type: 'triangle', peakGain: 0.036 },
    { freq: 330, duration: 0.095, delay: 0.06, type: 'square', peakGain: 0.022 },
  ],
  superman: [
    { freq: 392, duration: 0.065, delay: 0, type: 'triangle', peakGain: 0.036 },
    { freq: 587.33, duration: 0.11, delay: 0.06, type: 'square', peakGain: 0.024 },
  ],
  flash: [
    { freq: 523.25, duration: 0.04, delay: 0, type: 'square', peakGain: 0.02 },
    { freq: 659.25, duration: 0.04, delay: 0.035, type: 'square', peakGain: 0.022 },
    { freq: 880, duration: 0.065, delay: 0.07, type: 'triangle', peakGain: 0.03 },
  ],
  google: [
    { freq: 440, duration: 0.055, delay: 0, type: 'triangle', peakGain: 0.034 },
    { freq: 554.37, duration: 0.085, delay: 0.055, type: 'triangle', peakGain: 0.032 },
  ],
  quote: [
    { freq: 587.33, duration: 0.045, delay: 0, type: 'square', peakGain: 0.018 },
    { freq: 783.99, duration: 0.07, delay: 0.04, type: 'triangle', peakGain: 0.024 },
  ],
  unlock: [
    { freq: 523.25, duration: 0.05, delay: 0, type: 'square', peakGain: 0.02 },
    { freq: 659.25, duration: 0.055, delay: 0.05, type: 'square', peakGain: 0.022 },
    { freq: 783.99, duration: 0.09, delay: 0.1, type: 'triangle', peakGain: 0.028 },
  ],
};

export function playRetroSound(kind: RetroSoundKind, enabled = true): void {
  if (!enabled) return;

  const ctx = getAudioContext();
  if (!ctx) return;

  const playSteps = () => {
    const now = ctx.currentTime;
    const steps = SOUND_PATTERNS[kind] ?? SOUND_PATTERNS.quote;

    for (const step of steps) {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = step.type;
      osc.frequency.setValueAtTime(step.freq, now + step.delay);

      gain.gain.setValueAtTime(0.0001, now + step.delay);
      gain.gain.linearRampToValueAtTime(
        step.peakGain,
        now + step.delay + 0.008,
      );
      gain.gain.exponentialRampToValueAtTime(
        0.0001,
        now + step.delay + step.duration,
      );

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now + step.delay);
      osc.stop(now + step.delay + step.duration + 0.01);
    }
  };

  if (ctx.state === 'suspended') {
    ctx
      .resume()
      .then(playSteps)
      .catch(() => {
        // Browsers block audio before user gesture; fail silently
      });
  } else {
    try {
      playSteps();
    } catch {
      // Fail silently
    }
  }
}
