import React from "react";
import ScrollMagic from '../ScrollMagic';
import gsap from 'gsap';


class AccentMenu extends React.Component {
    componentDidMount(){
        // var controller = new ScrollMagic.Controller();

        // var aboutImage = gsap.to(".about-image", 0.5, {
        //   bottom: "-300px",
        //   opacity: "0",
        //   display: "none",
        // });
        // var aboutTitle = gsap.to(".about-title", 0.5, {
        //   bottom: "-300px",
        //   opacity: "0",
        //   display: "none",
        // });
    
        // new ScrollMagic.Scene({
        //   triggerElement: "#experience",
        // })
        //   .setTween(aboutImage)
        //   .addTo(controller);
    
        // new ScrollMagic.Scene({
        //   triggerElement: "#experience",
        // })
        //   .setTween(aboutTitle)
        //   .addTo(controller);
    
        // var cardExperience = gsap.to(".section-card", 0.5, {
        //   bottom: "5%",
        //   right: "50%",
        //   height: "10px",
        //   width: "50px",
        //   backgroundColor: "white",
        // });
        // var cardExpContent = gsap.to(".section-card .experience", 0.5, {
        //   display: "block",
        // });
    
        // new ScrollMagic.Scene({
        //   triggerElement: "#experience",
        // })
        //   .setTween(cardExperience)
        //   .addIndicators()
        //   .addTo(controller);
        // new ScrollMagic.Scene({
        //   triggerElement: "#experience",
        // })
        //   .setTween(cardExpContent)
        //   .addTo(controller);
    }
    render(){
        return (
            <div>
                <div class="section-card animated slideInRight">
                    <div class="about">
                        <div class="about-title">
                        <h1>Hi, I'm Miciaha Ivey</h1>
                        </div>
                        <div class="about-image">
                        <img
                            id="about-image-effect"
                            class="animated slideInUp"
                            src="images/me.png"
                            alt="Miciaha Ivey"
                        />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AccentMenu;