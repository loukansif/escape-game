import * as React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.scss";
import Nav from './components/Nav'
import Home from './components/Home'
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'
import Room from './components/Room'
import Reservation from "./components/Reservation";
import HistoResa from "./components/HistoResa";
import Footer from './components/Footer'


export default function App() {
  return (
    <>
      <Nav />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inscription" element={<SignUp />} />
          <Route path="/connexion" element={<SignIn />} />
          <Route path="/:id" element={<Room />} />
          <Route path="/reservation/:id:indexDay:indexDDay" element={<Reservation />} />
          <Route path="/historique" element={<HistoResa />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}