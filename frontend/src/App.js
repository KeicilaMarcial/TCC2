import React, {useState, useEffect } from "react";
import api from "./services/api";

import './style/App.css'
import Main from "./components/Main";
import Content from "./components/Content";
import Footer from "./components/Footer";

function App(props){
  return (
    <div className="App">
        <Main/>
        <Content/>
        <Content/>
        <Content/>
        <Footer/>
    </div>
  )
}

export default App;
