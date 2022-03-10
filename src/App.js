import React from "react";
import './App.css'
import Navbar from './components/navbar'
import Landing from "./components/landing";
import Footer from "./components/footer";
import Aboutme from "./components/aboutme";
import Portfolio from "./components/portfolio";
import Contactme from "./components/contactme";

import './style/main.scss'

const App = () => {

    return(
        <>
        <Navbar/>
        <Landing/>
        <Aboutme/>
        <Portfolio/>
        <Contactme/>
        <Footer/>
        </>
    )
}

export default App