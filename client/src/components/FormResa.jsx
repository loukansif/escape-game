import React, { useState, useEffect } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";


const theme = createTheme();
let btnActive = true;

function FormResa(props) {
    const nbPlayers = props.nbPlayers;
    const [form, setForm] = useState([]);
    
        function updatePlayers(event) {
            let newForm = form
            newForm[event.target.name]  = event.target.value
            setForm({...newForm})
        }
   
   
    let arrayPlayers =[]
    for (let index = 0; index < nbPlayers; index++) {
        arrayPlayers.push( <Grid container spacing={2} id={index} onBlur={updatePlayers}>
            <Grid item xs={12} sm={4}>
                <TextField
                    autoComplete="given-name"
                    name={index + "0"}
                    required
                    fullWidth
                    label="Prénom"
                    //onBlur={updatePlayers}
                    autoFocus
                />
            </Grid>
            <Grid item xs={12} sm={4}>
                <TextField
                    required
                    fullWidth
                    label="Nom"
                    name={index +"1"}
                    //onBlur={updatePlayers}
                    autoComplete="family-name"
                />
            </Grid>
            <Grid item sm={4}>
                <TextField
                    required
                    helperText="Date de naissance du participant"
                    fullWidth
                    name={index + "2" }
                    type="date"
                    //onBlur={updatePlayers}
                    autoComplete=""
                />
            </Grid>
        </Grid>)
    }    

    function handleSubmit(event) {
    event.preventDefault()
    let players = {idRoom:props.roomname,iduser:localStorage.getItem('userId'),players:form};
    players = {...players}
    console.log(players);
   // let players = [ newReservation.slice(0,2) ]
    fetch("http://localhost:5000/reservations/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(players),
      })
        .then(() => {
          alert("vous etes enregistré");
        })
        .catch((error) => {
          window.alert(error);
          return;
        });
}
    return (
        <>
            <ThemeProvider theme={theme}>
                <Container component="main" maxWidth="xl">
                    <CssBaseline />
                    <Box
                        sx={{
                            marginTop: 8,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <Typography component="h1" variant="h5">
                            Liste des participants
                        </Typography>
                        <Box
                            component="form"
                            noValidate
                            onSubmit={handleSubmit}
                            sx={{ mt: 3 }}
                        >    
                          {arrayPlayers}
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                                disabled={!btnActive}
                            >
                                Réserver
                            </Button>
                        </Box>
                    </Box>
                </Container>
            </ThemeProvider>
        </>
    )
}

export default FormResa


    