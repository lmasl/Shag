import './styles/main.scss';
// import './js/form';
import Tabs from './js/tabs';

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
