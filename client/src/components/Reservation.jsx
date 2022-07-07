import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import pegi3 from "../assets/img/pegi-3.png";
import pegi7 from "../assets/img/pegi-7.png";
import pegi16 from "../assets/img/pegi-16.png";
import pegi18 from "../assets/img/pegi-18.png";
import FormResa from "./FormResa";
const theme = createTheme();

function Reservation() {
  const [room, setRoom] = useState([]);
  // const [minPlayers, setMinPlayers] = useState([]);
  const paramResa = useParams();
  let days = [
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi",
    "Dimanche",
  ];
  let img = "";
  switch (room.age) {
    case 7:
      img = pegi7;
      break;
    case 16:
      img = pegi16;
      break;
    case 18:
      img = pegi18;
      break;
    default:
      img = pegi3;
      break;
  }

  // pour pouvoir créer les champs d'insription en fonction du nombre minimum de participants

  const getOneSalle = () => {
    fetch(`http://localhost:5000/salles/${paramResa.id}`)
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        setRoom(result);
      });
  };

  useEffect(() => {
    getOneSalle();
  }, []);
  return (
    <>
      <div className="app">Reservation</div>

      <Card className="room">
        <div className="roomImg">
          <CardMedia component="img" image={room.img} alt={room.name} />
          <img src={img} className="logoPegi" />
        </div>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <p>
              Vous allez réserver la salle "<span>{room.name}" </span>
              pour{" "}
              <span>
                {days[paramResa.indexDay]}
                {paramResa.indexDDay == 0 ? " matin" : " apres midi"}
              </span>
            </p>
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            <p>
              Le nombre de participants doit être compris entre:{" "}
              <span>
                {room.minplayers} et {room.capacity}
              </span>{" "}
            </p>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <FormResa minPlayers={room.minplayers} maxPlayers={room.capacity} nameRoom={room.name} dispo={room.dispo} idRoom={room._id} indexDay={paramResa.indexDay} indexDDay={paramResa.indexDDay} />
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}

export default Reservation;
