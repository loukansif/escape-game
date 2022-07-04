import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useParams } from "react-router-dom";

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
      });
  };
  useEffect(() => {
    getOneSalle();
  }, []);

  return (
    <Card  className="room">
      <CardMedia
        component="img"
        height="140"
        image={room.img}
        alt={room.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {room.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {room.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
