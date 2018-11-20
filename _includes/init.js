 (function($){
   $(function(){
    var slideTimeout;
     $('.button-collapse').sideNav();
     $('.parallax').parallax();
     $('.collapsible').collapsible();
     $('.carousel.carousel-slider').carousel({
       fullWidth: true
      });
     setTimeout(autoplay, 7000);
     function autoplay() {
       $('.carousel.carousel-slider').carousel('next');
       slideTimeout = setTimeout(autoplay, 7000);
     }
     // move next carousel
     $('.moveNextCarousel').click(function (e) {
       e.preventDefault();
       e.stopPropagation();
       $('.carousel').carousel('next');
     });

     // move prev carousel
     $('.movePrevCarousel').click(function (e) {
       e.preventDefault();
       e.stopPropagation();
       $('.carousel').carousel('prev');
     });

     $('.pauseCarousel').click(function (e) {
       e.preventDefault();
       e.stopPropagation();
       clearTimeout(slideTimeout);
     })
     $('.materialboxed').materialbox();
     $('.scrollspy').scrollSpy();
     $('.tap-target').tapTarget('open');

     if (localStorage.getItem('cookieconsent') === 'true') {
       $('#cookies').hide()
     }

     jQuery('#cookies').on('click', function(event) {
            localStorage.setItem('cookieconsent', 'true')
            jQuery('#cookies').toggle('hide');
       });

   }); // end of document ready
 })(jQuery);
