import React from 'react';
import styled from 'styled-components';

const ButtonNavbar = () => {
  return (
    <StyledWrapper>
      <button className="cta">
        <span>Contact Us</span>
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .cta {
    position: relative;
    margin: auto;
    padding: 5px 18px;
    transition: all 0.2s ease;
    border: 3px solid oklch(96.2% 0.059 95.617);
    border-radius: 50px;
    background: #242124;
    cursor: pointer;
    height: 40px;
  }

  .cta:before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    display: block;
    border-radius: 50px;
    background: gray;
    width: 45px;
    height: 35px;
    transition: all 0.8s ease;
    align-items: center;
  }

  .cta span {
    position: relative;
    font-family: Montserrat;
    font-size: 18px;
    color: white;
    font-weight: 400;
    letter-spacing: 0.05em;
  }

  .cta svg {
    position: relative;
    top: 0;
    margin-left: 10px;
    fill: none;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke: white;
    stroke-width: 2;
    transform: translateX(-5px);
    transition: all 0.5s ease;
  }

  .cta:hover:before {
    width: 100%;
    background: oklch(96.2% 0.059 95.617);
  }

  .cta:hover svg {
    transform: translateX(0);
    transition: all 2s ease;
  }

  .cta:hover span {
    color: #242124;
  }

  .cta:active {
    transform: scale(0.95);
    transition: all 2s ease;
  }`;

export default ButtonNavbar;
