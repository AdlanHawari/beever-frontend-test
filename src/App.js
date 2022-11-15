import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { HomeView } from "./components";
import Test1 from "./components/test1/Test1";
import Test2 from "./components/test2/Test2";
import Test3 from "./components/test3/Test3";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/test1" element={<Test1 />} />
        <Route path="/test2" element={<Test2 />} />
        <Route path="/test3" element={<Test3 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
