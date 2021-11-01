import React from 'react';
import './App.css';
import {Header} from "./components/Header/header";
import s from './App.module.css'
import {HashRouter} from "react-router-dom";
import {Routes} from "./components/Routes/Routes";

function App() {
  return (
    <HashRouter>
      <div className={`${s.wrapper}`}>
        <Header/>
        <Routes/>
      </div>
    </HashRouter>
  )
}

export default App;
