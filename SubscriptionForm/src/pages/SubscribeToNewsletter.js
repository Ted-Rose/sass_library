import React from "react";
import Content from "../components/Content";
import Header from "../components/Header";

export const SubscribeToNewsletter = () => {
  return (
    <div className="container-form">
      <div className="overlap">
        <Header />
        <Content />
        <img
          className="background-image"
          alt="Background image"
          src="https://c.animaapp.com/X2atuPdF/img/image.png"
        />
      </div>
    </div>
  );
};
