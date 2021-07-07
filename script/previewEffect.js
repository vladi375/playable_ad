const blur = document.querySelector('.blur');

export function removeBlur() {
  setTimeout(() => {
    blur.style.display = 'none';
  }, 2900);
}
