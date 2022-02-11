import React from "react";
import "./styles.css";

export function Nav() {
  return (
    <div className="container">
      <div className="first-nav-items">
        <p>logo</p>
        <a href="/dev" className="nav-opt">
          Dev
        </a>
        <a href="/dev" className="nav-opt">
          Design
        </a>
        <a href="https://opensea.io/collection/paradox-ghosts" target="_blank">
          NFT
        </a>
      </div>
      <div className="second-nav-items">
        <div className="media-box1"></div>
        <div className="media-box2"></div>
        <div className="media-box3"></div>
      </div>
    </div>
  );
}
