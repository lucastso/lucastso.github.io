import React from "react";
import { HeaderProfile } from "../../components/HeaderProfile";
import { HomeMainContent } from "../../components/HomeMainContent";
import { Nav } from "../../components/Nav";
import "./styles.css";

export function Home() {
  document.title = "Lucas Tassi > Home";

  return (
    <div>
      <Nav />
      <div className="container2">
        <div className="resume-container">
          <p>
            Hi, my name is Lucas Tassi. I'm a front-end and React Native
            developer.
          </p>
        </div>
      </div>
      <HeaderProfile />
      <HomeMainContent />
    </div>
  );
}
