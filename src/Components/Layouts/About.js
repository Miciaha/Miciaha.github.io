import React from "react";

class About extends React.Component {
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
