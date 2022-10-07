import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Best_offers from './components/best_offers';
import Footer from './components/footer';
import { Fragment } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/home';
import Menu from './components/Menu';
import ContactBook from './components/contactbook';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="menu" element={<Menu />} />
          <Route path="contact" element={<ContactBook />} />
        </Route>
    </Routes> 
    
    
    </BrowserRouter>
  

  );
}

export default App;
