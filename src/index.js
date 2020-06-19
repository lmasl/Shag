
import './styles/main.scss';
import Tabs from './js/tabs';

(() => {
  const donationTabs = new Tabs('.tab', 'active', (el, index) => {console.log(el, index)});
})();
