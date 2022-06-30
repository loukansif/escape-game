import * as React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.scss";
import Nav from './components/Nav'
import Home from './components/Home'
import Inscription from './components/Inscription'
import Connexion from './components/Connexion'
import Salle from './components/Salle'
import Copyright from './components/Copyright'


export default function App() {
  return (
    <>
      <Nav />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="inscription" element={<Inscription />} />
          <Route path="connexion" element={<Connexion />} />
          <Route path="salle" element={<Salle />} />
        </Routes>
      </div>
      <Copyright sx={{ mt: 8, mb: 4 }}/>
    </>

  );
}