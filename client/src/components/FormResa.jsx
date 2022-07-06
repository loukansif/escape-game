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

function FormResa(props) {
    const test = props.roomMinPlayers;
    let arrayPalyers =[]
    for (let index = 0; index < test; index++) {
        arrayPalyers.push( <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
                <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="Prénom"
                    // onChange={(e) => updateForm({ firstname: e.target.value })}
                    autoFocus
                />
            </Grid>
            <Grid item xs={12} sm={4}>
                <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Nom"
                    name="lastName"
                    // onChange={(e) => updateForm({ lastname: e.target.value })}
                    autoComplete="family-name"
                />
            </Grid>
            <Grid item sm={4}>
                <TextField
                    required
                    helperText="Date de naissance du participant"
                    fullWidth
                    id="birthday"
                    name="birthday"
                    type="date"
                    // onChange={(e) => updateForm({ birthday: e.target.value })}
                    autoComplete=""
                />
            </Grid>
        </Grid>)
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
                            // onSubmit={handleSubmit}
                            sx={{ mt: 3 }}
                        >
                         
                          {arrayPalyers}
                          <Button
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                                // onclick={}
                            >
                                Ajouter un participant
                            </Button>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
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


    