import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

export function Nav() {
  const navigate = useNavigate();
  const navigateFun = (route) => {
    navigate(route);
  };

  return (
    <div className="container">
      <div className="first-nav-items">
        <p>logo</p>
        <p onClick={navigateFun("/dev")} className="nav-opt">
          Dev
        </p>
        <p onClick={navigateFun("/dev")} className="nav-opt">
          Design
        </p>
        <a href="#">NFT</a>
      </div>
      <div className="second-nav-items">
        <div className="media-box1"></div>
        <div className="media-box2"></div>
        <div className="media-box3"></div>
      </div>
    </div>
  );
}
