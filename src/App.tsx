import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./views/NavBar";
import Homepage from "./views/Homepage";
import DetailPage from "./views/DetailPage";
import NotFound from "./views/NotFound";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/detailPage:detail" element={<DetailPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
