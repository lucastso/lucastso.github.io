import React from "react";
import { HeaderProfile } from "../../components/HeaderProfile";
import { HomeMainContent } from "../../components/HomeMainContent";
import { Nav } from "../../components/Nav";
import "./styles.css";
import figure from "../../assets/figure1.png";

export function Home() {
  document.title = "Lucas Tassi > Home";

  return (
    <div>
      <Nav />
      <div className="container2">
        <div className="figure-container">
          <img src={figure} width="560" alt="colorful figure" />
        </div>
        <div className="resume-container">
          <p>Hi, my name is Lucas Tassi. I'm a web and mobile developer.</p>
        </div>
      </div>
      <HeaderProfile />
      <HomeMainContent />
    </div>
  );
}
