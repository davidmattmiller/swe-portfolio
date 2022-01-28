var textWrapper = document.querySelector('.hero-3-title .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline()
  .add({
    targets: '.hero-3-title .letter',
    rotateY: [-90, 0],
    duration: 1500,
    delay: (el, i) => 45 * i
  });

