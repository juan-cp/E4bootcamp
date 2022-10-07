import React from "react";
import styled from "styled-components";
import logo from "../assets/fast-food.png";
import { AiFillInstagram } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";

export default function Footer() {
  return (
    <div className="footer">
      <Section>
        <div className="brand container">
          <img src={logo} alt="" />
          <p>
            <h3>Fast&FuriousFood</h3>
          </p>
          <ul>  
            <li>
              <AiFillInstagram />
            </li>
            <li>
              <FaFacebookF />
            </li>
            <li>
              <GrLinkedinOption />
            </li>
            <li>
              <BsTwitter />
            </li>
          </ul>
        </div>
        <div className="about container">
          <div className="title">
            <h3>Comida Rápida y Furiosa</h3>
          </div>
          <p>
            Tu pedido en menos de 30 minutos. Puedes escoger distintos niveles de comida rápida: Plain Vanilla (tradicional), Big&Furious (Grande para desafiar a los estómagos más capaces),
            SurpriseMe (preparaciones de comida rápida con un toque "creativo", para los experimentadores)
          </p>
        </div>
        <div className="contact container">
          <div className="title">
            <h3>Contáctenos</h3>
          </div>
          <p>+56 9 11223344</p>
          <p>fffood@gmail.com</p>
          <p>@fffood</p>
          <p>Av. Siempreviva 100, Saltadilla</p>
        </div>
      </Section>
    </div>
  );
}

const Section = styled.footer`
  margin: 0;
  background: #0055FF;
  color: black;
  display: grid;
  
  grid-template-columns: repeat(3, 1fr);
  gap: 10vw;
  padding: 4vw;
  p {
    font-size: 1rem;
    line-height: 1.5rem;
  
  }
  ul {
    display: flex;
    list-style-type: none;
    gap: 4vw;
    margin-top: 2vw;
    li {
      padding: 0.8rem;
      border-radius: 2rem;
      background-color: white;
      cursor: pointer;
      }
      svg {
        display: flex;
        justify-content: center;
        align-items: center;
        color: #0055FF;
        font-size: 1.6rem;
      }
    }
  }
  img {
    width: 10vw;
  }
  .container {
    display: flex;
   
    flex-direction: column;
    gap: 0.5rem;
    h3 {
      font-size: 1.5rem;
    }
  }
  
`;

