import Header from "./Header";

import Content from "./Content";

export default function SubscribeToNewsletter() {
  return (
    <div>
      <div className="container vh100 row p-0 desktop-image">
        <Header />
        <Content />
      </div>
      {/* <div className="desktop-image"></div> */}
    </div>
  );
}
