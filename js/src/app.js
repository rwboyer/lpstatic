$(document).foundation();

$(document).ready(function() {
  $('.top-bar .top-bar-section ul li a').smoothScroll({
    offset: -79
  });
  $('.top-bar li').on( 'click', function(e){
    $('li.active').removeClass('active');
    $(this).addClass('active');
  });
});

function getQueryVariable(variable) {
     var query = window.location.search.substring(1);
     var vars = query.split("&");
     for (var i=0;i<vars.length;i++) {
          var pair = vars[i].split("=");
          if(pair[0] == variable){return pair[1];}
     }
     return(false);
}

if (window.location.search) {
     var showModal = getQueryVariable('showModal');
     if (showModal == 'yes') {
          $('#contact-success').foundation('reveal', 'open');
     }
}