$(document).ready(function(){
    console.log("ready");


    $("#hello").fadeIn(1000);
    $(".words").fadeIn(1000);
    $(".bwords").fadeIn(3000).delay(800);

});

$(document).on("scroll", function(){
    var pageTop = $(document).scrollTop();
    var pageBottom = pageTop + $(window).height();
    var tags = $(".experience");

    if($(tags).position().top < pageBottom){
        $(tags).addClass("visible");
    }
})





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
