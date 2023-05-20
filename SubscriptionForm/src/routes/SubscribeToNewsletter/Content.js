import EmailForm from "./EmailForm";

import Icons from "./Icons";

import Terms from "./Terms";

const Content = () => (
  <div className="container row flex-auto justify-center align-center p-0 desktop-image">
    <div className="bg-primary sm-w-295 pr-5 pl-5">
      <h1 className="pt-5">Subscribe to newsletter</h1>
      <h2 className="pt-5">
        Subscribe to our newsletter and get 10% discount on pineapple glasses.
      </h2>
      <EmailForm />
      <Terms />
      <Icons />
    </div>
  </div>
);

export default Content;
