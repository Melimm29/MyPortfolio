import React from "react";
import './App.css'
import Navbar from './components/navbar'
import Landing from "./components/landing";
import Footer from "./components/footer";

import './style/main.scss'

const App = () => {

    return(
        <>
        <Navbar/>
        <Landing/>
        <Footer/>
        </>
    )
}

export default App