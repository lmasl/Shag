import 'bootstrap';
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

// const toggleButtons = Array.from(document.querySelectorAll('.toggle'));

// $('.toggle').button();
// // toggleButtons.forEach((btn) => {
// //   .button();
// //   btn.addEventListener('click', (e) => {
// //     console.log('btn');
// //   })
// // });
//
//  console.log('>>>', $);
// $('.accordion').accordion({
//   header: 'div.acc-banner',
//   animate: 200,
// });

// const eventsTabs = new Accordion({
//   itemSelector: '.accordion-item',
//   buttonSelector: '.accordion .toggle',
//   contentSelector: '.acc-content',
//   displayNoneClass: 'hidden',
//   showClass: 'show',
//   cb: ({ target }, index) => console.log(target, index),
// });
