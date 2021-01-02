import React, { useState } from "react";
import { Data } from "../../services/api";
import styled from "styled-components";
import { IconContext } from "react-icons";
import { FiPlus, FiMinus } from "react-icons/fi";

const AccordionSection = styled.div``;

const Container = styled.div`
  padding-top: 3rem;
  margin: 0 auto;
  width: 75%;

  @media (max-width: 550px) {
    width: 100%;
  }
`;

const Dropdown = styled.div`
  background-color: #303030;
  padding: 2rem;
  position: relative;
  top: -7px;
  width: 100%;
  transition: all 0.5s ease-in-out;
  @media (max-width: 550px) {
    padding: 1rem;
  }
  p {
    font-size: 26px;
    font-weight: 400;
    text-align: left;
    @media (max-width: 550px) {
      font-size: 18px;
    }
    @media (max-width: 950px) {
      font-size: 20px;
    }
  }
`;

const Wrap = styled.div`
  background: #303030;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: space-between;
  cursor: pointer;
  padding: 1.2rem 2rem;
  margin: 0;
  margin-bottom: 8px;
  width: 100%;
  @media (max-width: 950px) {
    padding: 0.8rem 2rem;
  }
  @media (max-width: 550px) {
    padding: 0.8rem;
  }

  h1 {
    font-size: 26px;
    font-weight: 400;
    @media (max-width: 550px) {
      font-size: 18px;
    }
    @media (max-width: 950px) {
      font-size: 20px;
    }
  }
`;

const Accordion = () => {
  const [clicked, setClicked] = useState(false);

  const toggle = (index) => {
    if (clicked === index) {
      return setClicked(null);
    }
    setClicked(index);
  };

  return (
    <IconContext.Provider value={{ color: "#FFFFFF", size: "35px" }}>
      <AccordionSection>
        <Container>
          {Data.map((item, index) => {
            return (
              <>
                <Wrap onClick={() => toggle(index)} key={index}>
                  <h1 className="items">{item.question}</h1>
                  <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                </Wrap>
                {clicked === index ? (
                  <Dropdown>
                    <p>{item.answer}</p>
                  </Dropdown>
                ) : null}
              </>
            );
          })}
        </Container>
      </AccordionSection>
    </IconContext.Provider>
  );
};

export default Accordion;
