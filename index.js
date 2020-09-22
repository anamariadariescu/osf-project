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
    
    });
      
    
    $(document).on('click','.pass_show .ptxt', function(){ 

        // $(this).text($(this).text() == "Show" ? "Hide" : "Show"); 
    
    // $(this).text($(this).text() == "Show" ? "Hide" : "Show"); 
    
    $(this).prev().attr('type', function(index, attr){return attr == 'password' ? 'text' : 'password'; }); 
    
    });  

    // Featured products

