// 心形动画
const canvas = document.getElementById('heartCanvas');
const ctx = canvas.getContext('2d');
let t = 0;
function drawHeart() {
  ctx.clearRect(0, 0, 300, 300);
  ctx.beginPath();
  for (let deg = 0; deg < Math.PI * 2; deg += 0.02) {
    const x = 150 + 16 * Math.pow(Math.sin(deg),3) * (1 + 0.15 * Math.sin(t));
    const y = 150 - (13 * Math.cos(deg) - 5 * Math.cos(2*deg) - 2 * Math.cos(3*deg) - Math.cos(4*deg)) * (1 + 0.15 * Math.sin(t));
    if (deg === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.fillStyle = '#ff6699'; ctx.fill();
  t += 0.1; requestAnimationFrame(drawHeart);
}
drawHeart();

// 文字打字机效果
const typeEl = document.getElementById('typewriter');
const text = "520，是我对你心动的每一次心跳";
let idx = 0;
function type() {
  if (idx <= text.length) {
    typeEl.style.width = `${idx}ch`;
    typeEl.textContent = text.slice(0, idx);
    idx++;
    setTimeout(type, 150);
  }
}

// 照片轮播
const photos = document.querySelectorAll('#gallery img,');
const photoEl = document.getElementById('photo');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
let slideIdx = 1;
prevBtn.addEventListener('click', () => showSlide(slideIdx - 1));
nextBtn.addEventListener('click', () => showSlide(slideIdx + 1));
function showSlide(n) {
  const total = 3; // 照片张数
  slideIdx = n > total ? 1 : n < 1 ? total : n;
  photoEl.src = `assets/photos/${slideIdx}.jpg`;
}

// 背景音乐 & 效果触发
const bgm = document.getElementById('bgm');
const showBtn = document.getElementById('showBtn');
showBtn.addEventListener('click', () => {
  document.getElementById('message').classList.remove('hidden');
  document.getElementById('gallery').classList.remove('hidden');
  type();
  bgm.play();
  // 彩带效果
  party.confetti(document.body, { count: 200 });
});

// 背景粒子（使用 simple-particles 库）
simpleParticles.init('#bg-layer', { color: '#ff6699', count: 100 });
