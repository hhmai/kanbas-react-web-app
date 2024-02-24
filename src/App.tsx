import React from "react";
import logo from "./logo.svg";
import HelloWorld from "./hello";
import Labs, { Add, Subtract } from "./Labs";
import { HashRouter, Link, Navigate, Route, Routes } from "react-router-dom";
import Nav from "./Nav";
import Kanbas from "./Kanbas";
function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/Labs/a3" />} />
          <Route path="/Labs/*" element={<Labs />} />
          <Route path="/Kanbas/*" element={<Kanbas />} />
          <Route path="/hello" element={<HelloWorld />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
