import React from "react";
import "./styles.css";
import github from "../../assets/github.svg";
import insta from "../../assets/insta.svg";
import linkedin from "../../assets/linkedin.svg";

export function Nav() {
  return (
    <div className="container">
      <div className="first-nav-items">
        <p>logo</p>
        <a href="/dev" className="nav-opt">
          Dev
        </a>
        <a href="/design" className="nav-opt">
          Design
        </a>
        <a
          href="https://opensea.io/collection/paradox-ghosts"
          target="_blank"
          rel="noreferrer"
        >
          NFT
        </a>
      </div>
      <div className="second-nav-items">
        <a
          href="https://github.com/lucastso"
          className="media-box1"
          target="_blank"
          rel="noreferrer"
        >
          <img src={github} alt="github icon" />
        </a>
        <a
          href="https://www.instagram.com/lucastassss/"
          className="media-box2"
          target="_blank"
          rel="noreferrer"
        >
          <img src={insta} alt="instagram icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/lucas-tassi-souza-235489161/"
          className="media-box3"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} alt="linkedin icon" />
        </a>
      </div>
    </div>
  );
}
