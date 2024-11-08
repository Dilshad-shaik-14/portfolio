import React from "react";
import { Outlet } from 'react-router-dom';
import Hero from "./hero" // Ensure Hero is imported here
import Layout from "./layout";

function Combo() {
    return(
        <>
        <Layout />
        <Outlet />
        <Hero />
        </>
    );
}

export default Combo;
