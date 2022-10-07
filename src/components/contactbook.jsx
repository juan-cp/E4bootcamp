import { Fragment } from 'react';
import Best_offers from '../components/best_offers';
import { useState } from "react";
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import styled from "styled-components";
import fondo from "../assets/background1.jpeg"


/**
 * 
 * // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAC4FsY3F4jLMExAReolfwzvOupTPvOSM",
  authDomain: "e4bootcamp.firebaseapp.com",
  projectId: "e4bootcamp",
  storageBucket: "e4bootcamp.appspot.com",
  messagingSenderId: "970732781351",
  appId: "1:970732781351:web:f5170533e2ff6b2847f302"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 * 
 * 
 * <script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCAC4FsY3F4jLMExAReolfwzvOupTPvOSM",
    authDomain: "e4bootcamp.firebaseapp.com",
    projectId: "e4bootcamp",
    storageBucket: "e4bootcamp.appspot.com",
    messagingSenderId: "970732781351",
    appId: "1:970732781351:web:f5170533e2ff6b2847f302"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
</script>
 * 
 */
export default function ContactBook(){
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [email, setEmail] = useState('');
    const [direccion, setDireccion] = useState('');
    const [producto, setProducto] = useState('');

    const prueba1 = ()=>{
        console.log(nombre+apellido+email+direccion+producto)
    }

    return(
        <Fragment>
            <Jumbo>
                
            
                <div className="tituloform">    
                    Ingresa tu orden:
                </div>
                <div className="disclaimerform">
                    Recibimos tu pedido y hacemos despacho en 30 minutos (40 min aprox para productos SurpriseMe). 
                    Pago se realiza con tarjetas o transferencia al momento de recepcionar el producto. Tiempos válidos sólo dentro de Saltadilla.
                </div>
                <div className="campoform">
                    <label className="labelTexto" htmlFor="nombre">Nombre</label><br></br>
                    <input  className="inputTexto" id="nombre" type="nombre" onChange={e=>setNombre(e.target.value)}></input>
                </div>
                <div className="campoform">
                    <label className="labelTexto" htmlFor="apellido">Apellido</label><br></br>
                    <input className="inputTexto" id="apellido" type="apellido" onChange={e=>setApellido(e.target.value)}></input>
                </div>
                <div className="campoform">
                    <label className="labelTexto" htmlFor="email">E-mail</label><br></br>
                    <input className="inputTexto" id="email" type="email" onChange={e=>setEmail(e.target.value)}></input>
                </div>
                <div className="campoform">
                    <label className="labelTexto" htmlFor="direccion">Dirección</label><br></br>
                    <input className="inputTexto" id="direccion" type="direccion" onChange={e=>setDireccion(e.target.value)}></input>
                </div>
                <div className="campoform">
                    <label className="labelTexto"  htmlFor="product">Escoger un producto:</label><br></br>
                    <select className="selectTexto" name="product" id="product" onChange={e=>setProducto(e.target.value)}>
                        <option value="1">Chorrillana del Barrio</option>
                        <option value="2">Furiosa Hamburguesa</option>
                        <option value="3">Surprise Burrito</option>
                    </select>
                </div>
                <div className="campoform">
                <button className="botonpedido" onClick={prueba1}>Hacer Pedido</button>
                </div>
            
            </Jumbo>
            <Footer />
        </Fragment>
        
            

    )
}
const Jumbo = styled.div`
  margin: 0px;
  padding-top: 100px;
  height: 800px;
  display: flex;
 
  align-items: center;
  flex-direction: column;

    background-image: url(${fondo});
    background-size: 100% 100%;
      opacity: 1;
    .tituloform {
        color: #0055FF;
        font-size: 40px;
    }
    .disclaimerform{
        width: 300px;
        font-size: 12px;
    }
    .campoform{
        padding:20px;
        .labelTexto {
            font-size: 20px;

        }
        .inputTexto {
            width: 300px;
            border-radius: 20px;
            font-family: 'Zilla Slab', serif;
            font-size: 20px;
            border-color: rgba(229,231,235,var(--tw-border-opacity));
            text-align: center;
        }
        .selectTexto {
            font-size: 20px;
            width: 300px;
            font-family: 'Zilla Slab', serif;
        }
        .botonpedido{
            border:none;
            width: 300px;
            border-radius: 20px;
            padding:8px 16px;
            font-size: 20px;
            vertical-align:middle;
            background-color:#0055FF;
            color: #FFF;
            font-family: 'Zilla Slab', serif;
            text-decoration:none;
            text-align:center;
            cursor:pointer;
        }
    }
  
`;