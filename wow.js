$( document ).ready(function() {
  new WOW().init();
});

$(window).scroll(function() {
  $(".slideanim").each(function(){
    var pos = $(this).offset().top;

    var winTop = $(window).scrollTop();
    if (pos < winTop + 1000) { //400 is original
      $(this).addClass("slide");
    }
  });
});
