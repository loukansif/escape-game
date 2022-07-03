import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import pegi3 from "../assets/img/pegi-3.png";
import pegi7 from "../assets/img/pegi-7.png";
import pegi16 from "../assets/img/pegi-16.png";
import pegi18 from "../assets/img/pegi-18.png";

export default function CardRoom(props) {
  let img = "";
  switch (props.room.age) {
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
    <Card sx={{ maxWidth: 345, minWidth: 345, margin: 3 }}>
      <CardMedia
        component="img"
        height="140"
        image={props.room.img}
        alt={props.room.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.room.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.room.description.substring(0, 80)}...
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div>
          <Button size="small">Détail</Button>
          <Button size="small">Réserver</Button>
        </div>
        <img src={img} alt={"image"} className="imgPegi" />
      </CardActions>
    </Card>
  );
}
