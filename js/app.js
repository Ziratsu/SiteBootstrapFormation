(function ($) {
    "use strict";


    // fonction qui permet de faire le smooth scroll 

    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: (target.offset().top - 56)
                }, 1000, "easeInOutExpo");
                return false;
            }
        }
    });


    // fermer le menu quand on clique dessus
    $('.js-scroll-trigger').click(function () {
        $('.navbar-collapse').collapse('hide');
    });


    // Activer le scrollspy
    $('body').scrollspy({
        target: '#mainNav',
        offset: 57
    });

    // creer la navbar blanche quand on scroll down et qu'on est en full screen
    var navbarCollapse = function () {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };
    navbarCollapse();
    $(window).scroll(navbarCollapse);


    // Magnific popup portfolio
    $('.popup-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1]
        },
        image: {
            tError: '<a href="%url%"> The image #%curr%</a> could not be loaded.'
        }
    });

})(jQuery);