// Pop up Secteurs d'activité
function openSection(idElem) {
    var $elem = $("#"+idElem);
    if ($elem.hasClass("open-section")) {
      $("#"+idElem).removeClass("open-section");
    } else {
      $("#"+idElem).addClass("open-section");
      $( "div.div-section" ).each(function(index) {
        $(this).not("#"+idElem).removeClass("open-section");
      });
    }
}

// Logo HDrones video Header
 $(window).on('load', function(){
     setTimeout(function(){
       $(".logo-video").css("opacity", "1");
       $(".video-fond .swiper-container").css("opacity", "1");
      $(".arrow-down").css("opacity", "1");
    }, 2000);
 });

// Compteur chiffres
  var bloc1 = 100; // Nombre final du compteur
  var cpt = 0; // Initialisation du compteur
  var duree = 0.5; // Durée en seconde pendant laquel le compteur ira de 0 à 15
  var delta1 = Math.ceil((duree * 1000) / bloc1);
  var node1 =  document.getElementById("compteur1"); // On récupère notre noeud où sera rafraîchi la valeur du compteur
 function countdown1() {
    node1.innerHTML = ++cpt;
    if( cpt < bloc1 ) { // Si on est pas arrivé à la valeur finale, on relance notre compteur une nouvelle fois
       setTimeout(countdown1, delta1);
    }
  }
  setTimeout(function(){  setTimeout(countdown1, delta1); }, 7000);


// opacity effect
var $videoBottom = $('.section-video').position().top + $('.section-video').height();
var $secteursBottom = $('.secteurs').position().top + $('.secteurs').height();
var $palmaresBottom = $('.palmares-top').position().top + $('.palmares-top').height();
var $objectifsBottom = $('.container-objectifs').position().top + $('.container-objectifs').height();
$(document).ready(function() {
  $(window).scroll(function() {
   if($(window).scrollTop() >= $secteursBottom - 50) {
     $('.transi10').css("opacity", "1");
     $('.transi11').css("opacity", "1");
     $('.transi12').css("opacity", "1");
   }
   if($(window).scrollTop() >= $videoBottom) {
     $('.transi7').css("opacity", "1");
     $('.transi8').css("opacity", "1");
     $('.transi9').css("opacity", "1");
   }
   if($(window).scrollTop() >= $objectifsBottom) {
     $('.transi1').css("opacity", "1");
     $('.transi2').css("opacity", "1");
     $('.transi3').css("opacity", "1");
   }
   if($(window).scrollTop() >= $palmaresBottom - 400) {
     $('.transi4').css("opacity", "1");
     $('.transi5').css("opacity", "1");
     $('.transi6').css("opacity", "1");
   }
 });
  // Hide & Show video header when menu is open
 $("#menu-nav").on( "click", function() {
   $("#video-fond").addClass("remove-video");
 });
 $("#menu .close").on( "click", function() {
   $("#video-fond").removeClass("remove-video");
 });
 $("#menu li a").on( "click", function() {
   $("#video-fond").removeClass("remove-video");
 });
});

// Scroll Effect Arrow
$(document).ready(function() {
	$('.js-scrollTo').on('click', function() { // Au clic sur un élément
		var page = "#secteurs-part"; // Page cible
		var speed = 750; // Durée de l'animation (en ms)
		$('html, body').animate( { scrollTop: $(page).offset().top }, speed ); // Go
		return false;
	});
});

// VIEWPORT FIX
// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);
