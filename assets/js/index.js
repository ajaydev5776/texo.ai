
$(window).on('load', function () {
    setTimeout(function () { 
        $('.page-loader').fadeOut('slow');
        $('body').removeClass('overflow-hidden');
    }, 1000);
});

$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll <= 80) {
        $("nav.navbar").removeClass("nav-active");
    } else {
        $("nav.navbar").addClass("nav-active");
    }
});


// $(document).ready(function () {
//     $('.preloader').addClass('active');
// });



    // glightbox
    var lightboxInlineIframe = GLightbox({
        selector: '.glightbox'
    });
    