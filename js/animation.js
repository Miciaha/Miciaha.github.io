
// Primary controller
var controller = new ScrollMagic.Controller();


/* EXPERIENCE TRIGGERS - This kinda cracks me up, ngl
========================================================================*/
/* CONTENT 
============================================================*/


/* MENU TWEENS
============================================================*/
var navTween = TweenMax.to("nav", 0.5, {right: "0", backgroundColor: "transparent"});
var expNav = TweenMax.to(".expMenu", 0.2, {opacity:"0", display:"none"})
new ScrollMagic.Scene({
                triggerElement: "#experience"
})
.setTween(navTween)
.addTo(controller);

new ScrollMagic.Scene({
    triggerElement: "#experience"
})
.setTween(expNav)
.addTo(controller);


/*SECTION CARD TWEENS
============================================================*/

var aboutImage = TweenMax.to(".about-image", 0.5, {bottom: "-300px", opacity: "0", display:"none"});
var aboutTitle = TweenMax.to(".about-title", 0.5, {bottom: "-300px", opacity: "0", display:"none"});


new ScrollMagic.Scene({
                triggerElement: "#experience"
})
.setTween(aboutImage)
.addTo(controller);

new ScrollMagic.Scene({
    triggerElement: "#experience"
})
.setTween(aboutTitle)
.addTo(controller);


var cardExperience = TweenMax.to(".section-card", 0.5, {bottom:"2%", right:"5%",height:"2px", width:"90%", backgroundColor:"white"});
var cardExpContent = TweenMax.to(".section-card .experience", 0.5, {display:"block"})

new ScrollMagic.Scene({
    triggerElement: "#experience"
})
.setTween(cardExperience)
.addIndicators()
.addTo(controller);
new ScrollMagic.Scene({
    triggerElement: "#experience"
})
.setTween(cardExpContent)
.addTo(controller);
 


/*CONTENT TWEENS

This section is going to be EXTREMELY messy for a wee bit...
But the cool thing is that I'm making my own carousel... eat your heart out owlcarousel
and flickity
============================================================*/

var expTitle = TweenMax.to(".exp-header",2, {opacity: "1"});

new ScrollMagic.Scene({
    triggerElement: "#experience"
})
.setTween(expTitle)
.addIndicators()
.addTo(controller);


//Experience horizontal controller
var expController = new ScrollMagic.Controller({container:".exp-content",vertical: false});


// var cardNext = new ScrollMagic.Scene({
//     triggerHook: "onEnter"
// })
// .setClassToggle(".card", "next")
// .addIndicators()
// .addTo(expController);

//May be more effective to find a way to make a function that simply plugs in the class name that I need for each section.
//Would be much more efficient than typing all these up by hand...
//But, for now, content over code quality ¯\_(ツ)_/¯ 

var cardDeck = document.getElementsByClassName("card-holder");
var properChannel = cardDeck[0].getElementsByClassName("properChannel")[0];
var vrSystems = cardDeck[0].getElementsByClassName("vrSystems")[0];
var ccw = cardDeck[0].getElementsByClassName("codecraftWorks")[0];
var cot = cardDeck[0].getElementsByClassName("city")[0];


const cardWidth = cardDeck[0].getElementsByClassName("properChannel").namedItem("#properChannel").clientWidth -150;

console.log(cardDeck[0].getElementsByClassName("properChannel").namedItem("#properChannel").clientWidth);

//console.log(cardWidth1, cardWidth2, cardWidth3, cardWidth4);

var pc = new ScrollMagic.Scene({
    triggerHook: 0.2,
    //duration: cardWidth,
    triggerElement: ".exp-content"
})
.setClassToggle(".properChannel", "selected")
.addIndicators({name: "First card selected"})
.addTo(expController);

var pc2 = new ScrollMagic.Scene({
    triggerHook: 0.35,
    duration: cardWidth,
    triggerElement: properChannel
})
.setClassToggle(".vrSystems", "next")
//.addIndicators({name: "Second card next in line"})
.addTo(expController);


var pcToVr = new ScrollMagic.Scene({
    triggerHook: 0.35,
    //duration: cardWidth,
    triggerElement: vrSystems
})
.setClassToggle(".properChannel", "next")
//.addIndicators({name: "First card next in line"})
.addTo(expController);

var pcToVr2 = new ScrollMagic.Scene({
    triggerHook: 0.35,
    duration: cardWidth,
    triggerElement: vrSystems
})
.setClassToggle(".vrSystems", "selected")
.addIndicators({name: "Second card selected"})
.addTo(expController);

var pcToVr3 = new ScrollMagic.Scene({
    triggerHook: 0.35,
    duration: cardWidth,
    triggerElement: vrSystems
})
.setClassToggle(".codecraftWorks", "next")
//.addIndicators({name: "third card next"})
.addTo(expController);

var vrToCcw = new ScrollMagic.Scene({
    triggerHook: 0.35,
    //duration: cardWidth,
    triggerElement: ccw
})
.setClassToggle(".codecraftWorks", "selected")
.addIndicators({name: "third card selected"})
.addTo(expController);

var vrToCcw2 = new ScrollMagic.Scene({
    triggerHook: 0.35,
    //duration: cardWidth,
    triggerElement: ccw
})
.setClassToggle(".vrSystems", "next")
//.addIndicators({name: "second card next"})
.addTo(expController);

var vrtoCcw3 = new ScrollMagic.Scene({
    triggerHook: 0.35,
    duration: cardWidth,
    triggerElement: ccw
})
.setClassToggle(".city", "next")
.addIndicators({name: "fourth card next"})
.addTo(expController);

var ccwToCity1 = new ScrollMagic.Scene({
    triggerHook: 0.35,
    //duration: cardWidth,
    triggerElement: cot
})
.setClassToggle(".city", "selected")
.addIndicators({name: "fourth card selected"})
.addTo(expController);

var ccwToCity2 = new ScrollMagic.Scene({
    triggerHook: 0.35,
    duration: cardWidth,
    triggerElement: cot
})
.setClassToggle(".codecraftWorks", "next")
//.addIndicators({name: "third card next"})
.addTo(expController);


// var cardView = new ScrollMagic.Scene({
//     triggerHook: 0.35,
//     triggerElement: vrSystems
// })
// .setClassToggle(".vrSystems", "next")
// .addIndicators()
// .addTo(expController);

$('.next').hover(
    function(){ $(this).addClass('selected') },
    function(){ $(this).removeClass('selected') }
)

