import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function CardRoom(props) {
 
  return (
    <Card sx={{ maxWidth: 345, minWidth: 345, margin: 3 }}>
     
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.oneresa.idRoom}
        </Typography>
        {props.oneresa.players.map((element)=>
            <Typography gutterBottom variant="h5" component="div">
                <p>{element['00']}</p>
                <p>{element['01']}</p>
                <p>{element['11']}</p>
                <p>{element['10']}</p>
                <p>{element['20']}</p>
                
            {console.log(element)}
          </Typography>
        )}
        
      </CardContent>
      
    </Card>
  );
}
