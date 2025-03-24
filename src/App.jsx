import ReactDom from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import ScrollCharact from './components/Characters/ScrollCharact';
import { Suspense } from "react";

function App() {


  return (
    <BrowserRouter>
      <Header />
      <Suspense>
        <Routes>
          <Route path="/" element={ScrollCharact} />
        </Routes>
      </Suspense>
      <ScrollCharact />
    </BrowserRouter>
  )
}

export default App
