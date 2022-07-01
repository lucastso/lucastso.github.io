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
              <span className="work-date">atualmente</span>
              <img src={pin} alt="" />
            </div>

            <p className="work-desc">Uma plataforma de cursos organizados por mim. A ideia da aplicação é oferecer uma variedade de cursos voltados principalmente para o desenvolvimento front-end e UI.</p>

            <div className="work-second-desc">
              <div className="work-second-desc-line">
                <span className="work-second-desc-badge">WEBSITE</span>
                <p>Em progresso</p>
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
              <span className="work-date">ago/21</span>
              <span>-</span>
              <span className="work-date">atualmente</span>
            </div>

            <p className="work-desc">Com a visão de estar presente no dia-a-dia das instituições e pessoas comprometidas com a melhoria da educação básica do Brasil, o QEdu da vida aos dados para promover melhores escolhas na educação. A nova apresentação do portal ficou mais fácil de navegar e responsiva para celulares. Mas não só isso.</p>

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
              <span className="work-date">maio/22</span>
              <span>-</span>
              <span className="work-date">atualmente</span>
            </div>

            <p className="work-desc">Website extremamente moderno para uma loja de móveis. O layout, as cores e a experiència da aplicação deveriam estar sincronizados com a identidade visual do negócio. Todas as espectativas foram atingidas.</p>

            <div className="work-second-desc">
              <div className="work-second-desc-line">
                <span className="work-second-desc-badge">WEBSITE</span>
                <a href="http://cumarumoveis.com.br/" target="_blank" className="work-link">http://cumarumoveis.com.br/</a>
              </div>
              <div className="work-second-desc-line">
                <span className="work-second-desc-badge">STACK</span>
                <p>Next.js / React</p>
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

            <p className="work-desc">Processo de redesign de uma intranet para as plataformas web e mobile, para Android, iOS e Desktop. A solução deveria ser simples e, logicamente, resolver o problema. A aplicação conta com uma tela de login, um feed, uma seção de album e fotos, eventos e lojas parceiras do cliente. A aplicação foi perfeitamente implementada.</p>

            <div className="work-second-desc">
              <div className="work-second-desc-line">
                <span className="work-second-desc-badge">WEBSITE</span>
                <p>Disponível para internos da organização</p>
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
