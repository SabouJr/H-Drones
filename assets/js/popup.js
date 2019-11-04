function openSection(idElem) {
    var $elem = $("#"+idElem);
    if ($elem.hasClass("open-section")) {
      $("#"+idElem).removeClass("open-section");
    } else {
      $("#"+idElem).addClass("open-section");
    }
}

$(window).on('load', function(){
    if ($( window ).width() > 900) {
      setTimeout(function(){
      	$(".logo-video").css("opacity", "1");
     }, 2000);
    }
});

var $objectifsBottom = $('.container-objectifs').position().top + $('.container-objectifs').height();
var $palmaresBottom = $('.container-palmares').position().top + $('.container-palmares').height();
$(document).ready(function() {
  $(window).scroll(function() {
    if ($( window ).width() > 600) {
      if($(window).scrollTop() >= $objectifsBottom - 180) {
        $('.concours').css("opacity", "1");
      }
      if($(window).scrollTop() >= $palmaresBottom - 180) {
        $('.clients').css("opacity", "1");
      }
    } else {
      if($(window).scrollTop() >= $objectifsBottom - 500) {
        $('.concours').css("opacity", "1");
      }
      if($(window).scrollTop() >= $palmaresBottom - 500) {
        $('.clients').css("opacity", "1");
      }
    }

  })
})
