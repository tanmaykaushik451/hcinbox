import React, { useState } from 'react'
import "./Sidebar.css"

const Sidebar = (props) => {

    const {open} = props;

    const [active,setActive] = useState(!open || true)

    const act = !open;


    return (
          <nav id="sidebar" className={act ? "active" : null}>
        <div class="sidebar-header">
          <h3>Bootstrap Sidebar</h3>
        </div>

        <ul class="list-unstyled components">
          <p>Dummy Heading</p>
          <li class="active">
            <a
              href="#homeSubmenu"
              data-toggle="collapse"
              aria-expanded="false"
              class="dropdown-toggle"
            >
              Home
            </a>
            <ul class="collapse list-unstyled" id="homeSubmenu">
              <li>
                {/* <link to="/">Home</link> */}
              </li>
              <li>
                {/* <Link to="/about">About</Link> */}
              </li>
              <li>
                {/* <Link to="/topics">Topics</Link> */}
              </li>
            </ul>
          </li>
          <li>
          </li>
          <li>
           
          </li>
          <li>
            <a href="#">Portfolio</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    )
}

export default Sidebar
