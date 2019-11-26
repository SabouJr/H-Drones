$('.order').click(function(e) {
    e.preventDefault();
    let button = $(this);
    if(!button.hasClass('animate')) {
        button.addClass('animate');
        setTimeout(() => {
            button.removeClass('animate');
        }, 6500);
    }
});

// Loader
 $(window).on('load', function(){
   $("#loader").fadeOut("slow");
 });
