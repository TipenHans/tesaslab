import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Navbar from "./Navbar";
import Home from "./Home";
import Main from "./Main";
import Daftar from "./daftar";
import Dokumentasi from "./Dokumentasi";
import Contact from "./Contact";

const Nav = () => {
  const location = useLocation();
  return location.pathname !== "/" ? <Navbar /> : null;
};

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(
  <Router>
    <div className="m-0 p-0">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/main" element={<Main />} />
        <Route path="/daftar" element={<Daftar />} />
        <Route path="/dokumentasi" element={<Dokumentasi />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  </Router>
);
