import React from "react";
import PineappleText from "./Images/pineapple-text.svg";
import LogoPineapple from "./Images/logo_pineapple.svg";

const Header = () => {
    return (
        <div className="top-bar">
            <div className="top-bar-2">
                <img
                    src={LogoPineapple}
                    alt="SVG pineapple logo"
                    className="logo-pineapple"
                />
                <img
                    src={PineappleText}
                    alt="SVG pineapple text"
                    className="sm-hide"
                />
                <ul class="menu">
                    <li class="links">
                        <a href="#">About</a>
                    </li>
                    <li class="links">
                        <a href="#">How it works</a>
                    </li>
                    <li class="links">
                        <a href="#">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
