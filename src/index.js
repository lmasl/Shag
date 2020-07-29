import './styles/main.scss';
// import './js/form';
import Tabs from './js/tabs';
import Accordion from './js/accordion';

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

// //==== Вариант на JS ===============
// const navToggle = document.querySelector(".nav-toggle");
// const mainMenu = document.querySelector(".main-menu");
// const navToggleLabel = document.querySelector(".nav-toggle-label");

// navToggle.addEventListener("click", () => {
//     mainMenu.classList.toggle("active");
//     navToggleLabel.classList.toggle("active");
// });

// mainMenu.addEventListener("click", (event) => {
//        if(event.target){
//           mainMenu.classList.remove("active");
//           navToggleLabel.classList.remove("active");
//       }
// });
