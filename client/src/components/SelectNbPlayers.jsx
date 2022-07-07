import React, { useState, useEffect } from "react";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Typography from "@mui/material/Typography";
import FormResa from "./FormResa"


export default function SelectNbPlayers(props) {
    const [nbPlayers, setNbPlayers] = useState()
    const min = props.minPlayers;
    const max = props.maxPlayers;

    let arrayNbplayers = [];
    for (let i = min; i <= max; i++) {
        arrayNbplayers.push(<MenuItem value={i}>{i}</MenuItem>)
    }

    function handleChange(e) {
        setNbPlayers(e.target.value)
    }

    return (
        <>    <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="nbparticipants">Nombre de participants</InputLabel>
                <Select
                    labelId="nbparticipants"
                    id="nbparticipants"
                    label="nombre de participants"
                    onChange={(e) => handleChange(e)}
                >
                    {arrayNbplayers}
                </Select>
            </FormControl>
        </Box>
            <Typography variant="body2" color="text.secondary">
                <FormResa nbPlayers={nbPlayers} />
            </Typography>
        </>

    );
}