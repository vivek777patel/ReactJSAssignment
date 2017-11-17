import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Board from '../jsx/Board.jsx';
import Message from '../jsx/Message.jsx'
import MyProfile from '../jsx/MyProfile.jsx'

const AllContent = () => (
  <Router>
    <div className="three-1">
    <div id="app" className="three-middle">
      <Route exact path="/" component={Board}/>
      <Route path="/message" component={Message}/>
      <Route path="/profile" component={MyProfile}/>
    </div>
    <div className="sideBar">
      <div className="sideBar-1">

      <nav className="vertical-menu middleDivs">
          <ul className="navULClass">
            <li>
               <Link to="/">
                <span><img className="menu-icons" src="resources/images/icons/home.ico"/></span>
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link to="/message">
                <span><img className="menu-icons" src="resources/images/icons/message.ico"/></span>
                <span>Messages</span>
              </Link>
            </li>
            <li>
              <Link to="/profile">
                <span><img className="menu-icons" src="resources/images/icons/my-profile.ico"/></span>
                <span>My Profiles</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="sideBar-2"></div>
      </div>
    </div>
  </Router>
)


export default AllContent
