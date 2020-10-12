import './styles/main.scss';
// import './js/form';
import Tabs from './js/tabs';
import Accordion from './js/accordion';
import './js/burger';
import './js/sliders';

(() => {
  const donationTabs = new Tabs('.tab', 'active', (el, index) => {
    const signup = document.getElementById('signup');
    const login = document.getElementById('login');

    signup.addEventListener('click', (event) => {
      console.log(event);
    });

    if (index === 1) {
      signup.classList.add('hide');
      login.classList.remove('hide');
    } else if (index === 0) {
      login.classList.add('hide');
      signup.classList.remove('hide');
    }

    console.log(el, index);
  });
})();

const eventsTabs = new Accordion({
  itemSelector: '.accordion-item',
  buttonSelector: '.accordion .toggle',
  contentSelector: '.acc-content',
  displayNoneClass: 'hidden',
  showClass: 'show',
  cb: ({ target }, index) => console.log(target, index),
});

// slider
// $(document).ready(function() {
//   $('.slider').slick();
// });

   //slider
//    const slider = () => {
//     const slide = document.querySelectorAll('.portfolio-item'),
//         btn = document.querySelectorAll('.portfolio-btn'),

//         dots = document.querySelector('.portfolio-dots'),
//         slider = document.querySelector('.portfolio-content');

//     let currentSlide = 0,
//         dotNew,
//         interval;

//     for(let i = 0; i < slide.length; i++){
//         dotNew = document.createElement('li');
//     dotNew.classList.add('dot');
//     dots.appendChild(dotNew);
//     }


//     let  dot = document.querySelectorAll('.dot');
//     dot[0].classList.add('dot-active');
//     console.log(dot[0])
//     const prevSlide = (elem, index, strClass) => {
//            elem[index].classList.remove(strClass);
//     };
//     const nextSlide = (elem, index, strClass) => {
//         elem[index].classList.add(strClass);
//     };

//     const autoPlaySlide = () => {
//         prevSlide(slide, currentSlide, 'portfolio-item-active');

//         prevSlide(dot, currentSlide, 'dot-active');
//         currentSlide++;
//         if(currentSlide >= slide.length){
//             currentSlide = 0;
//         }
//         nextSlide(slide, currentSlide, 'portfolio-item-active');
//         nextSlide(dot, currentSlide, 'dot-active');
//     };

//     const startSlide = (time = 3000) => {
//         interval = setInterval(autoPlaySlide, time);
//     };

//     const stopSlide = () => {
//         clearInterval(interval);
//     };
//     slider.addEventListener('click', (event) => {
//         event.preventDefault();

//         let target = event.target;

//          if(!target.matches('.portfolio-btn, .dot')){
//              return;
//          }

//         prevSlide(slide, currentSlide, 'portfolio-item-active');
//         prevSlide(dot, currentSlide, 'dot-active');

//         if(target.matches('#arrow-right')){
//             currentSlide++;
//         } else if(target.matches('#arrow-left')){
//             currentSlide--;
//         } else if( target.matches('.dot')){
//             dot.forEach((elem, index) => {
//                 if(elem === target) {
//                     currentSlide = index;
//                 }
//             });
//         }

//         if(currentSlide >= slide.length) {
//             currentSlide = 0;
//         }

//         if(currentSlide < 0){
//             currentSlide = slide.length - 1;
//         }
//         nextSlide(slide, currentSlide, 'portfolio-item-active');
//         nextSlide(dot, currentSlide, 'dot-active');
//     })

//     slider.addEventListener('mouseover', (event) => {
//         if(event.target.matches('.portfolio-btn') ||
//         event.target.matches('.dot')){
//             stopSlide();
//         }
//     });
//     slider.addEventListener('mouseout', (event) => {
//         if(event.target.matches('.portfolio-btn') ||
//         event.target.matches('.dot')){
//             startSlide();
//         }
//     });
//     startSlide(5000);

// }
// slider();
