// 樱花花瓣特效
(function() {
  const petalsContainer = document.getElementById('petals');
  const numPetals = 30;
  function createPetal() {
    const petal = document.createElement('div');
    petal.classList.add('petal');
    // 随机起始位置和延迟
    petal.style.left = Math.random() * 100 + 'vw';
    petal.style.animationDuration = (5 + Math.random() * 5) + 's';
    petal.style.animationDelay = Math.random() * 5 + 's';
    petalsContainer.appendChild(petal);
    // 移除已落叶瓣
    setTimeout(() => petalsContainer.removeChild(petal), 10000);
  }
  // 周期生成
  setInterval(() => {
    for (let i = 0; i < 3; i++) createPetal();
  }, 500);
})();
