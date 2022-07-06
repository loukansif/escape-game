/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import img from "../assets/img/logo-escapegame.png";


export default function ButtonAppBar() {

  const deconnect = () => {
    localStorage.setItem("userLastName", "")
    localStorage.setItem("userFirtsName", "")
    localStorage.setItem("userEmail", "")
    localStorage.setItem("userIsLogged", "")
    localStorage.setItem("userAdmin", "")
    window.location.reload()
  }

  // let userIsconnect = sessionStorage.getItem('userIsLogged')
  // let connect
  // if(userIsconnect != null){
  //   connect = true
  //   }else{
  //     connect = false
  //   }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{position:"fixed", bgcolor:"#6059bd"}}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <a href="/">
              <img src={img} className="logoImg"></img>{" "}
            </a>
          </Typography>
          {localStorage.getItem('userIsLogged') ?
            <>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <p>Bonjour {localStorage.getItem('userFirtsName')}</p>
              </Typography>
              <Button color="error" href="/historique">
                Historique
              </Button>
              <Button color="inherit" onClick={deconnect}>
                Déconnexion
              </Button>
            </>

            :  <Button color="inherit" href="/connexion">
                Connexion
              </Button>}
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, marginLeft: 1 }}
          >
            <MenuIcon />
          </IconButton> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
