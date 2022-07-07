import * as React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.scss";
import Nav from './components/Nav'
import Home from './components/Home'
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'
import Room from './components/Room'
import Reservation from "./components/Reservation";
import Footer from './components/Footer'
import History from './components/History'


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
          <Route path="/historique" element={<History />} />
          <Route path="/reservation/:id:indexDay:indexDDay" element={<Reservation />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}