$(document).ready(function() {

  // smooth scrollin //
  $('a').click(function(){
    $('html, body').animate({
      scrollTop: $( $.attr(this, 'href')).offset().top
    }, 500);
    return false
  });
 
 // hover over rappers face animation
 $('.nav-item').hover(function() {
      $( this ).addClass("hover");
      }, function() {
        $( this ).removeClass("hover");
      }
  );

  // play audio clip on image click //
  $('#quavopew').click(function(){
      $('#playsound').append('<embed id="embed_player" src="assets/audio/quavopewpew.mp3" autostart="true" hidden="true"></embed>');
  });
  $('#offsetbwah').click(function(){
      $('#playsound').append('<embed id="embed_player" src="assets/audio/offsetbwah.mp3" autostart="true" hidden="true"></embed>');
  });
  // $('#offsetwhoowhoowhoowhoowhoo').click(function(){
  //     $('#playsound').append('<embed id="embed_player" src="assets/audio/offsetwhoowhoowhoowhoowhoo.mp3" autostart="true" hidden="true"></embed>');
  // });
  $('#offsetwoofgrr').click(function(){
      $('#playsound').append('<embed id="embed_player" src="assets/audio/offsetwoofgrr.mp3" autostart="true" hidden="true"></embed>');
  });
  $('#takeoffgrrah').click(function(){
      $('#playsound').append('<embed id="embed_player" src="assets/audio/takeoffgrrah.mp3" autostart="true" hidden="true"></embed>');
  });
  $('#takeoffskrtskrt').click(function(){
      $('#playsound').append('<embed id="embed_player" src="assets/audio/takeoffskrtskrt.mp3" autostart="true" hidden="true"></embed>');
  });
  $('#kendrick').click(function(){
      $('#playsound').append('<embed id="embed_player" src="assets/audio/kendricktootootootoo.mp3" autostart="true" hidden="true"></embed>');
  });
  $('#travisthatwasfun').click(function(){
      $('#playsound').append('<embed id="embed_player" src="assets/audio/travisthatwasfun.mp3" autostart="true" hidden="true"></embed>');
  });
  $('#travisitslit').click(function(){
      $('#playsound').append('<embed id="embed_player" src="assets/audio/travisitslit.mp3" autostart="true" hidden="true"></embed>');
  });
  $('#travisohmygod').click(function(){
      $('#playsound').append('<embed id="embed_player" src="assets/audio/travisohmygod.mp3" autostart="true" hidden="true"></embed>');
  });
  $('#travisstraightup').click(function(){
      $('#playsound').append('<embed id="embed_player" src="assets/audio/travisstraightup.mp3" autostart="true" hidden="true"></embed>');
  });
  $('#futureganggang').click(function(){
      $('#playsound').append('<embed id="embed_player" src="assets/audio/futureganggang.mp3" autostart="true" hidden="true"></embed>');
  });
  $('#futurewhoawhoawhoa').click(function(){
      $('#playsound').append('<embed id="embed_player" src="assets/audio/futurewhoawhoawhoa.mp3" autostart="true" hidden="true"></embed>');
  });
  $('#self').click(function(){
      $('#playsound').append('<embed id="embed_player" src="assets/audio/myadlib.mp3" autostart="true" hidden="true"></embed>');
  });

});

