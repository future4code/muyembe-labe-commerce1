import React from 'react';
import './App.css';
import { Carrousel } from './components/Carrousel';
import Header from './components/header'
import Footer from './components/footer'
import styled from 'styled-components'

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: space-between;
  height: 100vh;
  width: 100%;
`

function App() {
  return (
    <Div>
      <Header />
      <Carrousel />
      <Footer />
    </Div>
  );
}

export default App;
