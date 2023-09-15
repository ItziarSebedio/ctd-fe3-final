import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./Components/Layout";
import Home from "./Routes/Home";
import Detail from "./Routes/Detail";
import Contact from "./Routes/Contact";
import Favs from "./Routes/Favs";
import NoPage from "./Components/NoPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="dentist/:id" element={<Detail />} />
          <Route path="contacto" element={<Contact />} />
          <Route path="favs" element={<Favs />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
