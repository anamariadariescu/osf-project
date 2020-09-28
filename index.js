$(document).ready(function () {
  $('.pass_show').append('<span toggle="#input-pwd" class="ptxt fa fa-fw fa-eye field-icon toggle-password"></span>');
  $('.your-class').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 5000,
    prevArrow: $('.prev1'),
    nextArrow: $('.next1')
  });

  $(".year").html("<i class='fa fa-copyright'></i>" + " Copyright " + new Date().getFullYear());

  $(".cart-increment").hide();
  $(".heart-increment").hide();
});


$(document).on('click', '.pass_show .ptxt', function () {

  $(this).prev().attr('type', function (index, attr) { return attr == 'password' ? 'text' : 'password'; });

});

// Buttons: add to cart, plus, heart

function cart(increment = 1) {
  $(".cart-increment").show();
  var $incrementNumber = $(".cart-increment");
  var a = $incrementNumber.text();
  if (a == '') {
    a = 0;
  }
  var a = parseInt(a) + parseInt(increment);

  $incrementNumber.html("<p class='paragraph-cart'>" + a + "</p>");
}

$(".buyNow-button").click(function (e) {
  e.preventDefault();
  cart();
})

$(".plus").click(function (e) {
  e.preventDefault();
  cart();
})

$('#add-to-cart').click(function (e) {
  e.preventDefault();
  var quantity = $('.quantity').val();
  console.log(quantity);
  cart(quantity);
});

$(".heart").click(function (e) {
  e.preventDefault();
  $(".heart-increment").show();
  var $incrementHearts = $(".heart-increment");
  var b = $incrementHearts.text();
  b++;
  console.log(b);
  $incrementHearts.html(b);
  $incrementHearts.html("<p class='paragraph-heart'>" + b + "</p>");
})

// End Buttons: add to cart, plus, heart 


$(function () {
  $('.load-more').click(function () {
    $.ajax({
      url: 'products.json',
      dataType: 'json',
      success: function (data) {
        var items = [];

        $.each(data['products'], function (key, val) {
          console.log(key);
          console.log(val);

          // items.push("<div class='col'><div class='center hover-tile-product product-tile'><img class='w-100' src='" + val['image'] +"'><div class='centerLink center product-tile-background'><a href='productsDescription.html' class='featured-products-description'>" + val['name'] + "<br>" + val['price'] + "</a></div><div class='overlay'></div><div class='row hover-buttons'><div class='col plus'></div><div class='col-heart'></div></div></div></div>");    
          items.push("<div class='col'><div class='center hover-tile-product product-tile'><img class='w-100' src='" + val['image'] + "'><div class='centerLink center product-tile-background'><a href='productsDescription.html' class='featured-products-description'>" + val['name'] + "<br>" + "$ " + val['price'] + "</a></div><div class='overlay'></div><div class='row hover-buttons'><div class='col plus'><a href='#'><i class='fa fa-plus'></i></a></div><div class='col heart'><a href='#'><i class='fa fa-heart'></i></a></div></div></div></div>");

        });

        $(".backgroundItemsProduct").append("<br><br><br><div class='row linkColor'>" + items + "</div>");
        // $('<ul/>', {
        //    'class': 'interest-list',
        //    html: items.join('')
        // }).appendTo('body');

      },
      statusCode: {
        404: function () {
          alert('There was a problem with the server.  Try again soon!');
        }
      }
    });
  });
});