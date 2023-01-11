import React from "react";
import "./Footer.scss";
import { GIT } from "../../assets/images";

function Footer() {
  return (
    <div className="footer-main" id="footerComp">
      <p>&copy;&nbsp;Carl Moodie 2023</p>
      <div className="footer-links">
        <a
          href="https://github.com/moods-1"
          rel="noreferrer noopener"
          target="_blank"
        >
          <img src={GIT} alt="git" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
