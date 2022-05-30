<<<<<<< HEAD
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Map from "../../components/map.js";
var top10 = "";
let stations = JSON.parse(localStorage.getItem("stations"));
let top10WindSpeeds = stations.sort(
  (a, b) => parseFloat(b.wind_speed) - parseFloat(a.wind_speed)
);
top10WindSpeeds.length = 10;

for (const top10WindSpeed of top10WindSpeeds) {
  top10 =
    top10 +
    '<p><span class="ms-2 float-start">' +
    top10WindSpeed.location +
    ",  " +
    top10WindSpeed.country +
    '</span><span class="ms-4 float-end"> ' +
    top10WindSpeed.wind_speed +
    " km/h </span></p><hr>";
}
=======
import React, { useRef, useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom';
import {Container, Row, Col, Card, } from "react-bootstrap"
import mapboxgl from 'mapbox-gl';
import { Link } from "react-router-dom";
import { click } from "@testing-library/user-event/dist/click";
mapboxgl.accessToken = 'pk.eyJ1IjoiamVyb2VuZGVoYWFuIiwiYSI6ImNsM2Rjdjg0cDA3N2oza3B2M2pyZmxxcGcifQ.xw6YF9mf-O3M7FFjZ41SHA';

// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default
function Home(){

  const mapContainer = useRef(null);
  const map = useRef(null);
  const navigate = useNavigate();
  
  const markers = {
    'type': 'FeatureCollection',
    'features': []};

    const getData = async () => {

        const response = await fetch('http://192.168.2.4:8001/api/weatherData/wind_speed/fa151eab21beca2e70dc029fbeb6f8449c090059534f08f22425beb00346f862');
        const stationsdata = await response.json(); 

        if (response.status == 200 ){
            for (const stationdata of stationsdata) {
              
                markers.features.push({'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [ stationdata.longitude, stationdata.latitude] },'properties': { 'country':stationdata.country, 'windSpeed':stationdata.wind_speed, 'location':stationdata.location, 'stationId': stationdata.station_id}});
            }
        }
        const top10WindSpeed = stationsdata.sort((a, b) => parseFloat(b.wind_speed) - parseFloat(a.wind_speed));
        top10WindSpeed.length = 10;

        if (map.current) return; // initialize map only once
       
        map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [ 45.318161 , 20.03300],
        zoom: 3
        });

        // add controls
        map.current.addControl(new mapboxgl.NavigationControl()); 

        // add markers
        for (const feature of markers.features) {
            // create a HTML element for each feature
            const el = document.createElement('div');
            el.className = 'marker';
            el.id = feature.properties.stationId;
            // make a marker for each feature and add it to the map
            new mapboxgl.Marker(el)
            .setLngLat(feature.geometry.coordinates)
            .setPopup(
            new mapboxgl.Popup({ offset: 25 }) // add popups
            .setHTML( `<p><strong>${feature.properties.country}</strong><br>${feature.properties.location}</p><p class="markerLink" id="${feature.properties.stationId}">Station: ${feature.properties.stationId}</p> <p> Wind ${feature.properties.windSpeed} km/h</p>`)
            )
            .addTo(map.current);
            }
            
        setTimeout(() => {
            console.log(document.querySelector('div.marker'));
            const markers = document.querySelectorAll('div.marker');
            markers.forEach(marker => marker.addEventListener('click', function() {
                navigate('/station/'+marker.id)}))            
        }, 0);
            
    

      }
    
    useEffect(() => {
      getData();      
    });
    
>>>>>>> origin/Station

function Home() {
  return (
    <div className="Home">
      <main>
        <Container>
          <Row>
            <Col className="mb-4" sm={12} md={8} lg={9}>
              <Map />
              <Row>
                <Col className="mt-4" sm={0} md={4}>
                  <Card className="center ">
                    <Card.Body>
                      <Card.Title>Highest wind speed</Card.Title>
                      <Card.Subtitle className="mb-4 text-muted">
                        In Arabic peninsula
                      </Card.Subtitle>
                      <h6
                        className="mt-4"
                        dangerouslySetInnerHTML={{
                          __html:
                            top10WindSpeeds[0].location +
                            ", " +
                            top10WindSpeeds[0].country +
                            " " +
                            top10WindSpeeds[0].wind_speed +
                            "Km/h",
                        }}
                      ></h6>
                    </Card.Body>
                  </Card>
                </Col>
                <Col className="mt-4" md={4}>
                  <Card className="center ">
                    <Card.Body>
                      <Card.Title>Highest humidity</Card.Title>
                      <Card.Subtitle className="mb-4 text-muted">
                        In Arabic peninsula
                      </Card.Subtitle>
                      <h6 className="mt-4">Badiyah, Oman 76% </h6>
                    </Card.Body>
                  </Card>
                </Col>
                <Col className="mt-4"  md={4}>
                  <Card className="center ">
                    <Card.Body>
                      <Card.Title>Total number of stations</Card.Title>
                      <Card.Subtitle className="mb-4 text-muted">
                        In Arabic peninsula
                      </Card.Subtitle>
                      <h6
                        dangerouslySetInnerHTML={{
                          __html:  JSON.parse(localStorage.getItem("stations")).length}}
                      ></h6>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Col>
            <Col sm={12} md={4} lg={3}>
              <Card className="center ">
                <Card.Body>
                  <Card.Title>Top 10 Windiest Places</Card.Title>
                  <Card.Subtitle className="mb-4 text-muted">
                    In Arabic peninsula
                  </Card.Subtitle>
                  <div id="top10" dangerouslySetInnerHTML={{ __html: top10 }} />
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </main>
    </div>
  );
}

export default Home;
