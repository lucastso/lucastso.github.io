import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

export function Dev() {
  document.title = "Lucas Tassi > Dev";

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };

  return (
    <div>
      <p>dev</p>
      <button onClick={handleClick} type="button">
        aaaaa
      </button>
    </div>
  );
}
