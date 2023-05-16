import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.scss";
import SubscribeToNewsletter from "./routes/SubscribeToNewsletter/SubscribeToNewsletter.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<SubscribeToNewsletter />} />
    </Routes>
  </BrowserRouter>
);
