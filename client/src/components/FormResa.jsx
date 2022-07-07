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
    players.push({ ...form });
    nbMinPlayers++;
    nbMaxPlayers++;
    // if (nbMinPlayers == props.minPlayers) {    
    //   setBtnSend(!btnSend);
    //   console.log("btnSend ok");
    // }
    if (nbMaxPlayers == props.maxPlayers) {
      setBtnAdd(!btnAdd);
      console.log("btnAdd ok");
    }
    console.log(players);
  }

//   function handleSubmit() {
//     let newReservation;
//     fetch("http://localhost:5000/reservations/", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(newReservation),
//     })
//       .then(() => {
//         alert("vous etes enregistré");
//       })
//       .catch((error) => {
//         window.alert(error);
//         return;
//       });
//   }

  function handleSubmit(event) {
    event.preventDefault()
    // let players = {idRoom:props.roomname,iduser:localStorage.getItem('userId'),players:form};
    // players = {...players}
    // console.log(players);
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
              {/* //////////////////////////////////////////////////////////////////// */}
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
                    helperText="Date de naissance du participant"
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
              {/* //////////////////////////////////////////////////////////////////////////// */}
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
              {/* <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                disabled={!btnSend}
              >
                Réserver
              </Button> */}
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default FormResa;
