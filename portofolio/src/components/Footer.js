import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";


function Footer() {
    return (
        <footer className="Links">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <ul className="list-inline">
              <li className="list-inline-item">
                <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://github.com/Vinni99" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faGithub} size="2x" />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="mailto:Zizoocz@gmail.com">
                  <FontAwesomeIcon icon={faEnvelope} size="2x" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
    );
}

export default Footer;