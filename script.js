const tl = gsap.timeline();

tl.to([".hero__title", ".hero__btn"], { opacity: 1, y: 0, duration: 1 });
tl.to(".hero__descr", { opacity: 1, y: 0 });
tl.to(".img-1", { opacity: 1, scale: 1 });
tl.to(".img-2", { opacity: 1, scale: 1 });
tl.to(".img-3", { opacity: 1, scale: 1 });
tl.to(".photos__author", { opacity: 1, duration: 1 });

const darkLayersTl = gsap.timeline({ paused: true });
darkLayersTl.to(".dark-layer", { opacity: 1, top: 0 });
darkLayersTl.to(".menu", { opacity: 1, top: 66 });
darkLayersTl.to(".nav__list", { opacity: 1, y: 0 });
darkLayersTl.to([".menu__right", ".social"], { opacity: 1, y: 0 });

let burgerBtn = document.querySelector('.burger');
burgerBtn.addEventListener('click', () => {

  const lines = document.querySelectorAll('.burger__line');
  for (let line of lines) {
    line.classList.toggle('burger__invisible');
  };

  burgerBtn.classList.toggle('burger--active');

  if (burgerBtn.classList.contains('burger--active')) {
    darkLayersTl.play();
    burgerBtn.ariaLabel = 'Закрыть меню';
  } else {
    darkLayersTl.reverse();
    burgerBtn.ariaLabel = 'Открыть меню';
  }
});

