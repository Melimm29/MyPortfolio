const Footer = () => {
  return (
    <footer>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      ></link>
      <div className="footer-container">
        <div id="linkdiv">
          <a className="email">melissamolina.dev</a>
        </div>
        <div id="linkdiv">
          <a className="f_links" href="#">
            <i className="fa fa-fw fa-user"></i> About Me
          </a>
          <a className="f_links" href="#">
            <i className="fa fa-fw fa-folder"></i> Portfolio
          </a>
          <a className="f_links" href="#">
            <i className="fa fa-fw fa-envelope"></i> Contact Me
          </a>
        </div>
        <div className="copyrigth">
          &copy;2022 Melissa Molina. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
