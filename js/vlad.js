var $page = $('html, body');
$('a[href*="#"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 600);
    return false;
});
$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: true,
    centerMode: true,
    focusOnSelect: true
  });



  jQuery(function($) {
    $(window).scroll(function(){
    if($(this).scrollTop()>80){
    $('div.single_card_right_panel').addClass('fixed-on');
    }
    else if ($(this).scrollTop()<80){
    $('div.single_card_right_panel').removeClass('fixed-on');
    }
    });
  });
  jQuery(function($) {
      $(window).scroll(function(){
      if($(this).scrollTop()>80){
      $('div.single_card_left_menu').addClass('fixed-on');
      }
      else if ($(this).scrollTop()<80){
      $('div.single_card_left_menu').removeClass('fixed-on');
      }
      });
  });
  

        