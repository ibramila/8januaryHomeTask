import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import NavbarSide from "../components/NavbarSide";

function MainRoot() {
    return (
        <>
            <NavbarSide />
            <Outlet />
            <Footer />
        </>
    );
}

export default MainRoot;