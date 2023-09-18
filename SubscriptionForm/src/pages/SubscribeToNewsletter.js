import React from "react";
import "./style.css";

export const SubscribeToNewsletter = () => {
  return (
    <div className="mobile">
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
        <div className="content">
          <div className="text">
            <p className="subheading">Subscribe to our newsletter and get 10% discount on pineapple glasses.</p>
            <div className="heading">Subscribe to newsletter</div>
          </div>
          <div className="input">
            <div className="overlap-group">
              <img className="line" alt="Line" src="https://c.animaapp.com/YWiHxtUl/img/line.svg" />
              <div className="div">
                <div className="ic-arrow">
                  <img className="img" alt="Ic arrow" src="https://c.animaapp.com/YWiHxtUl/img/ic-arrow.svg" />
                </div>
                <p className="placeholder">Type your email address here…</p>
              </div>
            </div>
          </div>
          <div className="TOS">
            <p className="i-agree-to-terms-of">
              <span className="text-wrapper">I agree to </span>
              <span className="span">terms of service</span>
            </p>
            <div className="checkmark">
              <img
                className="ic-checkmark"
                alt="Ic checkmark"
                src="https://c.animaapp.com/YWiHxtUl/img/ic-checkmark.svg"
              />
            </div>
          </div>
          <div className="social">
            <img className="line-2" alt="Line" src="https://c.animaapp.com/YWiHxtUl/img/line-1.svg" />
            <div className="social-icons">
              <div className="youtube">
                <img className="ic-youtube" alt="Ic youtube" src="https://c.animaapp.com/YWiHxtUl/img/ic-youtube.svg" />
              </div>
              <div className="twitter">
                <img className="ic-twitter" alt="Ic twitter" src="https://c.animaapp.com/YWiHxtUl/img/ic-twitter.svg" />
              </div>
              <div className="instagram">
                <img
                  className="ic-instagram"
                  alt="Ic instagram"
                  src="https://c.animaapp.com/YWiHxtUl/img/ic-instagram.svg"
                />
              </div>
              <div className="facebook">
                <img
                  className="ic-facebook"
                  alt="Ic facebook"
                  src="https://c.animaapp.com/YWiHxtUl/img/ic-facebook.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
