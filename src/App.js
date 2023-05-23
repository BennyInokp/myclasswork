import { BrowserRouter, Routes, Route } from "react-router-dom";

import Accordion from "./Component/accordion";
import "./Component/accordion.css";
import Api from "./Component/api";
import "./Component/api.css";
import Quotes from "./Component/quotes";
import "./Component/quotes.css";
import Carousel from "./Component/carousel";
import "./Component/carousel.css";

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
