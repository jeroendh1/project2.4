import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Map from '../../components/map.js';




function Home() {
  

  return (
    <div className="Home">
      <main>
        <Container>
          <Row>
            <Col className="mb-4" sm={12} md={8} lg={9}>
            <Map/>
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
