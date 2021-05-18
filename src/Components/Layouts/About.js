import React from "react";
import ScrollMagic from "../../ScrollMagic";
import gsap from "gsap";

class About extends React.Component {
  componentDidMount(){
    var textNav = gsap.to(".intro", 0.5, {
      bottom: "-300px",
    });
     var controller = new ScrollMagic.Controller();
     var item = "#experience";
      
     new ScrollMagic.Scene({triggerElement: item})
       .setTween(textNav)
       .addTo(controller);
  }
  render() {
    return (
      <div>        
        <div id="home" class="section scrollify">
        <ul class="background">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
          <div class="home">
            <div class="greeting">
              <h1 id="hello-text" class="animated slideInUp">
                Hello!
              </h1>
            </div>            
            <div id="intro" class="animated fadeIn intro">
                <h1>I am a <span id="rainbow">Software Developer </span>with a passion for people, problem-solving, programming, and alliteration.</h1>
                <h3>Learning: VueJS, Django, PostgreSQL, GraphQL</h3>
                <h3>Languages: JavaScript, <strike>Parseltongue</strike> Python, C#</h3>
            </div> 
          </div>
        </div>
      </div>
    );
  }
}

export default About;
