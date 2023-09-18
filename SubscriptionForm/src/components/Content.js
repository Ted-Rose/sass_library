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
    <Terms />
    <Icons />
  </div>
);

export default Content;
