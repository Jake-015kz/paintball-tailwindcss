
const tham = document.querySelector(".tham");
const menu = document.querySelector('#mobile_menu')
const body = document.querySelector('body')

tham.addEventListener('click', () => {
  tham.classList.toggle('tham-active');
  menu.classList.toggle('TabletBig:block')
  menu.classList.toggle('flex')
});
