import React, { useState } from "react"
import { link } from "react-router-dom"
import {Container, Row, Col, Card, } from "react-bootstrap"

function Home(){
    return (
       <div className="Home">
            <>
                <Container>
                    <Row>
                        <Col sm={8}><img className="img-fluid" src="map.png"/> </Col>
                        <Col sm={4}>
                        <Card className="center" style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>Top 10 Windiest Places</Card.Title>
                                <Card.Subtitle className="mb-4 text-muted">In Arabic peninsula</Card.Subtitle>
                                <Card.Text>
                                   1.<span class="ms-2">Oman</span> <span class="ms-4"> 80 km/h</span>
                                   <hr></hr>
                                   2.<span class="ms-2">Jemen</span> <span class="ms-4"> 75 km/h</span>
                                   <hr></hr>
                                   3.<span class="ms-2">Saudi-Arabië</span> <span class="ms-4"> 69 km/h</span>
                                   <hr></hr>
                                   4.<span class="ms-2">Egypte</span> <span class="ms-4"> 58 km/h</span>
                                   <hr></hr>
                                   5.<span class="ms-2">Iran</span> <span class="ms-4"> 57 km/h</span>
                                   <hr></hr>
                                </Card.Text>
                              
                            </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </>
       </div>
    )
}

export default Home