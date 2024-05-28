document.addEventListener('DOMContentLoaded', function() {
    var viewMoreBtn = document.getElementById('view-more-btn');
    var viewLessBtn = document.getElementById('view-less-btn');
    var additionalContent = document.getElementById('additional-contents');

    viewMoreBtn.addEventListener('click', function() {
        additionalContent.classList.toggle('more-info');
        viewLessBtn.classList.toggle('more-info');
        viewMoreBtn.classList.add('more-info');
    });

    viewLessBtn.addEventListener('click', function() {
        additionalContent.classList.toggle('more-info');
        viewLessBtn.classList.toggle('more-info');
        viewMoreBtn.classList.remove('more-info');
    });
});

function toggleMenu() {
    var navbarNav = document.getElementById("navbar-nav");
    navbarNav.classList.toggle("show");
  }