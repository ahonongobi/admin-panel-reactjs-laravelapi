import React from "react";
import {useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import Logo from "../Images/logo.jpg";
toast.configure();

export default function () {
  let  navigate = useNavigate();
  const logout = () => {
    
    localStorage.clear()
    //setIsLoggedin(false);
   // window.location.href = "/login";
   
   navigate("/login");
    toast.success("Logout Successfully");
  };
  
  return (
    <div>
      <nav>
        <div className="logo-name">
          <div className="logo-image">
            
          </div>

          <span className="logo_name"><img src={Logo} width="100" height="80" alt="logo" /></span>
        </div>

        <div className="menu-items">
          <ul className="nav-links">
            <li>
              <Link to={'/'}>
                <i className="uil uil-estate"></i>
                <span className="link-name">Dahsboard</span>
              </Link>
            </li>
            <li>
              <Link to="/add">
                <i className="uil uil-user-arrows"></i>
                <span className="link-name">Users</span>
              </Link>
            </li>
            <li>
              <a href="#">
                <i className="uil uil-chart"></i>
                <span className="link-name">Analytics</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="uil uil-laptop-cloud"></i>
                <span className="link-name">Online course</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="uil uil-comments"></i>
                <span className="link-name">Message</span>
              </a>
            </li>
            <li>
              <Link to={'parents'}>
                <i className="uil uil-user"></i>
                <span className="link-user">Parent</span>
              </Link>
            </li>
            <li>
              <a href="#">
                <i className="uil uil-users-alt"></i>
                <span className="link-name">Teachers</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="uil uil-book-reader"></i>
                <span className="link-name">Students</span>
              </a>
            </li>

            <li>
              <a href="#">
                <i className="uil uil-moneybag"></i>
                <span className="link-name">Office accounting</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="uil uil-bell"></i>
                <span className="link-name">Notify Students</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="uil uil-video"></i>
                <span className="link-name">Zoom Meetings </span>
              </a>
            </li> 
            <li>
              <a href="#">
                <i className="uil uil-file-graph"></i>
                <span className="link-name">Report card</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="uil uil-share"></i>
                <span className="link-name">Repport</span>
              </a>
            </li>
          </ul>

          <ul className="logout-mode">
            <li>
              <a onClickCapture={logout}>
                <i className="uil uil-signout"></i>
                <span className="link-name">Logout</span>
              </a>
            </li>

            <li className="mode">
              <a href="#">
                <i className="uil uil-moon"></i>
                <span className="link-name">Dark Mode</span>
              </a>

              <div className="mode-toggle">
                <span className="switch"></span>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
