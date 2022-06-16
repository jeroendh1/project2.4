import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Map from "../../components/map.js";
import {WindspeedWarnings, HumidityWarnings} from "../../components/Warnings.js";
import { useNavigate } from 'react-router-dom';
import { HUMIDITY_STATION_KEY, WIND_SPEED_STATION_KEY } from "../../App.js";
import { DownloadAll } from "../DownloadAll";
      
function Home() {
  var top10 = "";
  let stations = JSON.parse(localStorage.getItem(WIND_SPEED_STATION_KEY));
  let top10WindSpeeds = [];

  if( stations != null){

    top10WindSpeeds = Object.values(stations).sort(
      (a, b) => parseFloat(b.data[b.data.length -1 ].wind_speed) - parseFloat(a.data[a.data.length -1 ].wind_speed)
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
        top10WindSpeed.data[top10WindSpeed.data.length-1].wind_speed +
        " km/h </span></p><hr>";
    }
  }

  if( stations == null){
    return (
      <p>Geen geldige gegevens!</p>
    )
  }

  return (
    <div className="Home">
      <main>
        <Container>
          <Row>
            <Col className="mb-4" sm={12} md={8} lg={9}>
              <Map />
              <Row>
              <Col className="mt-6" md={12} lg={6}>
                  <Card className="center">
                    <Card.Body>
                      <Card.Title>Windspeed Data Set</Card.Title>
                      <DownloadAll data_key={WIND_SPEED_STATION_KEY}/>
                    </Card.Body>
                  </Card>
                </Col>
                <Col className="mt-6" md={12} lg={6}>
                  <Card className="center">
                    <Card.Body>
                      <Card.Title>Humidity Data Set</Card.Title>
                      <DownloadAll data_key={WIND_SPEED_STATION_KEY}/>
                    </Card.Body>
                  </Card>
                </Col>
                <Col className="mt-4" sm={0} md={4}>
                  <Card className="center ">
                    <Card.Body>
                      <Card.Title>Highest wind speed</Card.Title>
                      <Card.Subtitle className="mb-4 text-muted">
                        In and around Arabic peninsula
                      </Card.Subtitle>
                      <h6
                        className="mt-4"
                        dangerouslySetInnerHTML={{
                          __html:
                            top10WindSpeeds[0].location +
                            ", " +
                            top10WindSpeeds[0].country +
                            " " +
                            top10WindSpeeds[0].data[top10WindSpeeds[0].data.length-1].wind_speed +
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
                          __html:  Object.values(stations).length}}
                      ></h6>
                    </Card.Body>
                  </Card>
                </Col>
                <WindspeedWarnings></WindspeedWarnings>
                <HumidityWarnings></HumidityWarnings>
              </Row>
            </Col>
            <Col sm={12} md={4} lg={3}>
              <Card className="center ">
                <Card.Body>
                  <Card.Title>Top 10 Windiest Places</Card.Title>
                  <Card.Subtitle className="mb-4 text-muted">
                    In and around Arabic peninsula
                  </Card.Subtitle>
                  <div id="top10" dangerouslySetInnerHTML={{ __html: top10 }} />
                </Card.Body>
              </Card>
            </Col>
            <ul id='marker-list'></ul>
          </Row>
        </Container>
      </main>
    </div>
  );
}

export default Home;
