import styled from "styled-components";

export const Hero = styled.div`
  width: 100%;
  height: 784.8px;
  position: absolute;
  background: url("https://assets.nflxext.com/ffe/siteui/vlv3/9ec8d211-6a2a-460d-9b68-5d6bb1c57ee0/03d3634b-3574-4b31-83d5-db90629cad13/RO-ro-20201228-popsignuptwoweeks-perspective_alpha_website_small.jpg")
    no-repeat center center/cover;
  top: 0;
  border-bottom: 8px solid #222;
  z-index: 2;
  ::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgb(0 0 0 / 40%);
    background-image: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.8) 0,
      rgba(0, 0, 0, 0) 69%,
      rgba(0, 0, 0, 0) 40%,
      rgb(0 0 0 / 100%) 106%
    );
  }

  @media (max-width: 549px) {
    height: 588.6px;
  }
  @media (max-width: 499px) {
    height: 833.85px;
  }
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  align-items: center;
  text-align: center;
  .main-content {
    padding-top: 4rem;
    color: #fff;
    z-index: 99999999;
    @media (max-width: 499px) {
      padding: 0;
    }
    > h1 {
      font-size: 64px;
      max-width: 800px;
      font-weight: 500;
      line-height: 74px;
      padding-bottom: 1.5rem;
      @media (max-width: 1450px) {
        font-size: 50px;
        max-width: 700px;
        margin: 0 auto;
      }
      @media (max-width: 549px) {
        font-size: 28px;
        width: 500px;
        line-height: 35px;
      }

      @media (max-width: 499px) {
        min-width: 48px;
        width: 100%;
      }
    }
    > h2 {
      font-weight: 400;
      font-size: 26px;
      padding-bottom: 1.5rem;
      @media (max-width: 549px) {
        font-size: 18px;
      }
    }
    > h3 {
      max-width: 800px;
      padding-bottom: 20px;
      font-size: 1.2rem;
      font-weight: 400;
      font-size: 19px;
      @media (max-width: 950px) {
        max-width: 450px;
        margin: 0 auto;
        color: #fff;
        font-size: 23px;
      }
      @media (max-width: 740px) {
        font-size: 18px;
        font-weight: 400;
      }
      @media (max-width: 549px) {
        font-size: 18px;
        max-width: 350px;
      }
    }
  }
  .sub-content {
    display: flex;
    flex-direction: row;
    z-index: 99999;
    @media (max-width: 950px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding-top: 2rem;
    }
    @media (max-width: 1450px) {
      height: 60px;
    }
    input {
      padding: 0 1rem;
      width: 100%;
      min-width: 500px;
      height: 70px;
      @media (max-width: 950px) {
        margin-bottom: 1rem;
      }
      @media (max-width: 1450px) {
        height: 60px;
      }
      @media (max-width: 540px) {
        width: 100%;
        min-width: 415px;
      }
      @media (max-width: 499px) {
        min-width: 48px;
        width: 100%;
      }
    }
    input[type="text"] {
      color: red;
      padding: 1rem;
      font-size: 16px;
      color: #8c8c8c;
      font-weight: 400;
    }

    button {
      padding: 1rem 1.7rem;
      font-size: 30px;
      height: 100%;
      background-color: #f41611;
      color: #fff;
      margin-left: 1px;
      font-weight: 400;
      display: flex;
      align-items: center;
      letter-spacing: 3px;
      @media (max-width: 950px) {
        font-size: 1rem;
        min-height: 40px;
        padding: 0.5rem 0.7rem;
      }
      > svg {
        font-size: 15px;
      }
    }
  }
`;

export const WatchMenu = styled.div`
  border-bottom: 8px solid #222;
  padding: 50px 45px;

  .right-cont {
    justify-content: center;
    position: relative;
    display: flex;
    align-items: center;
    position: relative;
    .video {
      top: -70px;
      position: absolute;
      height: 100%;
      width: 63%;
      z-index: -2;
      @media (max-width: 1100px) {
        top: -55px;
      }
      @media (max-width: 491px) {
        top: -35px;
      }
    }
    video {
      top: -13px;
      position: absolute;
      height: 100%;
      width: 74%;
      z-index: -2;
    }
  }
  .download-cont {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 3rem;

    @media (max-width: 950px) {
      justify-content: center;
      align-items: center;
      text-align: center;
      grid-template-columns: inherit;
      grid-gap: 0;
    }
  }
  img {
    width: 100%;
    height: auto;
    border: 0;
  }

  .left-cont {
    color: #fff;
    display: flex;
    justify-content: center;
    flex-direction: column;
    position: relative;
    overflow: hidden;
    .vizioneaza {
      font-size: 24px;
    }
    h1 {
      font-size: 3.125rem;
      line-height: 1.1;
      margin-bottom: 1rem;
      @media (max-width: 950px) {
        font-size: 40px;
      }
      @media (max-width: 549px) {
        font-size: 1.625rem;
      }
    }
    h2 {
      font-size: 26px;
      font-weight: 400;
      max-width: 600px;
      @media (max-width: 950px) {
        font-size: 1.25rem;
      }
      @media (max-width: 549px) {
        font-size: 1.125rem;
      }
    }
  }
`;

