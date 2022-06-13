import React from "react";
import { useNavigate } from 'react-router-dom';
import { Card, Col, Button} from "react-bootstrap";
import { HUMIDITY_THRESHOLD, WIND_SPEED_THRESHOLD } from "../App";

export default function Warnings() {
    const navigate = useNavigate();
    const stations = JSON.parse(localStorage.getItem("stations"));

    return Object.entries(stations).map((element, index) => {
        const id = element[0];
        const station = element[1];
        const warning = station.warning;

        if (!warning) return;

        const country = station.country;
        const location = station.location;
        const humidity = station.data[station.data.length - 1].humidity;
        const wind_speed = station.data[station.data.length - 1].wind_speed;
        return (
            <Col key={index} className="mt-4" md={4}>
                <Card className="center btn btn-outline-dark" onClick={() => navigate(`station/${id}`)}>
                    <Card.Body>
                        <Card.Title>Station: {id}</Card.Title>
                        <Card.Subtitle className="mb-4 text-muted">{location}, {country}</Card.Subtitle>
                        {humidity > HUMIDITY_THRESHOLD && (<Card.Title className="text-danger">Humidity Threshold Exceeded</Card.Title>)}
                        {wind_speed > WIND_SPEED_THRESHOLD && (<Card.Title className="text-danger">Windspeed Threshold Exceeded</Card.Title>)}
                    </Card.Body>
                </Card>
            </Col>
        );
    });
}