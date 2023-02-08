$(window).on("load", function() {

  "use strict";

  // --------------------------------------------- //
  // Loader Start
  // --------------------------------------------- //
  // Logo Animate Out
  $('.loader__container').removeClass('white-shadow');
  $(".loader__logo").removeClass('slideInDown').addClass('fadeOutUp');
  $(".loader__caption").removeClass('slideInUp').addClass('fadeOutDown');

  // Morphing Transition Animation
  setTimeout(function(){
    var loaderSlogan = $(".loader__slogan");
    // If there is Slogan - Morphing Transition Animation After Slogan
    if(loaderSlogan.length){
      var typedLoader = new Typed('#slogan', {
        stringsElement: '#slogan-strings',
        typeSpeed: 40,
        onComplete: function(self) {
          setTimeout(function(){
            var loading = anime({
              targets: '.loader',
              translateY: '-200vh',
              easing: 'linear',
              duration: 1300
            });
            var loadMorphing = anime({
              targets: '.loader-morphing-path',
              d: [
                { value: 'M-22.4-87.7C-30.7,8.2,34.5,488.1,194.2,496c189.3,9.4,264.6-232.7,431.3-231c187.6,2,331.6,482.9,528.2,492c443.7,20.5,435.1-828.5,368.6-954.8C1455.9-324.1,34.5-746.7-22.4-87.7z' },
                { value: 'M-22.4-87.7c-8.3,95.9,56.9,71.1,216.6,79c189.3,9.4,264.6-2.6,431.3-0.8c187.6,2,331.6-9.3,528.2-0.2c443.7,20.5,435.1-61.8,368.6-188.1C1455.9-324.1,34.5-746.7-22.4-87.7z' }
              ],
              easing: 'easeOutQuad',
              elasticity: 100,
              duration: 1000,
              delay: 0
            });
          },1000);
        },
      });

    // If there is No Slogan - Morphing Transition Animation After Logo Animate Out
    } else {
      var loading = anime({
        targets: '.loader',
        translateY: '-200vh',
        easing: 'linear',
        duration: 1300
      });
      var loadMorphing = anime({
        targets: '.loader-morphing-path',
        d: [
          { value: 'M-22.4-87.7C-30.7,8.2,34.5,488.1,194.2,496c189.3,9.4,264.6-232.7,431.3-231c187.6,2,331.6,482.9,528.2,492c443.7,20.5,435.1-828.5,368.6-954.8C1455.9-324.1,34.5-746.7-22.4-87.7z' },
          { value: 'M-22.4-87.7c-8.3,95.9,56.9,71.1,216.6,79c189.3,9.4,264.6-2.6,431.3-0.8c187.6,2,331.6-9.3,528.2-0.2c443.7,20.5,435.1-61.8,368.6-188.1C1455.9-324.1,34.5-746.7-22.4-87.7z' }
        ],
        easing: 'easeOutQuad',
        elasticity: 100,
        duration: 800,
        delay: 0
      });
    }
    // Removing 'overflow: hidden' Property from <body>
    $('body').removeClass('overflow-hidden');
  },600);
  // --------------------------------------------- //
  // Loader End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // Typed.js Plugin Settings Start
  // --------------------------------------------- //
  var animatedHeadline = $(".animated-headline");
  if(animatedHeadline.length){
    var typed = new Typed('#typed', {
      stringsElement: '#typed-strings',
      loop: true,
      typeSpeed: 80,
      backSpeed: 30,
      backDelay: 1600
    });
  }
  // --------------------------------------------- //
  // Typed.js Plugin Settings End
  // --------------------------------------------- //

});



// modal popup js start
$('.md-trigger').on('click', function (e) {
  setTimeout(() => {
    $('#modal-1').toggleClass("md-show");
    e.preventDefault();
  }, 1500);
});

$('#md-close').on('click', function (e) {
  $('#modal-1').toggleClass("md-show");
  e.preventDefault();
});


// modal why attend
$('.md-trigger-whyattend').on('click', function (e) {
  setTimeout(() => {
    $('#modal-whyattend').toggleClass("md-show");
    e.preventDefault();
  }, 1500);
});


