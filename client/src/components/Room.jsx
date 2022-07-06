/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useParams } from "react-router-dom";
import pegi3 from "../assets/img/pegi-3.png";
import pegi7 from "../assets/img/pegi-7.png";
import pegi16 from "../assets/img/pegi-16.png";
import pegi18 from "../assets/img/pegi-18.png";


export default function Room() {
  const [room, setRoom] = useState([]);
  const { id } = useParams();

  const getOneSalle = () => {
    fetch(`http://localhost:5000/salles/${id}`)
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        setRoom(result);
        console.log(result);
      });
  };

  useEffect(() => {
    getOneSalle();
  }, []);

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

  let days = [
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi",
    "Dimanche",
  ];

  return (
    <Card className="room">
      <div className="roomImg">
        <CardMedia
          component="img"
          height="140"
          image={room.img}
          alt={room.name}
        />
        <img src={img} className="logoPegi" />
      </div>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {room.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {room.description}
        </Typography>
      </CardContent>

      <table>
        {room.dispo?.map((day, indexDay) => {
          return (
            <td key={indexDay}>
              <th key={indexDay}>{days[indexDay]}</th>
              {day.map((dDay, indexDDay) => {
                return (
                  <>
                    {dDay && indexDDay === 0 ? (
                      <tr>
                        <a href={"/reservation/" + room._id + indexDay + indexDDay} className="dispo">Matin</a>
                      </tr>
                    ) : null}
                    {!dDay && indexDDay === 0 ? (
                      <tr>
                        <a className="notDispo">Matin</a></tr>
                    ) : null}
                    {dDay && indexDDay === 1 ? (
                      <tr>
                        <a href={"/reservation/" + room._id + indexDay + indexDDay} className="dispo">Aprèm</a></tr>
                    ) : null}
                    {!dDay && indexDDay === 1 ? (
                      <tr>
                        <a className="notDispo">Aprèm</a></tr>
                    ) : null}
                  </>
                );
              })}
            </td>
          );
        })}
      </table>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
