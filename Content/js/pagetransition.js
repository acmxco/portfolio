import Highway from '@dogstudio/highway';
import { TimelineLite } from 'gsap';

const $logo = document.querySelector('.transition__logo');
const $frameBlack = document.querySelector('.page-transition__black');
const $nav = document.querySelector('#nav');

let tltransition = new TimelineMax({ paused: true })
  .fromTo($frameBlack, 2.2, { scaleX: 0 }, { scaleX: 1, transformOrigin: 'left', ease: Power4.easeInOut }, .2)
  .fromTo($logo, 1.6, { xPercent: -100, autoAlpha: 0 }, { xPercent: 0, autoAlpha: 1, ease: Power4.easeInOut }, .7)
  // .set($frameBlack, {scaleX: 0,
  //       rotation: 10,
  //       xPercent: -5,
  //       yPercent: -50,
  //       transformOrigin: 'left center',
  //       autoAlpha: 1})
  .set($img2, { autoAlpha: 0 })
  .to($frameBlack, 2.2, { scaleX: 0, transformOrigin: 'right', ease: Power4.easeInOut })
  .to($logo, .2, { autoAlpha: 0 }, '-=1.2')



document.getElementByClass("navmenu").addEventListener('click', () => {
  tltransition.play(0);
});


