import { Routes, Route } from "react-router-dom";
import { Dev } from "./pages/Dev";
import { Home } from "./pages/Home";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dev" element={<Dev />} />
      </Routes>
    </div>
  );
}

export default App;
