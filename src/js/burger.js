import "./sliders";

const nav_modal = {
  el : document.querySelector('.nav-modal'),
  btn : document.getElementById('hamburger'),
  showAnimate : 'fadeInLeft',//'bounceInDown',
  hideAnimate : 'fadeOutLeft',
  init : function(){
    !this.el.classList.contains('nav-show') && this.el.classList.add('nav-show');
    return this
  },
  btnOpen : function(){
    this.btn.classList.remove('is-closed');
    this.btn.classList.add('is-open');
  },
  btnClose : function(){
    this.btn.classList.remove('is-open');
    this.btn.classList.add('is-closed');
  },
  toggle : function(){
    let isOpen = this.btn.classList.contains('is-open');
    console.log('toggle', isOpen);
    isOpen ? this.hide() : this.show();
  },
  show : function(){
    this.btnOpen();
    this.init();
    this.el.classList.remove(this.hideAnimate);
    this.el.classList.add(this.showAnimate);
  },
  hide : function(){
    this.btnClose();
    this.init();
    this.el.classList.remove(this.showAnimate);
    this.el.classList.add(this.hideAnimate);
  }
};

document.querySelector('#hamburger').addEventListener('click', nav_modal.toggle.bind(nav_modal))
