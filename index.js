$(document).ready(function(){
    $('.pass_show').append('<span toggle="#input-pwd" class="ptxt fa fa-fw fa-eye field-icon toggle-password"></span>');  
    });
      
    
    $(document).on('click','.pass_show .ptxt', function(){ 

        // $(this).text($(this).text() == "Show" ? "Hide" : "Show"); 
    
    // $(this).text($(this).text() == "Show" ? "Hide" : "Show"); 
    
    $(this).prev().attr('type', function(index, attr){return attr == 'password' ? 'text' : 'password'; }); 
    
    });  