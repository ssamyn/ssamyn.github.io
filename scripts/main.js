let init = function () {
  const list = document.querySelectorAll('.list');

  function activeLink() {
    list.forEach((item) => item.classList.remove('active'));
    this.classList.add('active');
    let ind = document.getElementById('indicator');
    ind.setAttribute('background-color', 'red');
  }

  list.forEach((item) => item.addEventListener('click', activeLink));
};
window.onload = init;
