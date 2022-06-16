import React from 'react';
import { Routes, Route } from "react-router-dom";
import Login from './comps/login';
import Home from './comps/home';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/home" element={<Home/>}/>
    </Routes>

  );
}

export default App;