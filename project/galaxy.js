// <mlai-galaxy> — MLAI signature embedding-galaxy ambient canvas.
// Drifting nodes connected within a radius; calm, continuous, reduced-motion aware.
(function () {
  if (customElements.get("mlai-galaxy")) return;

  class MlaiGalaxy extends HTMLElement {
    connectedCallback() {
      this.style.position = this.style.position || "absolute";
      this.style.inset = this.style.inset || "0";
      this.style.display = "block";
      this.style.overflow = "hidden";
      this.style.pointerEvents = "none";

      this._canvas = document.createElement("canvas");
      this._canvas.style.cssText = "position:absolute;inset:0;width:100%;height:100%";
      this.appendChild(this._canvas);
      this._ctx = this._canvas.getContext("2d");

      this._accent = this.getAttribute("accent") || "#00D4FF";
      this._accent2 = this.getAttribute("accent2") || "#7C3AED";
      this._density = parseInt(this.getAttribute("density") || "70", 10);
      this._reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      this._resize = this._resize.bind(this);
      this._tick = this._tick.bind(this);
      this._ro = new ResizeObserver(this._resize);
      this._ro.observe(this);
      this._resize();
    }

    disconnectedCallback() {
      if (this._raf) cancelAnimationFrame(this._raf);
      if (this._ro) this._ro.disconnect();
    }

    _resize() {
      const r = this.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      this._w = Math.max(r.width, 1);
      this._h = Math.max(r.height, 1);
      this._canvas.width = this._w * dpr;
      this._canvas.height = this._h * dpr;
      this._ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (!this._pts) this._seed();
      if (this._raf) cancelAnimationFrame(this._raf);
      this._raf = requestAnimationFrame(this._tick);
    }

    _seed() {
      const n = this._density;
      this._pts = [];
      for (let i = 0; i < n; i++) {
        const roll = Math.random();
        this._pts.push({
          x: Math.random() * this._w,
          y: Math.random() * this._h,
          vx: (Math.random() - 0.5) * 0.16,
          vy: (Math.random() - 0.5) * 0.16,
          r: 0.8 + Math.random() * 1.5,
          c: roll < 0.14 ? this._accent : roll < 0.24 ? this._accent2 : "#AEB9CC"
        });
      }
    }

    _tick() {
      const ctx = this._ctx, w = this._w, h = this._h, pts = this._pts;
      ctx.clearRect(0, 0, w, h);
      const R = 130;
      for (const p of pts) {
        if (!this._reduced) {
          p.x += p.vx; p.y += p.vy;
          if (p.x < -10) p.x = w + 10; if (p.x > w + 10) p.x = -10;
          if (p.y < -10) p.y = h + 10; if (p.y > h + 10) p.y = -10;
        }
      }
      ctx.lineWidth = 1;
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < R) {
            ctx.strokeStyle = "rgba(148,163,184," + (0.16 * (1 - d / R)).toFixed(3) + ")";
            ctx.beginPath();
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.stroke();
          }
        }
      }
      for (const p of pts) {
        ctx.globalAlpha = 0.85;
        ctx.fillStyle = p.c;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      if (!this._reduced) this._raf = requestAnimationFrame(this._tick);
    }
  }

  customElements.define("mlai-galaxy", MlaiGalaxy);
})();
