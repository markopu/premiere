import React from 'react';
import './App.css';
import { Main } from './components/Main';
import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
  html {
    font-size : 16px;
  }
  body {
    font-family: 'Questrial', sans-serif;
    

  }
`

function App() {
    return (
        <>
            <Main />
            <GlobalStyle/>
        </>
    );
}

export default App;
