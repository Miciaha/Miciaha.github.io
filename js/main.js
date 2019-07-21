$(document).ready(function(){
    console.log("ready");
    


    setTimeout(function(){
        $("#hello-text").fadeIn(1000);
    },500);
    setTimeout(function(){
        $("#hello-text").fadeOut(1000);
    },500);

   setTimeout(function(){
       $("nav").fadeIn(0);
   }, 2000);

   setTimeout(function(){
    $(".section-card").fadeIn(0);
}, 2000);
    
    setTimeout(function(){
        $("#about-image-effect").fadeIn(0);
    },3000);

    setTimeout(function(){
        $("#intro").fadeIn(2000)
    },4000);   

    setTimeout(function(){

    },1000);

    $(document).on("scroll", function(){
        var pageTop = $(document).scrollTop();
        var pageBottom = pageTop + $(window).height();
        var tags = $(".experience");
    
        if($(tags).position().top < pageBottom){
            $(tags).addClass("visible");
        }
    });

    var elem = document.querySelector('.main-carousel');


});


function mobileMenu(){
    var nav = document.getElementById("nav");
    var menu = document.getElementById("mainMenu");
    if (nav.className === "menu-nav"){
        nav.className += " responsive";
        menu.className += " responsive";
    } else {
        nav.className ="menu-nav";
        menu.className="menu";
    }
}