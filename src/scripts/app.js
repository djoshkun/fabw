 jQuery("document").ready(function($){
 	
    var nav = $('.region-header');
    var pos = nav.offset().top;
    
    $(window).scroll(function () {
          var fix = ($(this).scrollTop() > pos) ? true : false;
          nav.toggleClass("fix-nav", fix);
          $('body').toggleClass("fix-body", fix);
    });

    $(window).scroll(function () {
         if ($(this).scrollTop() > 50) {
              $('.region-header').addClass("fix-nav");
          $('body').addClass("fix-body");
         } else {
          $('.region-headerr').removeClass("fix-nav");
          $('body').removeClass("fix-body");
         }  
    });

    // Enable Smooth Scrolling 
    $('a[href*="#"]:not([href="#"]):not([href="#show"]):not([href="#hide"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top - 96
          }, 500);
          return false;
        }
      }
    });

    //Show and Hide Form 
    let formButton = $('.form__content__close');
    formButton.on('click', function () {
        $(".form__second__icon").fadeOut();
        formButton.closest(".form__content").fadeOut();
    });

    let formIcon = $('.form__icon');
    formIcon.on('click', function () {
        $(".form__second__icon").fadeIn();
        $(".form__content").fadeIn();
    });

   //Burger Menu
   $(".burger-menu").click(function () {
        $(this).toggleClass("menu-on");
        if($(this).hasClass('menu-on')){
            $('.secondary-navigation .menu').slideDown();
        }
        else{
           $('.secondary-navigation .menu').slideUp();
        }
   });
});