import React, { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom';
import {Container, Row, Col, Card, } from "react-bootstrap"
import {Line} from 'react-chartjs-2';
import { useParams } from "react-router-dom";
// eslint-disable-next-line
import { Chart as ChartJS } from 'chart.js/auto'
// import { Chart }            from 'react-chartjs-2'
// import { wait } from "@testing-library/user-event/dist/utils";
function Station(){
    if (localStorage.getItem("currentDataType") == null) localStorage.setItem("currentDataType", "Windspeed");   
    const navigate = useNavigate();
    const stationId = useParams().stationid;
    var localData = 0;
    var fetchedTimeData = [];
    var fetchedTypeData = [];
    // var dataType = localStorage.getItem("currentDataType")

    
  console.log('Data from station: '+stationId ); 

  var [dataType, setDataType] = useState(
    localStorage.getItem("currentDataType")
  )     
  const [data, setData] = useState(
      {
        labels: [],
        datasets: [{
            label: dataType+" in last 7 days in km/h",
            data: [],
            fill: true,
            backgroundColor: "rgba(75,192,192,0.2)",
            borderColor: "rgba(75,192,192,1)"
        }]    
  }
  )

  useEffect(() => {
      console.log('update with '+dataType)
    let date = new Date();    
    fetchedTimeData = [];
    fetchedTypeData = [];
    const today = date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate();
    date.setDate(date.getDate() - 70);
    const lastWeek = date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate();
    console.log('Getting data from: http://10.0.0.41:8001/api/weatherData/fa151eab21beca2e70dc029fbeb6f8449c090059534f08f22425beb00346f862?columns=wind_speed,cloud_cover&date_start='+ lastWeek+'&date_end='+today)
    fetch('http://10.0.0.41:8001/api/weatherData/fa151eab21beca2e70dc029fbeb6f8449c090059534f08f22425beb00346f862?columns=wind_speed,cloud_cover&date_start='+ lastWeek+'&date_end='+today)
    .then( response => response.json())
    .then( response => {
        console.log(response)
        if (response.length != 0) {
            response.forEach(element => { 
                if (element.station_id == stationId) {
                    let typeData;
                    if (dataType == 'Wind speed') typeData = element.wind_speed
                    else if (dataType == 'Humidity') typeData = element.cloud_cover
                    else document.getElementById('noData').innerHTML = 'No data available for data type';
                    const time = element.date +' '+ element.time
                    fetchedTimeData.push(time)
                    fetchedTypeData.push(typeData)      
                }                
            });
            // fetchedData = {windSpeed: response[0].wind_speed, time: response[0].time}
            console.log('Chart gets updated with...',fetchedTypeData, fetchedTimeData)
            var measurement = ' km/h'
            if (dataType == 'Humidity') measurement = ' %'
            setData({
                labels: fetchedTimeData,
                datasets: [{
                    label: dataType+" in last 7 days in"+measurement,
                    data: fetchedTypeData,
                    fill: true,
                    backgroundColor: "rgba(75,192,192,0.2)",
                    borderColor: "rgba(75,192,192,1)"
                }]
            })
        } else {
            document.getElementById('noData').innerHTML = 'No data available from last 7 days';
        }
    })
  }, [dataType])


  function changeDataType(type) {
    localStorage.setItem("currentDataType", type)
  }

    return ( 
       <div className="Home">
            <>
                <Container>
                    <Row>
                        <Col sm={8}>
                        {/* <div id='map'></div> */}
                        <div id="noData"></div>
                        <button id="Windspeed" className="dataTypeButton" onClick={() => {localStorage.setItem('currentDataType', 'Wind speed'); setDataType('Wind speed')}}>Wind speed</button>
                        <button id="Humidity" className="dataTypeButton" onClick={() => {localStorage.setItem('currentDataType', 'Humidity'); setDataType('Humidity')}}>Humidity</button>
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
