/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useParams } from "react-router-dom";
import CardHisto from './CardHisto'


export default function HistoResa() {
    const [histo, setHisto] = useState([]);
    const { iduser } = useParams();

    const getReservations = () => {
        fetch(`http://localhost:5000/reservations/`)
            .then((response) => {
                return response.json();
            })
            .then((result) => {
                setHisto(result);
            });
    };

    useEffect(() => {
        getReservations();
    }, []);


    return (
        <>
            <h1 className="title">Historique de vos réservations</h1>
            <div className="rooms">
                {histo.map((oneresa) => {
                    if (localStorage.getItem('userId') == oneresa.iduser) {
                        return <CardHisto oneresa={oneresa} key={oneresa._id} />;
                   }
                })}
            </div>
        </>
    )
}
