let init = function () {
  const list = document.querySelectorAll('.list');

  function activeLink() {
    list.forEach((item) => item.classList.remove('active'));
    this.classList.add('active');
  }

  list.forEach((item) => item.addEventListener('click', activeLink));

  $('#content').load('html/home.html', function () {});

  // $('li a').click(function (e) {
  $('a').click(function (e) {
    // prevent from going to the page
    e.preventDefault();

    var href = $(this).attr('href');
    $('#content').load(href, function () {
      const list = document.querySelectorAll('.subnav');
      list.forEach((item) => (item.style.color = 'black'));
      if (href == 'html/digitalart.html') {
        document.getElementById('subnav').style.display = 'flex';
        document.getElementById('digital-art').style.color = 'white';
      } else if (href == 'html/website.html') {
        document.getElementById('subnav').style.display = 'flex';
        document.getElementById('website-development').style.color = 'white';
      } else if (href == 'html/fotoshop.html') {
        document.getElementById('subnav').style.display = 'flex';
        document.getElementById('fotoshop').style.color = 'white';
      } else {
        document.getElementById('subnav').style.display = 'none';
      }
    });
  });
};

window.onload = init;
