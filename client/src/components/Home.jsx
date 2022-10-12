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
      <h1 className="title">Bienvenue à l'Escape Game</h1>
      <div className="rooms">
        {rooms.map((room) => {
          return <CardRoom room={room} key={room._id} />;
        })}
      </div>
    </>
  );
}

export default Home;
