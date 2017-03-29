var counter = 1;


/* ANIMATTE ARROW ON HOVERING CIRCLE DIV */

$(".circle").hover(function () {
  $(".arrow").css("padding-top", "10px");
}, function () { 
  $(".arrow").css("padding-top", "0");
});

/* IMAGE SIDESHOW */

setInterval(function () {
  
  $(".about-pic").fadeOut(function () {
    $(this).attr("src", "img/aboutpic" + counter + ".jpg");
  }).fadeIn(); 
  
  counter++;
  if (counter === 5) {
    counter = 1;
  }
  
}, 9000);


/* NAVIGATION SMOOTHSCROLL */

$("header  a").click(function (e) {
  var link = $(this).attr('href');
  
  $('html, body').animate({
    
    scrollTop: $(link).offset().top
    
  });

  e.preventDefault();
  
});

/* MOBILE MENU */

$(".menu").click(function () {
  
  if ($(".main-nav ul").hasClass("open")) {
      $(".main-nav ul").removeClass("open");
  }
  
  else {
    $(".main-nav ul").addClass("open");
  }
  
});

/* MOBILE HOVER FIX */

if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
  
  
  $(".plan-container").click(function () {
    $(this).css("opacity", "1");
    
    
  }); 
  
}