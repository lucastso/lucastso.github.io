import React from "react";
import { useNavigate } from "react-router-dom";
import { Nav } from "../../components/Nav";
import "./styles.css";

export function Dev() {
  document.title = "Lucas Tassi > Dev";

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };

  return (
    <div>
      <Nav />
      <div className="container2">
        <div className="figure-container">
          <p>projects</p>
        </div>
      </div>
    </div>
  );
}
