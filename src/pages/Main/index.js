import React from "react";
import { Hero, MainContent } from "./style";
import { AiOutlineRight } from "react-icons/ai";

const Main = () => {
  return (
    <Hero>
      <MainContent>
        <div className="main-content">
          <h1>Acces nelimitat la filme, seriale și multe altele.</h1>
          <h2>Vizionează oriunde. Anulează oricând.</h2>
          <h3>
            Ești gata de vizionare? Introdu adresa de e-mail pentru a te abona
            sau pentru a reactiva abonamentul.
          </h3>
        </div>
        <div className="sub-content">
          <input type="text" placeholder="Adresa de email" />
          <div className="button">
            <button>
              ÎNCEPE
              <AiOutlineRight />
            </button>
          </div>
        </div>
      </MainContent>
    </Hero>
  );
};

export default Main;
