import React from "react";
import "./style.css"
import { useGlobalContext } from './context'
//components
import Navbar from './Navbar';
import CartContainer from "./CartContainer"

const ReactCart = () => {
    const { loading } = useGlobalContext()
    if (loading) {
        return (
            <div className="loading">
                <h1>Loading...</h1>
            </div>
        )
    }
    return (
        <main>
            <Navbar />
            <CartContainer />
        </main>
    )
};

export default ReactCart;
