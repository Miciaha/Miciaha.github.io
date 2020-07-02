
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


var cardExperience = TweenMax.to(".section-card", 0.5, {bottom:"5%", right:"10%",height:"50px", width:"50px", borderRadius:"50%"});
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
============================================================*/

var expTitle = TweenMax.to(".exp-header",2, {opacity: "1"});

new ScrollMagic.Scene({
    triggerElement: "#experience"
})
.setTween(expTitle)
.addIndicators()
.addTo(controller);


//Experience horizontal controller
var expController = new ScrollMagic.Controller({vertical: false});

// var wipeAnimation = new TimelineMax()
// 			// animate to second panel		// move back in 3D space
// 			.to(".card", 1,   {x: "-25%"})	// move in to first panel			// move back to origin in 3D space
// 			// animate to third panel
// 			.to(".card", 1,   {x: "-50%"})
// 			// animate to forth panel
// 			.to(".card", 1,   {x: "-75%"})



// var expScene = new ScrollMagic.Scene({
//     triggerElement: ".exp-header",
//     duration: "400%"
// })
// .setTween(wipeAnimation)
// .addIndicators()
// .addTo(controller);

