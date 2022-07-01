import React from "react";
import { useNavigate } from "react-router-dom";
import { Nav } from "../../components/Nav";
import "./styles.css";
import pin from "../../assets/pin.svg";
import infoeuro from "../../assets/infoeuro.png";
import woogon from "../../assets/woogon.png";
import cumaru from "../../assets/cumaru.png";
import qedu from "../../assets/qedu.png";

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
        <div className="works-figure-container">
          <div className="work-section">
            <div className="work-title">
              <p className="work-works-keyword">Works {'>'}</p>
              <p className="work-name">Woogon</p>
              <span className="work-date">jun/22</span>
              <span>-</span>
              <span className="work-date">nowadays</span>
              <img src={pin} alt="" />
            </div>

            <p className="work-desc">A course platform organized by me. The idea for the application is to offer a variety of lessons mainly focusing in front-end development and UI.</p>

            <div className="work-second-desc">
              <div className="work-second-desc-line">
                <span className="work-second-desc-badge">WEBSITE</span>
                <p>In progress</p>
              </div>
              <div className="work-second-desc-line">
                <span className="work-second-desc-badge">STACK</span>
                <p>Next.js / React</p>
              </div>
            </div>

            <img src={woogon} alt="woogon picture" className="work-image"/>
          </div>

          {/* qedu */}
          <div className="work-section">

            <div className="work-title">
              <p className="work-works-keyword">Works {'>'}</p>
              <p className="work-name">QEdu</p>
              <span className="work-date">aug/21</span>
              <span>-</span>
              <span className="work-date">nowadays</span>
            </div>

            <p className="work-desc">With the mission and vision of being present on the day-by-day of organizations and people compromised with changing the basic education in Brazil, QEdu gives life to data to promote better choices in education. The new website presentation became easy to experience and navigate. But not just this.</p>

            <div className="work-second-desc">
              <div className="work-second-desc-line">
                <span className="work-second-desc-badge">WEBSITE</span>
                <a href="https://novo.qedu.org.br/" className="work-link" target="_blank">https://novo.qedu.org.br/</a>
              </div>
              <div className="work-second-desc-line">
                <span className="work-second-desc-badge">STACK</span>
                <p>Laravel / Tailwind / MySQL / Alpine.js</p>
              </div>
            </div>

            <img src={qedu} alt="qedu project" className="work-image"/>

          </div>

          {/* cumaru */}
          <div className="work-section">

            <div className="work-title">
              <p className="work-works-keyword">Works {'>'}</p>
              <p className="work-name">Cumaru</p>
              <span className="work-date">may/22</span>
              <span>-</span>
              <span className="work-date">nowadays</span>
            </div>

            <p className="work-desc">An extreme modern website to a furniture shop. The layout, colors and the user experience of the application had to be side by side with the business visual identity. All the expectations were reached.</p>

            <div className="work-second-desc">
              <div className="work-second-desc-line">
                <span className="work-second-desc-badge">WEBSITE</span>
                <a href="https://www.cumarumoveis.com.br/" target="_blank" className="work-link">https://www.cumarumoveis.com.br/</a>
              </div>
              <div className="work-second-desc-line">
                <span className="work-second-desc-badge">STACK</span>
                <p>React</p>
              </div>
            </div>

            <img src={cumaru} alt="cumaru project" className="work-image"/>

          </div>

          {/* infoeuro */}
          <div className="work-section">

            <div className="work-title">
              <p className="work-works-keyword">Works {'>'}</p>
              <p className="work-name">InfoEuro</p>
              <span className="work-date">nov/21</span>
              <span>-</span>
              <span className="work-date">mar/22</span>
            </div>

            <p className="work-desc">The challenge was to redesign and create a intranet to mobile and web platforms, iOS and Android. The solution must had been simple and , logically, solve the problem. The application has a simple login screen, a feed, an albumn section with organizational pictures, events and department stores. We solve it.</p>

            <div className="work-second-desc">
              <div className="work-second-desc-line">
                <span className="work-second-desc-badge">WEBSITE</span>
                <p>Available only to organization members</p>
              </div>
              <div className="work-second-desc-line">
                <span className="work-second-desc-badge">STACK</span>
                <p>React Native / Laravel / MySQL / Alpine.js</p>
              </div>
            </div>

            <img src={infoeuro} alt="infoeuro project" className="work-image"/>

          </div>
        </div>
      </div>
    </div>
  );
}
