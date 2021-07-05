!(function($) {
    "use strict";

    if ($('.typed').length) {
        var typed_strings = $(".typed").data('typed-items');
        typed_strings = typed_strings.split(',')
        new Typed('.typed', {
            strings: typed_strings,
            loop: true,
            typeSpeed: 100,
            backSpeed: 50,
            backDelay: 2000
        });
    }
    $(window).scroll(function(e) {
        e.preventDefault();
        if ($(this).scrollTop() > 550) {
            $('nav').removeClass('navbar-light');
            $('.navbar-toggler i').addClass('icofont-navigation-menu1');
            $('nav').addClass('navbar-sky');



        } else {

            $('.navbar-toggler i').removeClass('icofont-navigation-menu1');
            $('nav').removeClass('navbar-sky');
            $('nav').addClass('navbar-light');
        }









        $('.skills-content').waypoint(function() {
            $('.progress .progress-bar').each(function() {
                $(this).css("width", $(this).attr("aria-valuenow") + '%');
            });
        }, {
            offset: '80%'
        });

    });



    // Init AOS
    function aos_init() {
        AOS.init({
            duration: 1000,
            easing: "ease-in-out-back",
            once: true
        });
    }
    $(window).on('load', function() {
        aos_init();
    });

})(jQuery);