import React, { useState, useEffect } from "react";
import logo from "../assets/fast-food.png";
import { Fragment } from "react";
import styled from "styled-components";
import { Outlet, Link } from "react-router-dom";
export default function Navbar(){

    return(
        
        <Fragment>
          <Nav>
          <div className="brand">
          <img src={logo} width="40px" alt="Icon" />
          </div>
          <div>
            <h2>FAST&FURIOUSFOOD</h2>
          </div>
          <div>
          <ul className="links">
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/menu">Menú</Link>
          </li>
          <li>
            <Link to="/contact">Contacto y Pedidos</Link>
          </li>
          </ul>
          </div>


          </Nav>
        
        <Outlet />
        </Fragment>
      

       
      
    );
}
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  background:AliceBlue;
  align-items: center;
  font-size: 20px;
  padding: 0 4vw;
  .brand {
    img {
      margin-top: 1rem;
      cursor: pointer;
    }
    .toggle {
      display: none;
    }
    
  }
  .links {
    display: flex;
    list-style-type: none;
    gap: 2rem;
    li {
      a {
        color: #0055FF;
        font-weight: 600;
        text-decoration: none;
        transition: 0.3s ease-in-out;
        &:hover {
          color: #000000;
        }
      }
      .active {
        color: #;
      }
    }
  }
  @media screen and (min-width: 260px) and (max-width: 1080px) {
    .brand {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      top: 0;
      .toggle {
        display: block;
      }
    }
    .links {
      display: none;
    }
  }
`;