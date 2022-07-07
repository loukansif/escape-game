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
let nbMinPlayers = 0;
let nbMaxPlayers = 0;

function FormResa(props) {
  const [btnSend, setBtnSend] = useState(true);
  const [btnAdd, setBtnAdd] = useState(true);
  let dispo = props.dispo;
  let idRoom = props.idRoom;

  let form = {
    firstName: "",
    lastName: "",
    birthday: new Date(),
  };
  let players = [];

  function handleChangeForm(event) {
    form[event.target.name] = event.target.value;
  }

  function addPlayer() {
    dispo[props.indexDay][props.indexDDay] = false;
    players.push({ ...form });
    nbMinPlayers++;
    nbMaxPlayers++;
    if (nbMaxPlayers == props.maxPlayers) {
      setBtnAdd(!btnAdd);
      console.log("btnAdd ok");
    }
    console.log(players);
    console.log(dispo);
  }
  function handleRoomDispo() {
   
    // fetch(`http://localhost:5000/salles/${idRoom}`, {
    //   method: "PUT",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(dispo),
    // })
    //   .then(() => {
    //     alert("Salle mise à jour");
    //   })
    //   .catch((error) => {
    //     window.alert(error);
    //     return;
    //   });

    fetch(`http://localhost:5000/salles/${idRoom}`, {
      method: 'put',
      body: JSON.stringify(dispo),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(()=>console.log('updated!!!'))
      .catch((error) => {
            window.alert(error);
            return;
          });
    
  }

  function handleSubmit(event) {
    event.preventDefault();
    let data = {
      nameRoom: props.nameRoom,
      idUser: localStorage.getItem("id"),
      dayReservation: new Date(),
      players: players,
    };
    fetch("http://localhost:5000/reservations/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    .then(() => {
      handleRoomDispo()
    })
    .then(() => {
      alert("Votre réservation est enregitrée");
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
            <Typography component="h1" variant="h5" sx={{ marginBottom: 3 }}>
              Liste des participants
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={3}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  label="Prénom"
                  onChange={handleChangeForm}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={3}>
                <TextField
                  required
                  fullWidth
                  label="Nom"
                  name="lastName"
                  onChange={handleChangeForm}
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item sm={3}>
                <TextField
                  required
                  helperText="Date de naissance"
                  fullWidth
                  name="birthday"
                  type="date"
                  onChange={handleChangeForm}
                  autoComplete=""
                />
              </Grid>
              <Button sm={3} onClick={addPlayer} disabled={!btnAdd}>
                Ajouter
              </Button>
            </Grid>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                disabled={!btnSend}
              >
                Réserver
              </Button>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default FormResa;