export const Wrapper = styled.div`
  max-width: 1100px;
  display: grid;
  margin: 0 auto;
  width: 100%;
`;

export const DownloadMenu = styled.div`
  padding: 50px 45px;
  border-bottom: 8px solid #222;
  width: 100%;
  @media (max-width: 550px) {
    height: 100%;
    padding: 50px 0;
  }

  @media (max-width: 470px) {
    height: 80vh;
  }

  .new-cont {
    display: grid;
    grid-template-columns: 1fr 1fr;
    @media (max-width: 950px) {
      display: flex;
      flex-direction: column-reverse;
      justify-content: center;
      align-items: center;
      text-align: center;
    }
    img {
      height: 100%;
      margin: -5rem;
      margin-top: 0rem;
      @media (max-width: 550px) {
        width: 100%;
        height: auto;
      }
    }
    .download-right {
      color: #fff;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      > h1 {
        font-size: 50px;
        font-weight: 700;
        line-height: normal;
        margin-bottom: 1rem;
        @media (max-width: 950px) {
          font-size: 40px;
        }
        @media (max-width: 550px) {
          font-size: 26px;
        }
      }

      > h2 {
        font-size: 26px;
        font-weight: normal;
        line-height: normal;
        @media (max-width: 950px) {
          font-size: 20px;
        }
        @media (max-width: 550px) {
          font-size: 18px;
        }
      }
    }
    .card {
      background-color: #000;
      position: absolute;
      width: 100%;
      transform: translate(5%, -50%);
      max-width: 340px;
      border: 2px solid #1f1f1f;
      border-radius: 10px;
      @media (max-width: 950px) {
        transform: translate(20%, -50%);
      }

      @media (max-width: 480px) {
        display: none;
      }
      span {
        font-size: 16px;
        font-weight: 700;
      }
      p {
        font-weight: 400;
        font-size: 14px;
        color: #0071eb;
      }
      .card-contents {
        padding: -2rem;
        top: -1px;
        right: -9px;
        position: relative;
        display: flex;
        .card-image {
          padding-right: 3.5rem;
          position: absolute;
        }
        .card-text {
          padding: 2rem 5rem;
          color: #fff;

          ::after {
            content: "";
            width: 3em;
            height: 3em;
            outline: 2px solid #000;
            outline-offset: -2px;
            display: block;
            background: url("https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif")
              center center no-repeat;
            right: 0;
            transform: translate(-40%, -80%);
            background-size: 100%;
            position: absolute;
          }
        }
      }
      img {
        position: absolute;
        transform: translate(150%, 10%);
        height: 80px;
      }
    }
  }
`;

export const Questions = styled.div`
  border-bottom: 8px solid #222;

  .questions-container {
    display: flex;
    justify-content: center;
    text-align: center;
    flex-direction: column;
    color: #fff;
  }
  .intrebari {
    padding-top: 50px;
    color: #fff;
    font-weight: 700;
    font-size: 50px;
  }
  .bottom {
    padding-top: 3rem;
    width: 75%;
    margin: 0 auto;

    span {
      font-size: 19px;
      color: #fff;
      font-weight: 400;
      width: 100%;
      max-width: 50px;
    }
  }
  .sub {
    height: 100%;
    padding-top: 1rem;
    display: flex;
    flex-direction: row;
    width: 100%;
    max-width: 686px;
    margin: 0 auto;
    padding-bottom: 2rem;

    @media (max-width: 950px) {
      display: flex;
      flex-direction: column;
    }
    input {
      padding: 0 1rem;
      width: 100%;
      min-width: 500px;
      height: 70px;
      @media (max-width: 950px) {
        margin-bottom: 1rem;
      }
      @media (max-width: 1450px) {
        height: 60px;
      }
      @media (max-width: 540px) {
        width: 100%;
        min-width: 415px;
      }
      @media (max-width: 499px) {
        min-width: 48px;
        width: 100%;
      }
      @media (max-width: 800px) {
        width: 50%;
        margin: 0 auto;
        margin-bottom: 1rem;
      }
    }

    input[type="text"] {
      color: red;
      padding: 1rem;
      font-size: 16px;
      color: #8c8c8c;
      font-weight: 400;
    }

    button {
      padding: 0 1.7rem;
      font-size: 30px;
      height: 100%;
      background-color: #f41611;
      color: #fff;
      margin-left: 1px;
      font-weight: 400;
      display: flex;
      align-items: center;
      letter-spacing: 3px;
      @media (max-width: 950px) {
        font-size: 1rem;
        min-height: 40px;
        padding: 0.3rem 0.5rem;
        max-width: 100px;
        width: 100%;
        height: 15%;
        margin: 0 auto;
        border-radius: 3px;
      }

      > svg {
        font-size: 15px;
      }
    }
  }
`;
