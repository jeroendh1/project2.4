import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Map from "../../components/map.js";

var top10 = "";
let stations = JSON.parse(localStorage.getItem("stations"));
// for (const station of stations){
//   console.log(station)
// }
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
   
      
function Home() {
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
            <ul id='marker-list'></ul>
          </Row>
        </Container>
      </main>
    </div>
  );
}

export default Home;
