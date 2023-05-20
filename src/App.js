import { BrowserRouter, Routes, Route } from "react-router-dom";

import Accordion from "../Component/accordion";
import "./accordion.css";
import Api from "./Component/api";
import "./api.css";
import Quotes from "../component/quotes";
import "./quotes.css";
import Carousel from "./Component/carousel";
import "./carousel.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/accordion" element={<Accordion />} />
        <Route path="/api" element={<Api />} />
        <Route path="/quotes" element={<Quotes />} />
        <Route path="/carousel" element={<Carousel />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
