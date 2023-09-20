import React from "react";
import Content from "../components/Content";
import Header from "../components/Header";

export const SubscribeToNewsletter = () => {
  return (
    <div className="container-form">
      <div>
        <Header />
        <Content />
      </div>
      <svg className="ic-facebook"> <use xlinkHref="./Images/ic_facebook.svg" /> </svg>

    </div>
  );
};
