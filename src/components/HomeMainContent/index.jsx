import React from "react";
import "./styles.css";

export function HomeMainContent() {
  return (
    <div className="main-container">
      <div>
        <h2>Nowadays</h2>
        <div className="title-with-div"></div>
      </div>
      <p className="resume">
        Hi, my name is Lucas Tassi. Currently studying full-stack development
        and System Analysis and Development, working with Laravel and React
        Native. Passionate about UI/UX and the programming world. I had the
        opportunity to develop some projects recently, since I started to study
        and work with front-end. Check it out!
      </p>
      <div className="button-container">
        <h3>
          <a href="/dev" className="checkit">
            Check it out!
          </a>
        </h3>
      </div>
    </div>
  );
}
