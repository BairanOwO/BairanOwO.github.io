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
  ctx.fillStyle = '#ff6699';
  ctx.fill();
  t += 0.1;
  requestAnimationFrame(drawHeart);
}
drawHeart();
document.getElementById('showBtn').addEventListener('click', () => {
  document.getElementById('message').classList.remove('hidden');
});
