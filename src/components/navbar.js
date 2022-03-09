//import React from "react";

const Navbar = () => {
  return (
    <nav>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      ></link>
      <div className="navbar">
        <a className="links" href="#">
          <i className="fa fa-fw fa-user"></i> About Me
        </a>
        <a className="links" href="#">
          <i className="fa fa-fw fa-folder"></i> Portfolio
        </a>
        <a className="links" href="#">
          <i className="fa fa-fw fa-envelope"></i> Contact Me
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
