$.noConflict();   // <=====  HERE  ======
jQuery( document ).ready(function( $ ) {
  $('.menu_hamb').click( function(e) {
  
  e.preventDefault;
  $(this).toggleClass('menu_hamb--active');
  $('#menu').toggleClass('visible');

});

$('.menu_hover').click( function(){
  $('.sub_menu').toggleClass('sub_menu-active ')

})


//verticalslider
   "use strict";
  $('.slider_main').slick({
    vertical: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: false,
    draggable: false,
    speed: 1000,
    infinite:true,
    centerMode: false,
    adaptiveHeight: true,
    initialSlide: 1,
    asNavFor: '.slider_nav'
  });

var $slider = $(".slider_nav");
$slider
  .on("init", function() {
    mouseWheel($slider);
  })
  .slick({
    vertical: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.slider_main',
    dots: false,
    draggable: false,
    speed: 1000,
    centerMode: false,
    centerPadding: '40px',
    focusOnSelect: true
  });

function mouseWheel($slider) {
  $('.project').on("wheel", { $slider: $slider }, mouseWheelHandler);
}
function mouseWheelHandler(event) {
  event.preventDefault();
  var $slider = event.data.$slider;
  var delta = event.originalEvent.deltaY;
  if (delta > 0) {
    $slider.slick("slickPrev");
  } else {
    $slider.slick("slickNext");
  }
}
$('.info_slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  draggable: true,
  asNavFor: '.info_slider-nav'
});
$('.info_slider-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: false,
  centerMode: true,
  focusOnSelect: true,
  arrows: false,
  asNavFor: '.info_slider'
})


window.onload = function() {
  var modal = document.getElementById('modal');

  setTimeout(function() {
    modal.style.display = 'block';              
  }, 15000);
}
// feedbackform

$('.sp_promo-btn').click(function () {
  $('#form').show(1000)
})
$('.sp_promo-btn').click(function () {
  $('#form').hide(1000)
})
$(".feedback_close, .feedback_popup_close").click(function(){
  $("#modal").fadeOut(500)
})

//hideshow
$('#info1').click(function(e){
  $(".shown_info").addClass('slide-left')
  $('#for_info1').addClass('slide-left')
  $(".back_icon").css("visibility","visible")
});
$('.back_icon').click(function(e){
  $(".shown_info").removeClass('slide-left')
  $('#for_info1').removeClass('slide-left')
  $('#for_info1').addClass('slide-right')
  $(this).css("visibility","visible")
});




$(".sp_promo_btn").click(function(e){
  $('#form').show();
});
$(".form_close").click(function (){
  $('#form').hide();
})


$("#form").submit(function() {
  // e.preventDefault();
  $('button[type="submit"]').prop('disabled', true);
  user.email = $("#email").val();
  user.name = $("#name").val();
  user.phone = $("#tel").val()
  if (email == '' || name == '' || phone == '') {
    $("textarea").css("background","#C4C4C4")

  } 
  else {
    $('button[type="submit"]').css("background","#EFAE00")
    $('button[type="submit"]').prop('disabled', false);
    $('button[type="submit"]').click(function (){
      $('#form').hide();
    })
  }

});

});

