const thumbs = document.querySelectorAll('.thumb');
const main = document.getElementById('main-image');

thumbs.forEach(el => {
  el.addEventListener('click', () => {
    document.body.style.background = el.getAttribute('data-bg');
    main.src = el.getAttribute('data-img');
  });
});
