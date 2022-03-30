import React from "react";

export default function header() {
  return (
    <div>
      <div className="top">
        <i className="uil uil-bars sidebar-toggle"></i>

        <div className="search-box">
          <i className="uil uil-search"></i>
          <input type="text" placeholder="Search here..." />
        </div>

        <img src="images/profile.jpg" alt="" />
      </div>
    </div>
  );
}
