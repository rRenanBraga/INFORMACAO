$(document).ready(function() {
    $('.rolagem').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
            
            prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">&#9654;</button>',
            nextArrow: '<button class="slick-next" aria-label="Next" type="button">&#9664;</button>'
          });
      
    });
