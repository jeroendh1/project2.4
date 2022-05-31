import React, { useEffect, useState } from "react"
import {Container, Row, Col, Card, } from "react-bootstrap"
import {Line} from 'react-chartjs-2';
import { useParams } from "react-router-dom";
// eslint-disable-next-line
import { Chart as ChartJS } from 'chart.js/auto'
// import { Chart }            from 'react-chartjs-2'
// import { wait } from "@testing-library/user-event/dist/utils";
function Station(){
    const { stationid }= useParams();
    var localData = 0;
    var fetchedData;

    
  console.log('Data from station: '+stationid ); 
        
  const [data, setData] = useState(
      {
        labels: ["8:00","9:00","10:00","11:00"],
        datasets: [{
            label: "Wind speed in last 4 hours in km/h",
            data: [],
            fill: true,
            backgroundColor: "rgba(75,192,192,0.2)",
            borderColor: "rgba(75,192,192,1)"
        }]    
  }
  )

  useEffect(() => {
    fetch('http://10.0.0.41:8001/api/weatherData/fa151eab21beca2e70dc029fbeb6f8449c090059534f08f22425beb00346f862?columns=wind_speed')
    .then( response => response.json())
    .then( response => {
        fetchedData = {windSpeed: response[0].wind_speed, time: response[0].time}
        console.log('Chart gets updated with...',fetchedData)
        setData({
            labels: ["0:00",fetchedData.time],
            datasets: [{
                label: "Wind speed in last 24 hours in km/h",
                data: [localData,fetchedData.windSpeed],
                fill: true,
                backgroundColor: "rgba(75,192,192,0.2)",
                borderColor: "rgba(75,192,192,1)"
            }]
        })
    })
  }, [])



    return ( 
       <div className="Home">
            <>
                <Container>
                    <Row>
                        <Col sm={8}>
                        {/* <div id='map'></div> */}
                        <Line id="Graph" data={data} />
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
