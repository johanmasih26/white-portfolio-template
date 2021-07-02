!(function($){
    "use strict";
    
    $(window).scroll(function(e) {
      e.preventDefault();
        if ($(this).scrollTop() > 550) {
                  $('nav').removeClass('navbar-light'); 
                  $('nav').addClass('navbar-sky'); 
        }else{
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
})(jQuery);
