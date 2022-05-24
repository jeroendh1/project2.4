import React, { useRef, useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import mapboxgl from "mapbox-gl";
mapboxgl.accessToken =
  "pk.eyJ1IjoiamVyb2VuZGVoYWFuIiwiYSI6ImNsM2Rjdjg0cDA3N2oza3B2M2pyZmxxcGcifQ.xw6YF9mf-O3M7FFjZ41SHA";
// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default;


const mapContainer = React.createRef();
const map = {};
const markers = {
  type: "FeatureCollection",
  features: [],
};

const getData = async () => {
  await fetch(
    "http://127.0.0.1:8000/api/weatherData/wind_speed/fa151eab21beca2e70dc029fbeb6f8449c090059534f08f22425beb00346f862"
  )
    .then(async (response) => {
      await response.json().then((stationsdata) => {
        if (response.status == 200) {
          for (const stationdata of stationsdata) {
            markers.features.push({
              type: "Feature",
              geometry: {
                type: "Point",
                coordinates: [stationdata.longitude, stationdata.latitude],
              },
              properties: {
                country: stationdata.country,
                windSpeed: stationdata.wind_speed,
                location: stationdata.location,
              },
            });
          }
          let top10WindSpeed = stationsdata.sort(
            (a, b) => parseFloat(b.wind_speed) - parseFloat(a.wind_speed)
          );
          top10WindSpeed.length = 10;
        }
      });
    })
    .catch((err) => {
        console.log(err)
      // localStorage.setItem(, JSON.stringify());
      alert();
    });
};

// useEffect(() => {
   getData().then(() => {
    // initialize map only once
    if (map.current) return;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [45.318161, 20.033],
      zoom: 3,
    });

    // add controls
    map.current.addControl(new mapboxgl.NavigationControl());

    // add markers
    for (const feature of markers.features) {
      // create a HTML element for each feature
      const el = document.createElement("div");
      el.className = "marker";
      // make a marker for each feature and add it to the map
      new mapboxgl.Marker(el)
        .setLngLat(feature.geometry.coordinates)
        .setPopup(
          new mapboxgl.Popup({ offset: 25 }) // add popups
            .setHTML(
              `<p><strong>${feature.properties.country}</strong><br>${feature.properties.location}</p> <p> Wind ${feature.properties.windSpeed} km/h</p>`
            )
        )
        .addTo(map.current);
    }
  });
// });

function Home() {
  return (
    <div className="Home">
      <main>
        <Container>
          <Row>
            <Col className="mb-4" sm={12} md={8} lg={9}>
              <div ref={mapContainer} className="map-container" />
            </Col>
            <Col sm={12} md={4} lg={3}>
              <Card className="center map-container">
                <Card.Body>
                  <Card.Title>Top 10 Windiest Places</Card.Title>
                  <Card.Subtitle className="mb-4 text-muted">
                    In Arabic peninsula
                  </Card.Subtitle>
                  1.<span className="ms-2">Oman</span>
                  <span className="ms-4"> 80 km/h</span>
                  <hr></hr>
                  2.<span className="ms-2">Jemen</span>
                  <span className="ms-4"> 75 km/h</span>
                  <hr></hr>
                  3.<span className="ms-2">Saudi-Arabië</span>
                  <span className="ms-4"> 69 km/h</span>
                  <hr></hr>
                  4.<span className="ms-2">Qatar</span>
                  <span className="ms-4"> 58 km/h</span>
                  <hr></hr>
                  5.<span className="ms-2">Iran</span>
                  <span className="ms-4"> 57 km/h</span>
                  <hr></hr>
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
