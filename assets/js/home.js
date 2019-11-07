//lazyload
// $(document).ready(function() {
//   $("img").unveil(100);
// });


// Pop up Secteurs d'activité
function openSection(idElem) {
    var $elem = $("#"+idElem);
    if ($elem.hasClass("open-section")) {
      $("#"+idElem).removeClass("open-section");
    } else {
      $("#"+idElem).addClass("open-section");
    }
}

// // Logo HDrones video Header
// $(window).on('load', function(){
//     setTimeout(function(){
//     	$(".logo-video").css("opacity", "1");
//    }, 2000);
// });

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
 setTimeout(function(){  setTimeout(countdown1, delta1); }, 5000);


// opacity effect
var $secteursBottom = $('.secteurs').position().top + $('.secteurs').height();
var $palmaresBottom = $('.palmares-top').position().top + $('.palmares-top').height();
$(document).ready(function() {

 $(window).scroll(function() {
   if ($( window ).width() > 600) {
     if($(window).scrollTop() >= $secteursBottom - 100) {
       $('.text-chiffres').css("opacity", "1");
     }
     if($(window).scrollTop() >= $secteursBottom) {
       $('.transi1').css("opacity", "1");
       $('.transi2').css("opacity", "1");
       $('.transi3').css("opacity", "1");
     }
     if($(window).scrollTop() >= $palmaresBottom - 400) {
       $('.transi4').css("opacity", "1");
       $('.transi5').css("opacity", "1");
       $('.transi6').css("opacity", "1");
     }
   }
 })

  // // Hide & Show video header when menu is open
  // $("#menu-nav").on( "click", function() {
  //   $("#video-fond").addClass("remove-video");
  // });
  // $("#menu .close").on( "click", function() {
  //   $("#video-fond").removeClass("remove-video");
  // });
});