export default class {
  constructor(tabSelector, activeClass, cb) {
    this.selector = tabSelector;
    this.menuElements = document.querySelectorAll(this.selector);
    this.activeClass = activeClass;
    this.callback = cb;
    this.bindAll();
  }

  bindAll() {
    for (let max = this.menuElements.length-1; max >= 0; --max) {
      this.menuElements[max].addEventListener('click', this.change.bind(this), false);
    }
  }

  clear() {
    this.menuElements.forEach((el) => el.classList.remove(this.activeClass));
  }

  change(e) {
    this.clear();
    let tabIndex = Array.from(this.menuElements).indexOf(e.currentTarget);
    e.currentTarget.classList.add(this.activeClass);
    typeof this.callback === 'function' && this.callback(e.currentTarget, tabIndex);
  }
}

// let nav_modal = {
//   el : document.querySelector('.nav-modal'),
//   btn : document.getElementById('hamburger'),
//   showAnimate : 'fadeInDownBig',//'bounceInDown',
//   hideAnimate : 'fadeOutUpBig',
//   init : function(){
//       !this.el.classList.contains('nav-show') && this.el.classList.add('nav-show');
//       return this
//   },
//   btnOpen : function(){
//       this.btn.classList.remove('is-closed');
//       this.btn.classList.add('is-open');
//   },
//   btnClose : function(){
//       this.btn.classList.remove('is-open');
//       this.btn.classList.add('is-closed');
//   },
//   toggle : function(){
//       let isOpen = this.btn.classList.contains('is-open');
//       isOpen ? this.hide() : this.show();
//   },
//   show : function(){
//       this.btnOpen();
//       this.init();
//       this.el.classList.remove(this.hideAnimate);
//       this.el.classList.add(this.showAnimate);
//   },
//   hide : function(){
//       this.btnClose();
//       this.init();
//       this.el.classList.remove(this.showAnimate);
//       this.el.classList.add(this.hideAnimate);
//   }
// };

// function getNewIndex(currentIndex) {
//   !isNaN(currentIndex) && (currentIndex = Number(currentIndex));
//   let step = 3,
//       res = currentIndex + step;
//   return res > 4 ? res - 4 : res;
// }

// $('document').ready(function () {
//   $(".loader-container").fadeOut(1200);
// });

// let partfolio_tabs = new Tabs.Create('.portfolio-sections li', (el, index) => {
//   document.querySelectorAll('.portfolio img').forEach(el => {

//       let src = el.getAttribute('src'),
//           imageIndex = src.charAt(src.indexOf(".jpg") - 1),
//           newIndex = getNewIndex(imageIndex);

//       el.setAttribute("src", src.replace(/image\d/, "image" + newIndex));
//   });
//   el.classList.add('active');
// });
// let featured_articles = new Tabs.Create('.article', el => {
//   el.classList.add('active');
// });

// //animation effects
// const $articles = $('.wr-services article');
// let animated = false,
//   headerFix = false,
//   headerVH = window.innerHeight/100 * 50;

// function lightSpeedIn(elements) {
//   elements.each(function (i) {
//       let el = $(this);
//       setTimeout(function () {
//           !el.hasClass("lightSpeedIn")
//           && el.addClass('lightSpeedIn').css("opacity", 1)
//           && setTimeout(function () {
//               const $img = el.find('img');
//               !$img.hasClass("swing") && $img.addClass('swing');
//           }, 600);
//       }, 400 * i)
//   });
//   animated = true;
// }
// // slideInDown
// function headerFixToggle(){
//   let $header = document.querySelector('header');
//   $header.classList.toggle('slideInDown');
//   $header.classList.toggle('header-fix');
// }
// $(window).scroll(function () {
//   let value = $(this).scrollTop();
//   !animated && value > 850 && lightSpeedIn($articles);

//   if(value > headerVH && !headerFix){
//       headerFixToggle();
//       headerFix = true;
//   }
//   if(value < headerVH && headerFix){
//       headerFixToggle();
//       // document.querySelector('header').classList.toggle('header-fix');
//       headerFix = false;
//   }
// });

// $(document).ready(function () {
//   $(".nav-menu, .nav-modal").on("click", "a", function (event) {
//       event.preventDefault();
//       let id = $(this).attr('href'),
//           top = $(id).offset().top,
//           headerHeight = $('header').height();

//       let $el = $(id).find('.view-animate');
//       const className = $el.length && $el.attr('class');
//       const animateClass = className && className.substr(className.indexOf('#') + 1);

//       animateClass && $el.removeClass(animateClass);//.css( "opacity", "0" );

//       $('body,html').animate({scrollTop: top-headerHeight}, 1000, function () {
//           $el.css("opacity", "1").addClass(animateClass);
//       });
//   });
// });

// document.querySelector('#hamburger').addEventListener('click', nav_modal.toggle.bind(nav_modal))
// document.querySelector('.nav-modal').addEventListener('click', function (e) {
//   nav_modal.hide();
// });