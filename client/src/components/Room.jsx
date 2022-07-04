import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
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
  let i=0;

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

      {/* <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Lundi</TableCell>
            <TableCell>Mardi</TableCell>
            <TableCell>Mercredi</TableCell>
            <TableCell>Jeudi</TableCell>
            <TableCell>Vendredi</TableCell>
            <TableCell>Samedi</TableCell>
            <TableCell>Dimanche</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {room.dispo.map((row) => (
            <TableRow
              key={room._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{room.dispo}</TableCell>
            </TableRow>
           ))}
        </TableBody>
      </Table>
    </TableContainer> */}
      <div>
        {room.dispo?.map((day) => {
          return day.map(() => {
            i++;
            return <p key={i}>dsds</p>;
          });
        })}
      </div>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
