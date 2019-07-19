$(document).ready(function(){
    console.log("ready");
    


    setTimeout(function(){
        $("#hello-text").fadeIn(1000);
    },500);
    setTimeout(function(){
        $("#hello-text").fadeOut(1000);
    },500);
   // setTimeout(function(){
   //     $("#hello-text").fadeOut(1000);
   // },500);

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

    // var descriptions = document.getElementsByClassName("words");
    // var i =0;

    //     function RollScript(){
    //         setTimeout(function(){
    //             var word = descriptions[i];
    //             console.log(word);
    //             $(word).addClass('animated');
    //             $(word).addClass('slideInUp');
    //             $(word).fadeIn(800);

    //             if(i < descriptions.length){
    //                 $(word).fadeOut(1000);
    //                 setTimeout(RollScript(),300);
    //             } else{
    //                 $(".words").fadeIn(900);
    //                 $("#hello").fadeIn(900);
    //                 $(".bwords").fadeIn(900);
    //                 $("#hello-text").fadeOut(900);
    //                 $("#name-text").fadeIn(900);
    //                 $("#Miciaha").fadeIn(900);
    //                 $("#aboutSection").fadeIn(1000);
    //                 setTimeout(function(){
    //                     $("#mePicture").fadeIn(1000);
    //                     $(".menu").fadeIn(500);
    //                 },1000);
    //             }
                
    //             i++;
    //         }, 2000)
    //     }
    // RollScript();    

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

/*function changeTheme(){
    $("#business-home").fadeOut();
    $("#home").fadeIn()

    var exp = document.getElementById("experience");
    var pro = document.getElementById("projects");
    var cont = document.getElementById("contact");

    exp.className ="section-exp";
    pro.className ="section-pro";
    cont.className="section-connect";
}
*/