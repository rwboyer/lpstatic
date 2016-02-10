jQuery(window).scroll(function() {
    if ($(document).scrollTop() >= 50) {
        $(".important-class").addClass("padding-on-my-header");
        $('#logo-image').attr('src', 'images/1445814383284.jpg');
    }
    else{
        $(".important-class").removeClass("padding-on-my-header");
        $('#logo-image').attr('src', 'images/1445814383284.jpg');
    }
});