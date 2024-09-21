let inputRange = document.querySelector('.form-range__item');
let rangeNum = document.querySelector('.volume');

inputRange.addEventListener('input', (e) => {
  rangeNum.innerHTML = e.target.value;
});

// Custom select //
const selected = document.querySelector('.selected');
const optionsContainer = document.querySelector('.options-container');

const optionsList = document.querySelectorAll('.option');

selected.addEventListener('click', () => {
  optionsContainer.classList.toggle('active');
});

optionsList.forEach((o) => {
  o.addEventListener('click', () => {
    selected.innerHTML = o.querySelector('label').innerHTML;
    optionsContainer.classList.remove('active');
  });
});

// Burger //

const burgerItem = document.querySelector('.burger');
const burgerNav = document.querySelector('.header__nav');
const burgerClose = document.querySelector('.header__nav-close');
burgerItem.addEventListener('click', () => {
  burgerNav.classList.add('header-nav__visit');
  document.body.style.overflow = 'hidden';
});
burgerClose.addEventListener('click', () => {
  burgerNav.classList.remove('header-nav__visit');
  document.body.style.overflow = 'unset';
});
