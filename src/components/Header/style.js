import styled from "styled-components";

export const NavContainer = styled.nav`
  width: 100%;
  transition: background-color 0.5s;
  position: relative;
  max-width: 1920px;
  margin: 0 auto;
  padding: 22px 50px;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 5rem;
  z-index: 10;

  .container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  @media (max-width: 700px) {
    padding: 0;
  }
`;

export const Button = styled.button`
  background-color: #e50914;
  height: 33px;
  width: 110px;
  color: #fff;
  border-radius: 4px;
  font-weight: 400;
  font-size: 1rem;
  @media (max-width: 700px) {
    margin: 2rem;
    height: 27px;
    font-size: 14px;
    width: 90px;
  }
`;

export const NavLogo = styled.span`
  > svg {
    height: 45px;
    width: 167px;
    fill: #e51414;
  }

  @media (max-width: 950px) {
    > svg {
      height: 25px;
      margin-top: 0.4rem;
    }
  }

  @media (max-width: 1450px) {
    height: 35px;
  }
`;
