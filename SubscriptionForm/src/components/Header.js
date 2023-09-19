import React from "react";
import PineappleText from "./Images/pineapple-text.svg";
import LogoPineapple from "./Images/logo_pineapple.svg";

const Header = (/* { links } */) => {
    return (
        <div className="navbar-white navbar-md navbar-xl">
            <div className="container pr-0">
                <img src={LogoPineapple} alt="SVG pineapple logo" />
                <img
                    src={PineappleText}
                    alt="SVG pineapple text"
                    className="sm-hide"
                />
                <ul class="display-f pl-5 pr-2 pt-2-5 pb-2-5 mt-n-4 mb-n-4">
                    <li class="font-md mr-2 btn-gray-2">
                        <a href="#">About</a>
                    </li>
                    <li class="font-md mr-2 btn-gray-2">
                        <a href="#">How it works</a>
                    </li>
                    <li class="font-md btn-gray-2">
                        <a href="#">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
