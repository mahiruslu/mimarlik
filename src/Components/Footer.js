import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faMailBulk } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <div className="footer ">
      <div className="footerLeft">
        <a
          href="https://www.instagram.com/okamimarlik/"
          target="blank"
          className="btn btn-dark"
        >
          <FontAwesomeIcon icon={faInstagram} size="lg" id="faIcon" />
          @okamimarlik
        </a>
        <a href="mailto:info@okamimarlik.com" className="btn btn-dark">
          <FontAwesomeIcon icon={faMailBulk} id="faIcon" />
          info@okamimarlik.com
        </a>
      </div>
      <div className="footerRight">
        <a href="/" target="blank" className="btn btn-dark">
          {" "}
          {/* This site made by <span>Mahir</span> */}
          ©2021, All Rights Reserved. <span>Oka Mimarlık</span>
        </a>
      </div>
    </div>
  );
}

export default Footer;
