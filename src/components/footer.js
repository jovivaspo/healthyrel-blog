/*MODULES*/
import React from "react";
import { Link } from "gatsby";

/*COMPONENTS*/
import Logo from "./logo";
/*CSS*/
import "../assets/css/footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-first-container">
        <Logo />
        <div className="footer-first-menu">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-second-menu">
        <ul>
          <li>
            <Link to="/policy-privacy">Privacy Policy</Link>
          </li>
          <li>
            <Link to="/legal-notice">Legal Notice</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
