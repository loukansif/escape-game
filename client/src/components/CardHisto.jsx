import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function CardRoom(props) {
 
  return (
    <Card sx={{ maxWidth: 345, minWidth: 345, margin: 3 }}>
     
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.oneresa._id}
        </Typography>
        {props.oneresa.players.map((element)=>
            <Typography gutterBottom variant="h5" component="div">
                <p>{element.firstname}</p>
            {console.log(element)}
          </Typography>
        )}
        
      </CardContent>
      
    </Card>
  );
}
