import './App.css';
import React from 'react';
import Home from './pages/home/home.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contato from './pages/contato/contato.js';
import Fotos from './pages/fotos/fotos.js';
import Comentarios from './pages/comentarios/comentarios.js';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contato' element={<Contato/>}/>
        <Route path='/fotos' element={<Fotos/>}/>
        <Route path='/comentarios' element={<Comentarios/>}/>
      </Routes>
    </BrowserRouter>
  );
  
}

export default App;
