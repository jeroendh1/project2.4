import React, { useRef, useEffect, useState } from "react"
import {Container, Row, Col, Card, } from "react-bootstrap"
import {Line} from 'react-chartjs-2';

import { Chart as ChartJS } from 'chart.js/auto'
import { Chart }            from 'react-chartjs-2'
// eslint-disable-next-line import/no-webpack-loader-syntax

const getData = async () => {
    const response = await fetch('http://127.0.0.1:8000/api/weatherData/wind_speed/fa151eab21beca2e70dc029fbeb6f8449c090059534f08f22425beb00346f862');
    const stationsdata = await response.json();
    console.log(stationsdata);
}
getData();

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
  {
  label: "First dataset",
  data: [33, 53, 85, 41, 44, 65],
  fill: true,
  backgroundColor: "rgba(75,192,192,0.2)",
  borderColor: "rgba(75,192,192,1)"
  },
  {
  label: "Second dataset",
  data: [33, 25, 35, 51, 54, 76],
  fill: false,
  borderColor: "#742774"
  }
  ]
  };

function Station(){

  // const mapContainer = useRef(null);



  // const ChartPage = () => {

  //   return (
  //     <div>
  //     </div>
  //   )
  // }

    return ( 
       <div className="Home">
            <>
                <Container>
                    <Row>
                        <Col sm={8}>
                        {/* <div id='map'></div> */}
                        <Line data={data} />
                            {/* <img className="img-fluid" src="map.png"/> */}
                             </Col>
                        <Col sm={4}>
                        <Card className="center" style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>Top 10 Windiest Places</Card.Title>
                                <Card.Subtitle className="mb-4 text-muted">In Arabic peninsula</Card.Subtitle>
                                   1.<span className="ms-2">Oman</span> <span className="ms-4"> 80 km/h</span>
                                   <hr></hr>
                                   2.<span className="ms-2">Jemen</span> <span className="ms-4"> 75 km/h</span>
                                   <hr></hr>
                                   3.<span className="ms-2">Saudi-Arabië</span> <span className="ms-4"> 69 km/h</span>
                                   <hr></hr>
                                   4.<span className="ms-2">Qatar</span> <span className="ms-4"> 58 km/h</span>
                                   <hr></hr>
                                   5.<span className="ms-2">Iran</span> <span className="ms-4"> 57 km/h</span>
                                   <hr></hr>
                            
                            </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
              
            </>
       </div>
       
    )
 
}

export default Station