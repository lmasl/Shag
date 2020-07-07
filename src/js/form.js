

document
    .getElementsByClassName('.form-signup')
    .find('input, textarea')
    .on('keyup blur focus', function (e) {

    var $this = $(this),
      label = $this.prev('label');

    if (e.type === 'keyup') {

      if ($this.val() === '') {
        label.removeClass('active highlight');
      } else {
        label.addClass('active highlight');
      }

    }

    if (e.type === 'blur') {

      if ($this.val() === '') {
        label.removeClass('active highlight');
      } else {
        label.removeClass('highlight');
      }

    }

    if (e.type === 'focus') {

      if ($this.val() === '') {
        label.removeClass('highlight');
      } else if ($this.val() !== '') {
        label.addClass('highlight');
      }

    }

  });

  $('.tab a').on('click', function (e) {

    e.preventDefault();

    $(this).parent().addClass('active');
    $(this).parent().siblings().removeClass('active');

    const target = $(this).attr('href');

    $('.tab-content > div').not(target).hide();

    $(target).fadeIn(600);

  });

  let nav_modal = {
    el : document.querySelector('.nav-modal'),
    btn : document.getElementById('hamburger'),
    showAnimate : 'fadeInDownBig',//'bounceInDown',
    hideAnimate : 'fadeOutUpBig',
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