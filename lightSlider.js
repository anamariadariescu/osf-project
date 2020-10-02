$(document).ready(function () {

  var windowWidth = $(window).width();

// 2- For all devices under or at 768px, use horizontal orientation
if(windowWidth <= 768) {
  $('#lightSlider').lightSlider({
    vertical: false,
    gallery: true,
    item: 1,
    slideMargin: 0,
    thumbItem: 4,
    controls: false,
    verticalHeight: 350,
    vThumbWidth: 300,
    thumbMargin: 20,
    adaptiveHeight: true,
  });
} 
// 3- For all devices over 768px, use vertical orientation
else {
  $('#lightSlider').lightSlider({
    vertical: true,
    gallery: true,
    item: 1,
    slideMargin: 0,
    thumbItem: 4,
    controls: false,
    verticalHeight: 350,
    vThumbWidth: 300,
    thumbMargin: 20,
    adaptiveHeight: true,
  });
}


  
//   $('#lightSlider').lightSlider({
//     gallery: true,
//     item: 1,
//     slideMargin: 0,
//     thumbItem: 4,
//     controls: false,
//     verticalHeight: 350,
//     vThumbWidth: 300,
//     thumbMargin: 20,
//     adaptiveHeight: true,
//   });
});

