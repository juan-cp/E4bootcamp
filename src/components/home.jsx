import { Fragment } from 'react';
import Best_offers from '../components/best_offers';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import styled from "styled-components";
import fondo from "../assets/background1.jpeg"

export default function Home(){

    return(
        <Fragment>
            <Jumbo>
                
                <div className="card">
                    <div className="titulocard">  
                    <h1>
                        Rápido y Furioso!&#x1f3ce;
                    </h1>
                    </div>
                    <div className="textocard">
                    <p>
                        Tu pedido en menos de 30 minutos. Puedes escoger distintos niveles de comida rápida: Plain Vanilla (tradicional), Big&Furious (Grande para desafiar a los estómagos más capaces),
                        SurpriseMe (preparaciones de comida rápida con un toque "creativo", para los experimentadores)
                    </p>
                    </div>
                  

                </div>
               <div className="card">
                    <div className="titulocard">  
                    <h1>
                        Todo muy sencillo!&#9989;
                    </h1>
                    </div>
                    <div className="textocard">
                    <p>
                        Elige tus productos y confirma tu pedido. Nuestros rápidos y furiosos cocineros se encargarán de tu orden.
                        Nos vemos en tu casa en menos de 30 minutos. ** Aplica para PlainVanilla o Big&Furious. SurpriseMe toma un poco más para dar espacio a la creatividad. 
                    </p>
                    </div>
                 
               </div>
                

            
            
          
          
            </Jumbo>
            <Footer />
        </Fragment>
        
            

    )
}
const Jumbo = styled.div`
  margin: 0px;
  padding: 100px;
  height: 800px;
  display: flex;
  justify-content: center;

    background-image: url(${fondo});
    background-size: 100% 100%;
      opacity: 1;


  
  .card{

    padding: 40px;
    width: 30%;
    .titulocard{
        color: #0055FF;
        font-size: 30px;
    }
    .textocard {
        font-size: 20px;
    }
  }
  
  
`;