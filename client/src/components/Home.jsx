import React, { useState, useEffect } from "react";
import CardRoom from "./CardRoom";

function Home() {
  const [rooms, setRooms] = useState([]);

  const getRooms = () => {
    fetch("http://localhost:5000/salles")
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        setRooms(result);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getRooms();
  }, []);

  return (
    <>
      <h1 className="title">Bienvenue sur le site de résa Escape Room</h1>
      <div className="rooms">
        {rooms.map((salle) => {
          return <CardRoom salle={salle} key={salle._id} />;
        })}
      </div>
    </>
  );
}

export default Home;
