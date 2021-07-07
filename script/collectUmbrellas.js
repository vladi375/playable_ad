const wrap = document.querySelector('.wrap');
const blur = document.querySelector('.blur');
const continueBtn = document.querySelector('.continue-btn');

export function collectUmbrella() {
  const counterTab = document.querySelector('.counter-tab');
  let counter = 0;
  wrap.addEventListener('click', (event) => {
    if (
      (event.target.classList.contains('umbrella') &&
        event.target.className === 'umbrella umbrella1') ||
      event.target.className === 'umbrella umbrella2' ||
      event.target.className === 'umbrella umbrella3' ||
      event.target.className === 'umbrella umbrella4' ||
      event.target.className === 'umbrella umbrella5'
    ) {
      event.target.classList.add('disappear');
      counterTab.innerHTML = `<span class="counter">${++counter}</span>/5`;
    }
    if (counter === 3) {
      blur.style.display = 'block';
      blur.style.animation = 'none';
      continueBtn.style.animation = '1s ease 0s normal continueBtn';
      continueBtn.style.animationFillMode = 'forwards';
    }
  });
}
