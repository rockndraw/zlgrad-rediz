setInterval(function() {
  var eqSlide = $('.home-banner__slide.active').index();
  if (eqSlide==1){
    eqSlide=-1;
  }
  $('.home-banner__slide').eq(eqSlide).removeClass("first active animated fadeInLeftBig");
  $('.home-banner__slide').eq(eqSlide).addClass("animated fadeOutLeftBig");
  $('.home-banner__slide').eq(eqSlide+1).removeClass("animated fadeOutLeftBig");
  $('.home-banner__slide').eq(eqSlide+1).addClass("active animated fadeInLeftBig");

  var eqNews = $('.news__slide.active').index();
  if (eqNews==1){
    eqNews=-1;
  }
  $('.news__slide').eq(eqNews).removeClass("first active animated fadeInDown");
  $('.news__slide').eq(eqNews).addClass("animated fadeOutUp");
  $('.news__slide').eq(eqNews+1).removeClass("animated fadeOutUp");
  $('.news__slide').eq(eqNews+1).addClass("active animated fadeInDown");

}, 7000);
