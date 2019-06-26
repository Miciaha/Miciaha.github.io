$(document).ready(function(){
    console.log("ready");


    setTimeout(function(){
        $("#hello-text").fadeIn(1000);
    },500);
    setTimeout(function(){
        $("#me").fadeIn(500);
    },1000);

    var descriptions = document.getElementsByClassName("words");
    var i =0;

        function RollScript(){
            setTimeout(function(){
                var word = descriptions[i];
                console.log(word);
                $(word).fadeIn(800);

                if(i < descriptions.length){
                    $(word).fadeOut(1000);
                    setTimeout(RollScript(),300);
                } else{
                    $(".words").fadeIn(900);
                    $("#hello").fadeIn(900);
                    $(".bwords").fadeIn(900);
                    $("#hello-text").fadeOut(900);
                    $("#Miciaha").fadeIn(900);
                    setTimeout(function(){
                        $("#mePicture").fadeIn(1000);
                    },1000);
                }
                
                i++;
            }, 2000)
        }
    RollScript();    

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

    $('selector').flickity()

    $('.main-carousel').flickity({
        // options
        cellAlign: 'left',
        contain: true
      });

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
