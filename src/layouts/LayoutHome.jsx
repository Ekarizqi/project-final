import React from "react";
import Jual from "../components/Jual";
import NavbarHome from "../components/NavbarHome";
import Home from "../pages/Home";

export default function LayoutHome() {
    return (
        <>
        <NavbarHome />
        <Home />
        <Jual />
        </>
    )
}
