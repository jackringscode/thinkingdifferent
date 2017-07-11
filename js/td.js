/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery to collapse the navbar on scroll
function collapseNavbar() {
    if ($(".navbar").offset().top > 50) {
      window.console.log("OK, it's collapsed");
        $(".navbar-fixed-top").addClass("top-nav-collapse");
        if(!$(".navbar-brand").is(":visible")){
          $(".navbar-brand").fadeIn(500);
        }

    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
        if($(".navbar-brand").is(":visible")){
          $(".navbar-brand").fadeOut(500);
        }
    }
}

$(window).scroll(collapseNavbar);
$(document).ready(collapseNavbar);

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 750, 'easeInExpo');// may want easeInOutExpo
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $(".navbar-collapse").collapse('hide');
});

$(".titlebox").click(function(){
      var details = $(this).siblings(".details");
      var sectionTop = $(this).closest(".xp-section");

      if(!details.is(":visible")){
          details.slideDown();
          sectionTop.nextAll(".xp-section").children(".details").slideUp();
          sectionTop.addClass("makeBlack");
          sectionTop.nextAll(".xp-section").removeClass("makeBlack");
      }else{
          details.slideUp();
          sectionTop.removeClass("makeBlack");
      }
});
