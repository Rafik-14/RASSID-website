// Lightweight zero-dependency confetti particle burst
export function triggerBurst() {
  if (typeof window === 'undefined') return;

  const canvas = document.createElement('canvas');
  canvas.style.position = 'fixed';
  canvas.style.top = '0';
  canvas.style.left = '0';
  canvas.style.width = '100vw';
  canvas.style.height = '100vh';
  canvas.style.pointerEvents = 'none';
  canvas.style.zIndex = '99999';
  document.body.appendChild(canvas);

  const ctx = canvas.getContext('2d');
  const dpr = window.devicePixelRatio || 1;
  canvas.width = window.innerWidth * dpr;
  canvas.height = window.innerHeight * dpr;
  ctx.scale(dpr, dpr);

  const colors = ['#7FE300', '#FFFFFF', '#090A0B', '#4ADE80', '#A3E635'];
  const particles = [];
  const startX = window.innerWidth / 2;
  const startY = window.innerHeight * 0.7;

  for (let i = 0; i < 50; i++) {
    const angle = (Math.PI * 2 * i) / 50 + (Math.random() - 0.5);
    const speed = Math.random() * 8 + 4;
    particles.push({
      x: startX,
      y: startY,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed - 6,
      color: colors[Math.floor(Math.random() * colors.length)],
      size: Math.random() * 6 + 4,
      rotation: Math.random() * Math.PI,
      vr: (Math.random() - 0.5) * 0.2,
      alpha: 1,
      gravity: 0.28,
    });
  }

  let animationId;
  function update() {
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    let alive = false;

    particles.forEach((p) => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += p.gravity;
      p.rotation += p.vr;
      p.alpha -= 0.016;

      if (p.alpha > 0) {
        alive = true;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        ctx.globalAlpha = Math.max(0, p.alpha);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
        ctx.restore();
      }
    });

    if (alive) {
      animationId = requestAnimationFrame(update);
    } else {
      cancelAnimationFrame(animationId);
      if (canvas.parentNode) {
        canvas.parentNode.removeChild(canvas);
      }
    }
  }

  animationId = requestAnimationFrame(update);
}
