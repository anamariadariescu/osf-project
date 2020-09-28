$(document).ready(function () {
  $('#lightSlider').lightSlider({
    gallery: true,
    item: 1,
    slideMargin: 0,
    thumbItem: 4,
    controls: false,
    vertical: true,
    verticalHeight: 350,
    vThumbWidth: 300,
    thumbMargin: 20,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 300,
        item: 3
      }
    ]
  });
});