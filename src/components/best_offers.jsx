import React, { Fragment } from "react";
import styled from "styled-components";
import product1 from "../assets/product1.jpeg";
import product2 from "../assets/product2.jpeg";
import product3 from "../assets/product3.jpeg";


export default function Best_offers(){

    const data = [
        {
          image: product1,
          name: "Chorrillana del Barrio (Level: Plain Vanilla)",
          price: "CLP$ 8000",
          desc: "Chorrillana con papas rusticas, chorizo ahumado aliñada con pimienta y perejil"
        },
        {
          image: product2,
          name: "Furiosa Hamburguesa (Level: Big & Furious)",
          price: "CLP$ 10000",
          desc: "Sólo para valientes. Mezcla inigualable de queso y carne. 100% Proteína."
        },
        {
          image: product3,
          name: "Surprise Burrito (Level: SurpriseMe)",
          price: "CLP$ 8000",
          desc: "Burrito con una mezcla secreta a merced del chef."
        },
      ];
      return (
        <Fragment>
            
          <Jumbo>
            <div className="titulo">
            <h1>
              Cherry Picking 	&#127826;
            </h1>

            </div>
            {data.map((product) => {
              return (
                <div className="card1">
                  <div>
                    <img width='100px' src={product.image} alt="" />
                  </div>
                  <h2>{product.name}</h2>
                  <h3>{product.price}</h3>
                  <p>{product.desc}</p>
              
                </div>
              );
            })}
          
          
          </Jumbo>
            
        </Fragment>
       


        
       
        
      );




}
const Jumbo = styled.div`
  margin: 40px;
 
  display: flex;
  flex-direction: column;
  .titulo {
    color: #0055FF;
  }
  .card1 {
    padding: 30px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
  }
  
  
`;
