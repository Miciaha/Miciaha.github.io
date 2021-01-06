import React from "react";
import ScrollMagic from '../ScrollMagic';
import gsap from 'gsap';


class Menu extends React.Component {
  componentDidMount(){
    var navTween = gsap.to("nav", 0.5, {right: "0", backgroundColor: "transparent"});
    var expNav = gsap.to(".expMenu", 0.2, {opacity:"0", display:"none"})

    var controller = new ScrollMagic.Controller();
    var item = "#experience";
    new ScrollMagic.Scene({triggerElement:item})
      .setTween(navTween) 
      .addTo(controller);

    new ScrollMagic.Scene({triggerElement: item})
      .setTween(expNav)
      .addTo(controller);
  }
  render() {
    return (
      <div>
        <div class="logo animated fadeIn">
          <a class="menuItem" href="#home">
          <img src="images/logo.svg" alt="Miciaha Logo" />
          </a>
        </div>
        <div id="navigation-bar">
          <nav class="animated slideInLeft">
            <div>
              <ul id="menu">
                 <li class="menuItem expMenu">
                  <a class="menuItem proMenu" href="#experience">
                    Experience
                  </a>
                </li>
                <li>
                  <a class="menuItem proMenu" href="#projects">
                    Projects
                  </a>
                </li> 
                <li>
                  <a
                    class="menuItem"
                    href="https://www.linkedin.com/in/miciaha/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i class="fab fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a
                    class="menuItem"
                    href="https://github.com/Miciaha"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i class="fab fa-github"></i>
                  </a>
                </li>
                <li>
                  <a
                    class="menuItem"
                    href="#home"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i class="fab fa-rebel"></i>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

export default Menu;
