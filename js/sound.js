// Sound Engine powered entirely by the Web Audio API (Zero external assets needed)
class SoundManager {
    constructor() {
        this.ctx = null;
        this.muted = false;
        this.bgmPlaying = false;
        this.bgmTimer = null;
        this.bgmStep = 0;
    }

    init() {
        if (!this.ctx) {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            this.ctx = new AudioContext();
        }
        if (this.ctx.state === 'suspended') {
            this.ctx.resume();
        }
    }

    toggleMute() {
        this.muted = !this.muted;
        if (this.muted && this.bgmPlaying) {
            this.stopBgm();
            this.bgmPlaying = true; // keep state preference
        } else if (!this.muted && this.bgmPlaying) {
            this.startBgm();
        }
        return this.muted;
    }

    playTone(freq, type, duration, startVol = 0.2, endVol = 0.001) {
        if (this.muted) return;
        this.init();
        try {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.type = type;
            osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
            gain.gain.setValueAtTime(startVol, this.ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(endVol, this.ctx.currentTime + duration);
            osc.connect(gain);
            gain.connect(this.ctx.destination);
            osc.start();
            osc.stop(this.ctx.currentTime + duration);
        } catch (e) {
            console.warn('Audio play error', e);
        }
    }

    playClick() {
        this.playTone(800, 'sine', 0.05, 0.15, 0.01);
    }

    playCorrect() {
        if (this.muted) return;
        this.init();
        const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
        notes.forEach((freq, idx) => {
            setTimeout(() => {
                this.playTone(freq, 'triangle', 0.18, 0.25, 0.001);
            }, idx * 60);
        });
    }

    playWrong() {
        if (this.muted) return;
        this.init();
        try {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.type = 'sawtooth';
            osc.frequency.setValueAtTime(150, this.ctx.currentTime);
            osc.frequency.linearRampToValueAtTime(70, this.ctx.currentTime + 0.35);
            gain.gain.setValueAtTime(0.3, this.ctx.currentTime);
            gain.gain.linearRampToValueAtTime(0.01, this.ctx.currentTime + 0.35);
            osc.connect(gain);
            gain.connect(this.ctx.destination);
            osc.start();
            osc.stop(this.ctx.currentTime + 0.35);
        } catch (e) {}
    }

    playBoing() {
        if (this.muted) return;
        this.init();
        try {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(200, this.ctx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(700, this.ctx.currentTime + 0.25);
            gain.gain.setValueAtTime(0.25, this.ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.25);
            osc.connect(gain);
            gain.connect(this.ctx.destination);
            osc.start();
            osc.stop(this.ctx.currentTime + 0.25);
        } catch (e) {}
    }

    playBombTick() {
        if (this.muted) return;
        this.init();
        this.playTone(1200, 'square', 0.03, 0.1, 0.001);
    }

    playExplosion() {
        if (this.muted) return;
        this.init();
        try {
            // White noise burst for explosion
            const bufferSize = this.ctx.sampleRate * 0.6;
            const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
            const data = buffer.getChannelData(0);
            for (let i = 0; i < bufferSize; i++) {
                data[i] = Math.random() * 2 - 1;
            }
            const noise = this.ctx.createBufferSource();
            noise.buffer = buffer;
            const filter = this.ctx.createBiquadFilter();
            filter.type = 'lowpass';
            filter.frequency.setValueAtTime(800, this.ctx.currentTime);
            filter.frequency.linearRampToValueAtTime(50, this.ctx.currentTime + 0.6);

            const gain = this.ctx.createGain();
            gain.gain.setValueAtTime(0.5, this.ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.6);

            noise.connect(filter);
            filter.connect(gain);
            gain.connect(this.ctx.destination);
            noise.start();
        } catch (e) {}
    }

    playShatter() {
        if (this.muted) return;
        this.init();
        for (let i = 0; i < 6; i++) {
            setTimeout(() => {
                this.playTone(800 + Math.random() * 1200, 'sawtooth', 0.05, 0.15, 0.01);
            }, i * 25);
        }
    }

    playFanfare() {
        if (this.muted) return;
        this.init();
        const fanfareNotes = [
            { f: 523.25, d: 0.15, t: 0 },
            { f: 523.25, d: 0.15, t: 0.15 },
            { f: 523.25, d: 0.15, t: 0.3 },
            { f: 659.25, d: 0.4, t: 0.45 },
            { f: 587.33, d: 0.15, t: 0.9 },
            { f: 659.25, d: 0.15, t: 1.05 },
            { f: 783.99, d: 0.7, t: 1.2 }
        ];
        fanfareNotes.forEach(n => {
            setTimeout(() => {
                this.playTone(n.f, 'triangle', n.d, 0.35, 0.001);
            }, n.t * 1000);
        });
    }

    playVaultOpen() {
        if (this.muted) return;
        this.init();
        try {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.type = 'sawtooth';
            osc.frequency.setValueAtTime(80, this.ctx.currentTime);
            osc.frequency.linearRampToValueAtTime(300, this.ctx.currentTime + 0.8);
            gain.gain.setValueAtTime(0.3, this.ctx.currentTime);
            gain.gain.linearRampToValueAtTime(0.01, this.ctx.currentTime + 0.8);
            osc.connect(gain);
            gain.connect(this.ctx.destination);
            osc.start();
            osc.stop(this.ctx.currentTime + 0.8);
        } catch (e) {}
    }

    startBgm() {
        if (this.muted) return;
        this.init();
        if (this.bgmTimer) clearInterval(this.bgmTimer);
        this.bgmPlaying = true;

        // Catchy cheerful 8-bit baseline
        const bassLine = [261.63, 329.63, 392.00, 329.63, 293.66, 369.99, 440.00, 369.99];
        this.bgmStep = 0;
        this.bgmTimer = setInterval(() => {
            if (!this.muted && this.bgmPlaying) {
                const freq = bassLine[this.bgmStep % bassLine.length];
                this.playTone(freq, 'sine', 0.12, 0.04, 0.001);
                this.bgmStep++;
            }
        }, 220);
    }

    stopBgm() {
        this.bgmPlaying = false;
        if (this.bgmTimer) {
            clearInterval(this.bgmTimer);
            this.bgmTimer = null;
        }
    }
}

window.sound = new SoundManager();
