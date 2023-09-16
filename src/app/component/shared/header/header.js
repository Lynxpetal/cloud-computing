"use client";

import "@/styles/components/header.scss";
import Navbar from "./navbar";
import TarcLogo from "./tarcLogo";
import MobileNavbar from "./mobileNavbar";

import { useState } from "react";

export default function Header() {

    const [showMobileNavbar, setShowMobileNavbar] = useState(false)
    return (
        <header className="page-head">
            <div className="page-head-bg"></div>
            <div className="container" style={{ padding: "20px 0" }}>
                <div className="row headerRow" style={{ height: "100%", padding: "0 3rem" }}>
                    <div
                        className="col-3 centerFlex tarcLogoContainer"
                        style={{ position: "relative" }}>
                        <TarcLogo />
                    </div>
                    <div className="col-9">
                        <Navbar toggleShowMobileNavbar={() => {setShowMobileNavbar(!showMobileNavbar)}} />
                    </div>
                </div>
            </div>
            <MobileNavbar show={showMobileNavbar} setShowMobileNavbar={setShowMobileNavbar} />
        </header>
    );
}
