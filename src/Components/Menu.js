import React from "react";
import { Link, animateScroll as scroll} from 'react-scroll';

class Menu extends React.Component {
  render() {
    return (
      <div>
        <div class="logo animated fadeIn">
          <Link
                    to="home"
                    smooth={true}
                    duration={500}
                    >
                    <img src="images/logo.svg" alt="Miciaha Logo"/>             
                    </Link>
            
        </div>
        <div id="navigation-bar">
          <nav class="animated slideInLeft">
            <div>
              <ul id="menu">
                <li class="menuItem expMenu">
                    <Link
                    to="experience"
                    smooth={true}
                    duration={200}
                    spy={true}
                    >                
                    Experience
                    </Link>
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
                    rel ="noopener noreferrer"
                  >
                    <i class="fab fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a
                    class="menuItem"
                    href="https://github.com/Miciaha"
                    target="_blank"
                    rel ="noopener noreferrer"
                  >
                    <i class="fab fa-github"></i>
                  </a>
                </li>
                <li>
                  <a
                    class="menuItem"
                    href="#home"
                    target="_blank"
                    rel ="noopener noreferrer"
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