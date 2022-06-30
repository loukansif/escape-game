import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function CardRoom(props) {
  return (
    <Card sx={{ maxWidth: 345, minWidth: 345, margin: 5 }}>
      <CardMedia
        component="img"
        height="140"
        image={props.salle.img}
        alt={props.salle.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.salle.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.salle.description.substring(0, 80)}...
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Détail</Button>
        <Button size="small">Réserver</Button>
      </CardActions>
    </Card>
  );
}
