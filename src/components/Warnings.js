import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { Card, Col, Button, Row} from "react-bootstrap";
import { HUMIDITY_STATION_KEY, HUMIDITY_THRESHOLD, WIND_SPEED_STATION_KEY, WIND_SPEED_THRESHOLD } from "../App";

export function WindspeedWarnings() {
    const navigate = useNavigate();
    const stations = JSON.parse(localStorage.getItem(WIND_SPEED_STATION_KEY));
    const sorted_stations = [];

    for (const [id, station] of Object.entries(stations)) {
        if (station.warning) sorted_stations.push(id);
    }

    sorted_stations.sort((a, b) => stations[a].data[stations[a].data.length - 1].wind_speed - stations[b].data[stations[b].data.length - 1].wind_speed);

    return (
        <Col className="mt-6" md={6}>
            <Card className="center">
                <Card.Body>
                    {sorted_stations.length > 0 ? (
                        <Card.Title className="text-danger">Windspeed Warnings</Card.Title>
                    ) : (
                        <Card.Title className="text-dark">Windspeed Warnings</Card.Title>
                    )}
                    <Row>
                        {sorted_stations.length > 0? (sorted_stations.map((id, index) => {
                            const station = stations[id];
                            const warning = station.warning;

                            if (!warning) return;

                            const country = station.country;
                            const location = station.location;

                            return (
                                <Col key={index} className="mt-1" md={4}>
                                    <Card className="center" >
                                        <Card.Body>
                                            <Card.Title>{id}</Card.Title>
                                            <Card.Subtitle className="mb-4 text-muted">{location}, {country}</Card.Subtitle>
                                            <Button className="btn btn-danger" onClick={() => { localStorage.setItem("currentDataType", "Wind speed"); navigate(`station/${id}`);}}>See More</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            );
                        })) : (
                            <Card.Subtitle className="text-success">No Warnings</Card.Subtitle>
                        )}
                    </Row>
                </Card.Body>
            </Card> 
        </Col>
    );
}

export function HumidityWarnings() {
    const navigate = useNavigate();
    const stations = JSON.parse(localStorage.getItem(HUMIDITY_STATION_KEY));
    const sorted_stations = [];

    for (const [id, station] of Object.entries(stations)) {
        if (station.warning) sorted_stations.push(id);
    }

    sorted_stations.sort((a, b) => stations[a].data[stations[a].data.length - 1].humidity - stations[b].data[stations[b].data.length - 1].humidity);

    return (
        <Col className="mt-6" md={6}>
            <Card className="center">
                <Card.Body>
                    {sorted_stations.length > 0 ? (
                        <Card.Title className="text-danger">Humidity Warnings</Card.Title>
                    ) : (
                        <Card.Title className="text-dark">Humidity Warnings</Card.Title>
                    )}
                    <Row>
                        {sorted_stations.length > 0? (sorted_stations.map((id, index) => {
                            const station = stations[id];
                            const warning = station.warning;

                            if (!warning) return;

                            const country = station.country;
                            const location = station.location;

                            return (
                                <Col key={index} className="mt-1" md={4}>
                                    <Card className="center" >
                                        <Card.Body>
                                            <Card.Title>{id}</Card.Title>
                                            <Card.Subtitle className="mb-4 text-muted">{location}, {country}</Card.Subtitle>
                                            <Button className="btn btn-danger" onClick={() => { localStorage.setItem("currentDataType", "Humidity"); navigate(`station/${id}`);}}>See More</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            );
                        })) : (
                            <Card.Subtitle className="text-success">No Warnings</Card.Subtitle>
                        )}
                    </Row>
                </Card.Body>
            </Card> 
        </Col>
    );
}