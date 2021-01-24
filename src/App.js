import React from 'react';
import './App.css';
import Header from './components/header';
import { Carrousel } from './components/Carrousel';
import { Produtos } from './components/Produtos';
import Footer from './components/footer';



function App() {
  return (
    <div className="body">
      <Header />
      <Carrousel />
      <Produtos/>
      <Produtos/>
      <Produtos/>
      <Footer />
    </div>
  );
}

export default App;
