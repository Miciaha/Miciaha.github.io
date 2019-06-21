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