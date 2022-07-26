import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.scss';
import { ErrorTemplate } from "./pages/ErrorTemplate";
import {  HomeTemplate } from "./pages/HomeTemplate";
import { Home } from "./pages/HomeTemplate/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes className="App">
        <Route element={<HomeTemplate />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="*" element={<ErrorTemplate />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
