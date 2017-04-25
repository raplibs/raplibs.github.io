$(document).ready(function() {

  // smooth scrollin //
  $('a').click(function(){
    $('html, body').animate({
      scrollTop: $( $.attr(this, 'href')).offset().top
    }, 500);
    return false
  });

  //Implement the "slide to left" when the user clicks on #carousel-next here
  $("#carousel-next").click(function(){
    var current = parseInt($('#carousel').css('margin-left').replace("px", ""));
    if (current == -3840) {
      return false
    }
    else {
      $('#carousel').css('margin-left', current-960)
    }
  });
  //Implement the "slide to right" when the user clicks on #carousel-prev here

  $("#carousel-prev").click(function(){
    var current = parseInt($('#carousel').css('margin-left').replace("px", ""));
    if (current == 0) {
      return false
    }
    else {
      $('#carousel').css('margin-left', current+960)
    }
  });


});

