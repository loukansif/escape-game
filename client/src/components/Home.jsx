import React, { useState, useEffect } from "react";
import Salle from "./Salle";

function Home() {
  const [salles, setSalles] = useState([]);

  const getSalles = () => {
    fetch("http://localhost:5000/salles")
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        setSalles(result);
      })
      .catch((error) => console.log(error));
  };


  useEffect(() => {
    getSalles();
  }, []);

  return (
    <>
      <h1 className="title">Bienvenue sur le site de résa Escape Room</h1>
      {salles.map((salle) => {
        return <Salle salle={salle} key={salle._id}/>;
      })}
    </>
  );
}

export default Home;
