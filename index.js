document.addEventListener('click', (e) => {
  const button = e.target.closest('.block__btn');

  if (button) {
    button.classList.toggle('block__btn_open');
  }
})
