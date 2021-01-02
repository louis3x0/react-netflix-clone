import React from "react";
import {
  WatchMenu,
  Hero,
  MainContent,
  Wrapper,
  DownloadMenu,
  Questions,
} from "./style";
import { AiOutlineRight } from "react-icons/ai";
import TV from "../../assets/tv.png";
import Mobile from "../../assets/mobile-0819.jpg";
import Boxshot from "../../assets/boxshot.png";
import Accordion from "../../components/Accordion/Accordion";

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
      <WatchMenu>
        <Wrapper>
          <div className="download-cont">
            <div className="left-cont">
              <h1 className="h1">Vizionare pe TV.</h1>
              <h2>
                Vizionează pe Smart TV, Playstation, Xbox, Chromecast, Apple TV,
                playere Blu-ray și altele.
              </h2>
            </div>
            <div className="right-cont">
              <img src={TV} alt="" srcset="" />
              <video
                autoPlay
                playsInline
                muted
                loop
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
              ></video>
            </div>
          </div>
        </Wrapper>
      </WatchMenu>
      <DownloadMenu>
        <Wrapper>
          <div className="new-cont">
            <div className="download-left">
              <img src={Mobile} alt="" srcset="" />
              <div className="card">
                <div className="card-contents">
                  <div className="card-image">
                    <img src={Boxshot} alt="" />
                  </div>
                  <div className="card-text">
                    <span>Stranger Things</span>
                    <p>Descărcare în curs...</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="download-right">
              <h1 className="h1">
                Descarcă serialele preferate pentru a le viziona offline.
              </h1>
              <h2>
                Salvează cu ușurință titlurile preferate și vei avea mereu ceva
                de vizionat.
              </h2>
            </div>
          </div>
        </Wrapper>
      </DownloadMenu>
      <WatchMenu>
        <Wrapper>
          <div className="download-cont">
            <div className="left-cont">
              <h1 className="h1">Vizionează oriunde.</h1>
              <h2 className="vizioneaza">
                Vizionează nelimitat filme și seriale pe telefon, tabletă,
                laptop și televizor, fără alte costuri.
              </h2>
            </div>
            <div className="right-cont">
              <img
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png"
                alt=""
                srcset=""
              />
              <video
                autoPlay
                playsInline
                muted
                loop
                className="video"
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v"
              ></video>
            </div>
          </div>
        </Wrapper>
      </WatchMenu>
      <Questions>
        <Wrapper>
          <div className="questions-container">
            <h1 className="intrebari">Întrebări frecvente</h1>
            <Accordion />
            <div className="bottom">
              <span>
                Ești gata de vizionare? Introdu adresa de e-mail pentru a te
                abona sau pentru a reactiva abonamentul.
              </span>
            </div>
            <div className="sub">
              <input type="text" placeholder="Adresa de e-mail" />
              <button>
                ÎNCEPE
                <AiOutlineRight />
              </button>{" "}
            </div>
          </div>
        </Wrapper>
      </Questions>
    </Hero>
  );
};

export default Main;
