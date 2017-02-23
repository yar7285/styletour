$(function () {
   $('.search').on('click', function () {
      $('.main-menu .navbar-form').slideToggle();
   });
});
$(window).load(function () {
    var carouselCaptionWidth = $('#carousel-sidebar .active img').width();
    console.log(carouselCaptionWidth);
    $('#carousel-sidebar img').each(function () {
       $(this).attr('width', carouselCaptionWidth);
    });
    $('#carousel-sidebar .sidebar-carousel-caption').css('max-width', carouselCaptionWidth + 'px');
    $('#carousel-sidebar .carousel-indicators').css('max-width', carouselCaptionWidth + 'px');
    $('.sidebar .baner').css('max-width', carouselCaptionWidth + 'px');
});