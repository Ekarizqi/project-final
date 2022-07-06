import React from "react";
import Jual from "../components/Jual";
import NavbarHome from "../components/NavbarHome";
import NavbarMobile from "../components/NavbarMobile";
import Home from "../pages/Home";
import { useMediaQuery } from 'react-responsive';

export default function LayoutHome() {
    const isMobile = useMediaQuery({minWidth: 600})
    return (
        <>
        {
        isMobile ? 
        <NavbarHome />
        :
        <NavbarMobile />
        }
        <Home />
        <Jual />
        </>
    )
}
