import React from "react";
import Content from "../components/Content";

export const SubscribeToNewsletter = () => {
  return (
    <div className="container-form">
      <div className="overlap">
        <div className="top-bar">
          <div className="top-bar-2">
            <img
              className="logo-pineapple"
              alt="Logo pineapple"
              src="https://c.animaapp.com/YWiHxtUl/img/logo-pineapple@2x.png"
            />
            <div className="menu">
              <div className="links">About</div>
              <div className="links">How it works</div>
              <div className="links">Contact</div>
            </div>
          </div>
        </div>
        <Content />
      </div>
    </div>
  );
};
