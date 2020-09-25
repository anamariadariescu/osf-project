$(document).ready(function(){
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
        console.log(new Date().getFullYear());

        $(".cart-increment").hide();
        $(".heart-increment").hide();
    });
      
    
    $(document).on('click','.pass_show .ptxt', function(){ 
    
    $(this).prev().attr('type', function(index, attr){return attr == 'password' ? 'text' : 'password'; }); 
    
    });  

    // Buttons: add to cart, plus, heart

    function cart() {
      $(".cart-increment").show();
      var $incrementNumber = $(".cart-increment");
      var a = $incrementNumber.text();
      a++;
      console.log(a);
      $incrementNumber.html("<p class='paragraph-cart'>" + a + "</p>");
    }

    $(".buyNow-button").click(function(e){
      e.preventDefault();
      cart();
    })

    $(".plus").click(function(e){
      e.preventDefault();
      cart();
    })

    $(".heart").click(function(e){
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


