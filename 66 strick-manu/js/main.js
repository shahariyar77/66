$(document).ready(function(){
    /*$(".manu-area").sticky();*/
    $(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    
    if (scroll >= 300) {
        
        $(".section-padding").addClass(".is-sticky");
    }
        else{
            $(".section-padding").removeClass(".is-sticky");
        }
}); 
});