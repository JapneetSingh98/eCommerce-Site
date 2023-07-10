import React from "react";

import NavBar from "./NavBar";
import MainContent from "./MainContent";
import ShoppingCart from "./ShoppingCart";


export default function App() {
    return (
        <React.Fragment>
            <NavBar />
            <MainContent />
            <ShoppingCart />
        </React.Fragment>
    );
}
