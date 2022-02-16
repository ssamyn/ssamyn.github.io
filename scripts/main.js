let init = function () {
  const list = document.querySelectorAll('.list');

  function activeLink() {
    list.forEach((item) => item.classList.remove('active'));
    this.classList.add('active');
  }

  list.forEach((item) => item.addEventListener('click', activeLink));

  fetch('html/home.html')
    .then((res) => res.text())
    .then((res) => {
      let contentDiv = document.querySelector('#content');
      contentDiv.innerHTML = res;
    });

  document.querySelectorAll('a').forEach(
    (el) =>
      (el.onclick = function (e) {
        // e.preventDefault();
        let href = el.href;
        fetch(href)
          .then((res) => res.text())
          .then((res) => {
            let contentDiv = document.querySelector('#content');
            contentDiv.innerHTML = res;
          });

        // var href = e.attr('href');
        // document.querySelector('#content').load(href, function () {
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
      })
  );
  // $('a').click(function (e) {
  //   // prevent from going to the page
  //   e.preventDefault();

  //   var href = $(this).attr('href');
  //   document.querySelector('#content').load(href, function () {
  //     const list = document.querySelectorAll('.subnav');
  //     list.forEach((item) => (item.style.color = 'black'));
  //     if (href == 'html/digitalart.html') {
  //       document.getElementById('subnav').style.display = 'flex';
  //       document.getElementById('digital-art').style.color = 'white';
  //     } else if (href == 'html/website.html') {
  //       document.getElementById('subnav').style.display = 'flex';
  //       document.getElementById('website-development').style.color = 'white';
  //     } else if (href == 'html/fotoshop.html') {
  //       document.getElementById('subnav').style.display = 'flex';
  //       document.getElementById('fotoshop').style.color = 'white';
  //     } else {
  //       document.getElementById('subnav').style.display = 'none';
  //     }
  //   });
  // });
};

window.onload = init;
