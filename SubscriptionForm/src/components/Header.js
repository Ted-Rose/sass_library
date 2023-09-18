import React from "react";
import PineappleText from "./Images/pineapple-text.svg";

const Header = (/* { links } */) => {
    return (
        <div className="navbar pl-0 pr-0 pt-0 pb-0 bg-white">
            <div className="container pr-0">
                <svg
                    width="25"
                    height="40"
                    viewBox="0 0 25 40"
                    className="mb-1"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.75658 14.5161L0 7.41936L6.57895 8.54839L5.75658 0.967742L10.5263 6.45161L12.5 0L14.4737 6.45161L19.2434 0.967742L18.4211 8.54839L25 7.41936L19.2434 14.5161H5.75658ZM8.07206 10.1146L7.51478 4.97752L11.0926 9.09101L12.5 4.49046L13.9074 9.09101L17.4852 4.97752L16.9279 10.1146L21.8124 9.27632L18.6088 13.2258H6.39123L3.18759 9.27632L8.07206 10.1146Z"
                        fill="#4066A5"
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M20.0658 40H5.26316L0.328947 35.1613V20.6452L5.26316 15.8065H20.0658L25 20.6452V35.1613L20.0658 40ZM7.67582 27.2055L11.8448 23.1172L5.72958 17.1738L1.64474 21.1796V21.344L7.67582 27.2055ZM17.9841 17.0968H7.51948L12.7752 22.2048L17.9841 17.0968ZM8.61039 28.1138L12.7794 24.0255L16.8012 27.9342L12.6322 32.0225L8.61039 28.1138ZM13.7098 23.1131L17.7316 27.0218L23.6842 21.1844V21.1796L19.6828 17.2557L13.7098 23.1131ZM13.5667 32.9308L17.7357 28.8425L23.6842 34.6238V34.6268L19.5208 38.7097H19.5127L13.5667 32.9308ZM18.6662 27.9301L23.6842 32.8071V23.0092L18.6662 27.9301ZM6.7454 28.1179L1.64474 23.1606V33.1199L6.7454 28.1179ZM7.67998 29.0262L11.7017 32.9349L5.81302 38.7097H5.80818L1.80679 34.7857L7.67998 29.0262ZM17.6435 38.7097H7.67383L12.6363 33.8432L17.6435 38.7097Z"
                        fill="#4066A5"
                    />
                </svg>
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
