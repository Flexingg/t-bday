// Lightweight Standalone Canvas Confetti Engine
class ConfettiManager {
    constructor() {
        this.canvas = null;
        this.ctx = null;
        this.particles = [];
        this.animId = null;
        this.active = false;
    }

    init() {
        if (!this.canvas) {
            this.canvas = document.createElement('canvas');
            this.canvas.id = 'confetti-canvas';
            this.canvas.style.position = 'fixed';
            this.canvas.style.top = '0';
            this.canvas.style.left = '0';
            this.canvas.style.width = '100vw';
            this.canvas.style.height = '100vh';
            this.canvas.style.pointerEvents = 'none';
            this.canvas.style.zIndex = '9999';
            document.body.appendChild(this.canvas);
            this.ctx = this.canvas.getContext('2d');
            this.resize();
            window.addEventListener('resize', () => this.resize());
        }
    }

    resize() {
        if (!this.canvas) return;
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    explode(count = 150) {
        this.init();
        this.active = true;
        const colors = ['#ff4081', '#ffd700', '#00e5ff', '#76ff03', '#ff9100', '#d500f9', '#ffffff'];
        const cx = this.canvas.width / 2;
        const cy = this.canvas.height / 2;

        for (let i = 0; i < count; i++) {
            const angle = Math.random() * Math.PI * 2;
            const speed = 4 + Math.random() * 14;
            this.particles.push({
                x: cx + (Math.random() * 60 - 30),
                y: cy + (Math.random() * 60 - 30),
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed - 4,
                w: 8 + Math.random() * 8,
                h: 6 + Math.random() * 6,
                rotation: Math.random() * 360,
                rotSpeed: (Math.random() - 0.5) * 15,
                color: colors[Math.floor(Math.random() * colors.length)],
                opacity: 1,
                decay: 0.005 + Math.random() * 0.005,
                gravity: 0.18
            });
        }

        if (!this.animId) {
            this.render();
        }
    }

    rain(durationMs = 5000) {
        this.init();
        const start = Date.now();
        const interval = setInterval(() => {
            if (Date.now() - start > durationMs) {
                clearInterval(interval);
                return;
            }
            const colors = ['#ff4081', '#ffd700', '#00e5ff', '#76ff03', '#ff9100', '#ffffff'];
            for (let i = 0; i < 5; i++) {
                this.particles.push({
                    x: Math.random() * this.canvas.width,
                    y: -10,
                    vx: (Math.random() - 0.5) * 3,
                    vy: 2 + Math.random() * 5,
                    w: 8 + Math.random() * 8,
                    h: 6 + Math.random() * 6,
                    rotation: Math.random() * 360,
                    rotSpeed: (Math.random() - 0.5) * 10,
                    color: colors[Math.floor(Math.random() * colors.length)],
                    opacity: 1,
                    decay: 0.003,
                    gravity: 0.1
                });
            }
            if (!this.animId) this.render();
        }, 100);
    }

    render() {
        if (!this.active && this.particles.length === 0) {
            if (this.ctx) this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.animId = null;
            return;
        }

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        for (let i = this.particles.length - 1; i >= 0; i--) {
            const p = this.particles[i];
            p.x += p.vx;
            p.y += p.vy;
            p.vy += p.gravity;
            p.rotation += p.rotSpeed;
            p.opacity -= p.decay;

            if (p.opacity <= 0 || p.y > this.canvas.height + 20) {
                this.particles.splice(i, 1);
                continue;
            }

            this.ctx.save();
            this.ctx.translate(p.x, p.y);
            this.ctx.rotate((p.rotation * Math.PI) / 180);
            this.ctx.globalAlpha = Math.max(0, p.opacity);
            this.ctx.fillStyle = p.color;
            this.ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
            this.ctx.restore();
        }

        this.animId = requestAnimationFrame(() => this.render());
    }

    clear() {
        this.particles = [];
        if (this.ctx) {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        }
    }
}

window.confetti = new ConfettiManager();
