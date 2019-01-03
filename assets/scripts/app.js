(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

jQuery("document").ready(function ($) {

  var nav = $('.region-header');
  var pos = nav.offset().top;

  $(window).scroll(function () {
    var fix = $(this).scrollTop() > pos ? true : false;
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
  $('a[href*="#"]:not([href="#"]):not([href="#show"]):not([href="#hide"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - 96
        }, 500);
        return false;
      }
    }
  });

  //Show and Hide Form 
  var formButton = $('.form__content__close');
  formButton.on('click', function () {
    $(".form__second__icon").fadeOut();
    formButton.closest(".form__content").fadeOut();
  });

  var formIcon = $('.form__icon');
  formIcon.on('click', function () {
    $(".form__second__icon").fadeIn();
    $(".form__content").fadeIn();
  });

  //Burger Menu
  $(".burger-menu").click(function () {
    $(this).toggleClass("menu-on");
    if ($(this).hasClass('menu-on')) {
      $('.secondary-navigation .menu').slideDown();
    } else {
      $('.secondary-navigation .menu').slideUp();
    }
  });
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJ3ZWIvdGhlbWVzL2ZhYncvc3JjL3NjcmlwdHMvYXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQyxPQUFPLFVBQVAsRUFBbUIsS0FBbkIsQ0FBeUIsVUFBUyxDQUFULEVBQVc7O0FBRWpDLE1BQUksTUFBTSxFQUFFLGdCQUFGLENBQVY7QUFDQSxNQUFJLE1BQU0sSUFBSSxNQUFKLEdBQWEsR0FBdkI7O0FBRUEsSUFBRSxNQUFGLEVBQVUsTUFBVixDQUFpQixZQUFZO0FBQ3ZCLFFBQUksTUFBTyxFQUFFLElBQUYsRUFBUSxTQUFSLEtBQXNCLEdBQXZCLEdBQThCLElBQTlCLEdBQXFDLEtBQS9DO0FBQ0EsUUFBSSxXQUFKLENBQWdCLFNBQWhCLEVBQTJCLEdBQTNCO0FBQ0EsTUFBRSxNQUFGLEVBQVUsV0FBVixDQUFzQixVQUF0QixFQUFrQyxHQUFsQztBQUNMLEdBSkQ7O0FBTUEsSUFBRSxNQUFGLEVBQVUsTUFBVixDQUFpQixZQUFZO0FBQ3hCLFFBQUksRUFBRSxJQUFGLEVBQVEsU0FBUixLQUFzQixFQUExQixFQUE4QjtBQUN6QixRQUFFLGdCQUFGLEVBQW9CLFFBQXBCLENBQTZCLFNBQTdCO0FBQ0osUUFBRSxNQUFGLEVBQVUsUUFBVixDQUFtQixVQUFuQjtBQUNBLEtBSEQsTUFHTztBQUNOLFFBQUUsaUJBQUYsRUFBcUIsV0FBckIsQ0FBaUMsU0FBakM7QUFDQSxRQUFFLE1BQUYsRUFBVSxXQUFWLENBQXNCLFVBQXRCO0FBQ0E7QUFDTCxHQVJEOztBQVVBO0FBQ0EsSUFBRSxzRUFBRixFQUEwRSxLQUExRSxDQUFnRixZQUFXO0FBQ3pGLFFBQUksU0FBUyxRQUFULENBQWtCLE9BQWxCLENBQTBCLEtBQTFCLEVBQWdDLEVBQWhDLEtBQXVDLEtBQUssUUFBTCxDQUFjLE9BQWQsQ0FBc0IsS0FBdEIsRUFBNEIsRUFBNUIsQ0FBdkMsSUFBMEUsU0FBUyxRQUFULElBQXFCLEtBQUssUUFBeEcsRUFBa0g7QUFDaEgsVUFBSSxTQUFTLEVBQUUsS0FBSyxJQUFQLENBQWI7QUFDQSxlQUFTLE9BQU8sTUFBUCxHQUFnQixNQUFoQixHQUF5QixFQUFFLFdBQVcsS0FBSyxJQUFMLENBQVUsS0FBVixDQUFnQixDQUFoQixDQUFYLEdBQStCLEdBQWpDLENBQWxDO0FBQ0EsVUFBSSxPQUFPLE1BQVgsRUFBbUI7QUFDakIsVUFBRSxXQUFGLEVBQWUsT0FBZixDQUF1QjtBQUNyQixxQkFBVyxPQUFPLE1BQVAsR0FBZ0IsR0FBaEIsR0FBc0I7QUFEWixTQUF2QixFQUVHLEdBRkg7QUFHQSxlQUFPLEtBQVA7QUFDRDtBQUNGO0FBQ0YsR0FYRDs7QUFhQTtBQUNBLE1BQUksYUFBYSxFQUFFLHVCQUFGLENBQWpCO0FBQ0EsYUFBVyxFQUFYLENBQWMsT0FBZCxFQUF1QixZQUFZO0FBQy9CLE1BQUUscUJBQUYsRUFBeUIsT0FBekI7QUFDQSxlQUFXLE9BQVgsQ0FBbUIsZ0JBQW5CLEVBQXFDLE9BQXJDO0FBQ0gsR0FIRDs7QUFLQSxNQUFJLFdBQVcsRUFBRSxhQUFGLENBQWY7QUFDQSxXQUFTLEVBQVQsQ0FBWSxPQUFaLEVBQXFCLFlBQVk7QUFDN0IsTUFBRSxxQkFBRixFQUF5QixNQUF6QjtBQUNBLE1BQUUsZ0JBQUYsRUFBb0IsTUFBcEI7QUFDSCxHQUhEOztBQUtEO0FBQ0EsSUFBRSxjQUFGLEVBQWtCLEtBQWxCLENBQXdCLFlBQVk7QUFDL0IsTUFBRSxJQUFGLEVBQVEsV0FBUixDQUFvQixTQUFwQjtBQUNBLFFBQUcsRUFBRSxJQUFGLEVBQVEsUUFBUixDQUFpQixTQUFqQixDQUFILEVBQStCO0FBQzNCLFFBQUUsNkJBQUYsRUFBaUMsU0FBakM7QUFDSCxLQUZELE1BR0k7QUFDRCxRQUFFLDZCQUFGLEVBQWlDLE9BQWpDO0FBQ0Y7QUFDTCxHQVJEO0FBU0YsQ0ExREEiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiIGpRdWVyeShcImRvY3VtZW50XCIpLnJlYWR5KGZ1bmN0aW9uKCQpe1xuIFx0XG4gICAgdmFyIG5hdiA9ICQoJy5yZWdpb24taGVhZGVyJyk7XG4gICAgdmFyIHBvcyA9IG5hdi5vZmZzZXQoKS50b3A7XG4gICAgXG4gICAgJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdmFyIGZpeCA9ICgkKHRoaXMpLnNjcm9sbFRvcCgpID4gcG9zKSA/IHRydWUgOiBmYWxzZTtcbiAgICAgICAgICBuYXYudG9nZ2xlQ2xhc3MoXCJmaXgtbmF2XCIsIGZpeCk7XG4gICAgICAgICAgJCgnYm9keScpLnRvZ2dsZUNsYXNzKFwiZml4LWJvZHlcIiwgZml4KTtcbiAgICB9KTtcblxuICAgICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgaWYgKCQodGhpcykuc2Nyb2xsVG9wKCkgPiA1MCkge1xuICAgICAgICAgICAgICAkKCcucmVnaW9uLWhlYWRlcicpLmFkZENsYXNzKFwiZml4LW5hdlwiKTtcbiAgICAgICAgICAkKCdib2R5JykuYWRkQ2xhc3MoXCJmaXgtYm9keVwiKTtcbiAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgJCgnLnJlZ2lvbi1oZWFkZXJyJykucmVtb3ZlQ2xhc3MoXCJmaXgtbmF2XCIpO1xuICAgICAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcyhcImZpeC1ib2R5XCIpO1xuICAgICAgICAgfSAgXG4gICAgfSk7XG5cbiAgICAvLyBFbmFibGUgU21vb3RoIFNjcm9sbGluZyBcbiAgICAkKCdhW2hyZWYqPVwiI1wiXTpub3QoW2hyZWY9XCIjXCJdKTpub3QoW2hyZWY9XCIjc2hvd1wiXSk6bm90KFtocmVmPVwiI2hpZGVcIl0pJykuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICBpZiAobG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXlxcLy8sJycpID09IHRoaXMucGF0aG5hbWUucmVwbGFjZSgvXlxcLy8sJycpICYmIGxvY2F0aW9uLmhvc3RuYW1lID09IHRoaXMuaG9zdG5hbWUpIHtcbiAgICAgICAgdmFyIHRhcmdldCA9ICQodGhpcy5oYXNoKTtcbiAgICAgICAgdGFyZ2V0ID0gdGFyZ2V0Lmxlbmd0aCA/IHRhcmdldCA6ICQoJ1tuYW1lPScgKyB0aGlzLmhhc2guc2xpY2UoMSkgKyddJyk7XG4gICAgICAgIGlmICh0YXJnZXQubGVuZ3RoKSB7XG4gICAgICAgICAgJCgnaHRtbCxib2R5JykuYW5pbWF0ZSh7XG4gICAgICAgICAgICBzY3JvbGxUb3A6IHRhcmdldC5vZmZzZXQoKS50b3AgLSA5NlxuICAgICAgICAgIH0sIDUwMCk7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvL1Nob3cgYW5kIEhpZGUgRm9ybSBcbiAgICBsZXQgZm9ybUJ1dHRvbiA9ICQoJy5mb3JtX19jb250ZW50X19jbG9zZScpO1xuICAgIGZvcm1CdXR0b24ub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKFwiLmZvcm1fX3NlY29uZF9faWNvblwiKS5mYWRlT3V0KCk7XG4gICAgICAgIGZvcm1CdXR0b24uY2xvc2VzdChcIi5mb3JtX19jb250ZW50XCIpLmZhZGVPdXQoKTtcbiAgICB9KTtcblxuICAgIGxldCBmb3JtSWNvbiA9ICQoJy5mb3JtX19pY29uJyk7XG4gICAgZm9ybUljb24ub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKFwiLmZvcm1fX3NlY29uZF9faWNvblwiKS5mYWRlSW4oKTtcbiAgICAgICAgJChcIi5mb3JtX19jb250ZW50XCIpLmZhZGVJbigpO1xuICAgIH0pO1xuXG4gICAvL0J1cmdlciBNZW51XG4gICAkKFwiLmJ1cmdlci1tZW51XCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcyhcIm1lbnUtb25cIik7XG4gICAgICAgIGlmKCQodGhpcykuaGFzQ2xhc3MoJ21lbnUtb24nKSl7XG4gICAgICAgICAgICAkKCcuc2Vjb25kYXJ5LW5hdmlnYXRpb24gLm1lbnUnKS5zbGlkZURvd24oKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAkKCcuc2Vjb25kYXJ5LW5hdmlnYXRpb24gLm1lbnUnKS5zbGlkZVVwKCk7XG4gICAgICAgIH1cbiAgIH0pO1xufSk7Il19
