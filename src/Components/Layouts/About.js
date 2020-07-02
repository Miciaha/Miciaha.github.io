import React from "react";
import ScrollMagic from "../../ScrollMagic";
import gsap from "gsap";

class About extends React.Component {
  componentDidMount() {

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
    //   right: "10%",
    //   height: "50px",
    //   width: "50px",
    //   borderRadius: "50%",
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
  render() {
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
        <div id="home" class="section real scrollify">
          <div class="home">
            <div class="greeting">
              <h1 id="hello-text" class="animated slideInUp">
                Hello!
              </h1>
            </div>
            <div id="intro" class="animated fadeIn">
              <h1>
                I am a <span id="rainbow">Software Developer </span>with a focus
                on the web. I have experience with{" "}
                <span id="rainbow">JavaScript, C#, Python, and Java</span>. I
                look forward to joining a{" "}
                <span id="rainbow">forward thinking</span> team with a{" "}
                <span id="rainbow">growth minded </span>philosophy.
              </h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
