import styled from "styled-components";

export const Hero = styled.div`
  width: 100%;
  height: 80vh;
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
    height: 60vh;
  }
  @media (max-width: 499px) {
    height: 85vh;
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
      padding: 0 9rem 0 0;
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
  }
`;
