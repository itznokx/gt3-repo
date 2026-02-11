import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "../pages/Login";
import Home from "../pages/Home"
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import { useContext, useState } from "react";
import { AuthContext, ContextAuth } from '../contexts/AuthContext'

const Paths = () => {

    const {logged} = useContext(ContextAuth)

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element = {<Login/>} />
                    {
                        logged && (
                            <>
                                <Route path="/home" element = {<Home/>} />
                            </>
                        )

                    }
                </Routes>
            </BrowserRouter>
        </>
    );

}

export default Paths