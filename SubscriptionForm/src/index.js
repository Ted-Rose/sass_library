import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SubscribeToNewsletter from "./routes/SubscribeToNewsletter/SubscribeToNewsletter.js";
import "./routes/SubscribeToNewsletter/index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<SubscribeToNewsletter />} />
    </Routes>
  </BrowserRouter>
);
