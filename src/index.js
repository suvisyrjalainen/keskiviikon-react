import React from 'react';
import ReactDOM from 'react-dom/client';
import Omakuva from './omakuva.js';
import Header from './header.js';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Portfolio from "./pages/Portfolio";
import CV from "./pages/Cv";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";

import './styles.css'

const myPage = <div>
<Header/>
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Portfolio />} />
      <Route path="cv" element={<CV />} />
      <Route path="contact" element={<Contact />} />
      <Route path="*" element={<NoPage />} />
    </Route>
  </Routes>
</BrowserRouter>

</div>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myPage);
