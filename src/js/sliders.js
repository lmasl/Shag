import $ from "./jquery.min";
import './slick/slick.min.js';

$('.info').slick({
  infinite      : false,
  slidesToShow  : 1,
  slidesToScroll: 1,
  variableWidth : true,
  // adaptiveHeight: true,
  /*responsive    : [
    {
      breakpoint: 1360,
      settings  : {
        arrows: false,
        dots  : true
      }
    },
    {
      breakpoint: 991,
      settings  : {
        arrows        : false,
        slidesToShow: 2,
        dots        : true
      }
    },
    {
      breakpoint: 680,
      settings  : {
        arrows        : false,
        slidesToShow  : 1,
        slidesToScroll: 1,
        centerMode    : true,
        dots          : true
      }
    }
  ]*/
});
