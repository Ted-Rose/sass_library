import EmailForm from "./EmailForm";
import Icons from "./Icons";
import Terms from "./Terms";

const Content = () => (
  <div className="content">
    <div className="text">
      <p className="subheading">
        Subscribe to our newsletter and get 10% discount on pineapple glasses.
      </p>
      <div className="heading">Subscribe to newsletter</div>
    </div>
    <EmailForm />
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
      <img
        className="line-2"
        alt="Line"
        src="https://c.animaapp.com/YWiHxtUl/img/line-1.svg"
      />
      <div className="social-icons">
        <div className="youtube">
          <img
            className="ic-youtube"
            alt="Ic youtube"
            src="https://c.animaapp.com/YWiHxtUl/img/ic-youtube.svg"
          />
        </div>
        <div className="twitter">
          <img
            className="ic-twitter"
            alt="Ic twitter"
            src="https://c.animaapp.com/YWiHxtUl/img/ic-twitter.svg"
          />
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
);

export default Content;
