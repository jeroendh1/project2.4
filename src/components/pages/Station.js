import React, { useRef, useEffect, useState } from "react"
import {Container, Row, Col, Card, } from "react-bootstrap"
import {Line} from 'react-chartjs-2';
import { useParams } from "react-router-dom";

import { Chart as ChartJS } from 'chart.js/auto'
import { Chart }            from 'react-chartjs-2'
import { wait } from "@testing-library/user-event/dist/utils";
function Station(){
    const { stationid }= useParams();
    var chartData = [0,9.5];
    
    
    const getData = async () => {
         
        const response = await fetch('http://192.168.2.4:8001/api/weatherData/wind_speed/fa151eab21beca2e70dc029fbeb6f8449c090059534f08f22425beb00346f862/' + stationid);
        const stationsdata = await response.json();
        const windSpeed = await stationsdata[0]['wind_speed'];
        console.log(windSpeed);
        return windSpeed;
        
    }
    
    chartData.push(getData());
    chartData.push(80);
    console.log(chartData);
  const data = {
  labels: ['jan',"Jan","Jan","Jan","Jan","Jan","Jan","Jan","Jan","Jan"],
  datasets: [
  {
  label: "First dataset",
  data: chartData,
  fill: true,
  backgroundColor: "rgba(75,192,192,0.2)",
  borderColor: "rgba(75,192,192,1)"
  }
  ]
  };


  // const mapContainer = useRef(null);



  // const ChartPage = () => {

  //   return (
  //     <div>
  //     </div>
  //   )
  // }

//   const { stationid } = useParams();
  console.log(stationid );

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