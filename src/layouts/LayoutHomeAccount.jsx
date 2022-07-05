import React from "react";
import Jual from "../components/Jual";
import NavbarHomeAccount from "../components/NavbarHomeAccount";
import Home from "../pages/Home";

export default function LayoutHomeAccount() {
    return (
        <>
        <NavbarHomeAccount />
        <Home />
        <Jual />
        </>
    )
}