$('#md-close-whyattend').on('click', function (e) {
  $('#modal-whyattend').toggleClass("md-show");
  e.preventDefault();
});

// modal schedule
$('.md-trigger-schedule').on('click', function (e) {
  setTimeout(() => {
    $('#modal-schedule').toggleClass("md-show");
    e.preventDefault();
  }, 1500);
});


$('#md-close-schedule').on('click', function (e) {
  $('#modal-schedule').toggleClass("md-show");
  e.preventDefault();
});

// modal tickets
$('.md-trigger-tickets').on('click', function (e) {
  setTimeout(() => {
    $('#modal-tickets').toggleClass("md-show");
    e.preventDefault();
  }, 1500);
});


$('#md-close-tickets').on('click', function (e) {
  $('#modal-tickets').toggleClass("md-show");
  e.preventDefault();
});


// modal 2
$('.md-trigger1').on('click', function (e) {
  setTimeout(() => {
    $('#modal-2').toggleClass("md-show");
    e.preventDefault();
  }, 1500);
});

$('#md-close1').on('click', function (e) {
  $('#modal-2').toggleClass("md-show");
  e.preventDefault();
});

// modal3
$('.md-trigger3').on('click', function (e) {
  setTimeout(() => {
    $('#modal-3').toggleClass("md-show");
    e.preventDefault();
  }, 1500);
});
$('#md-close3').on('click', function (e) {
  $('#modal-3').toggleClass("md-show");
  e.preventDefault();
});

// modal 4
$('.md-trigger4').on('click', function (e) {
  setTimeout(() => {
    $('#modal-4').toggleClass("md-show");
    e.preventDefault();
  }, 1500);
});

$('#md-close4').on('click', function (e) {
  $('#modal-4').toggleClass("md-show");
  e.preventDefault();
});

// modal 5
$('.md-trigger5').on('click', function (e) {
  setTimeout(() => {
    $('#modal-5').toggleClass("md-show");
    e.preventDefault();
  }, 1500);
});

$('#md-close5').on('click', function (e) {
  $('#modal-5').toggleClass("md-show");
  e.preventDefault();
});


// modal 6
$('.md-trigger6').on('click', function (e) {
  setTimeout(() => {
    $('#modal-6').toggleClass("md-show");
    e.preventDefault();
  }, 1500);
});

$('#md-close6').on('click', function (e) {
  $('#modal-6').toggleClass("md-show");
  e.preventDefault();
});

// modal 7
$('.md-trigger7').on('click', function (e) {
  setTimeout(() => {
    $('#modal-7').toggleClass("md-show");
    e.preventDefault();
  }, 1500);
});

$('#md-close7').on('click', function (e) {
  $('#modal-7').toggleClass("md-show");
  e.preventDefault();
});

// modal 8
$('.md-trigger8').on('click', function (e) {
  setTimeout(() => {
    $('#modal-8').toggleClass("md-show");
    e.preventDefault();
  }, 1500);
});

$('#md-close8').on('click', function (e) {
  $('#modal-8').toggleClass("md-show");
  e.preventDefault();
});

// modal 9
$('.md-trigger9').on('click', function (e) {
  setTimeout(() => {
    $('#modal-9').toggleClass("md-show");
    e.preventDefault();
  }, 1500);
});

$('#md-close9').on('click', function (e) {
  $('#modal-9').toggleClass("md-show");
  e.preventDefault();
});

// modal 10
$('.md-trigger10').on('click', function (e) {
  setTimeout(() => {
    $('#modal-10').toggleClass("md-show");
    e.preventDefault();
  }, 1500);
});

$('#md-close10').on('click', function (e) {
  $('#modal-10').toggleClass("md-show");
  e.preventDefault();
});

// modal 11
$('.md-trigger11').on('click', function (e) {
  setTimeout(() => {
    $('#modal-11').toggleClass("md-show");
    e.preventDefault();
  }, 1500);
});

$('#md-close11').on('click', function (e) {
  $('#modal-11').toggleClass("md-show");
  e.preventDefault();
});




