import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Line } from "react-chartjs-2";
import { useParams } from "react-router-dom";
// eslint-disable-next-line
import { Chart as ChartJS } from "chart.js/auto";
import { HUMIDITY_STATION_KEY, WIND_SPEED_STATION_KEY } from "../../App.js";
import { DownloadStation } from "../DownloadStation";
// import { Chart }            from 'react-chartjs-2'
// import { wait } from "@testing-library/user-event/dist/utils";
function Station() {
  if (localStorage.getItem("currentDataType") == null)
    localStorage.setItem("currentDataType", "Wind speed");
  const stationId = useParams().stationid;

  var humidityClassName = "dataTypeButton ms-2 btn btn-primary"
  
  var fetchedTimeData = [];
  var fetchedTypeData = [];
  var dataType = localStorage.getItem("currentDataType");
  let dataKey = dataType === "Wind speed" ? WIND_SPEED_STATION_KEY : HUMIDITY_STATION_KEY;
  
  let stations = JSON.parse(localStorage.getItem(dataKey));
  if (!JSON.parse(localStorage.getItem(HUMIDITY_STATION_KEY)).hasOwnProperty(stationId)) {
    humidityClassName = 'disabled';
    localStorage.setItem("currentDataType", "Wind speed");
    dataKey = WIND_SPEED_STATION_KEY;
    stations = JSON.parse(localStorage.getItem(WIND_SPEED_STATION_KEY));
  }

  var lastChartDay = '';

  var [dataType, setDataType] = useState(
    localStorage.getItem("currentDataType")
  );
  const [data, setData] = useState({
    labels: [],
    datasets: [
      {
        label: dataType + " in last 7 days in km/h",
        data: [],
        fill: true,
        backgroundColor: "rgba(151, 201, 62, 0.2)",
        borderColor: "rgba(151, 201, 62, 1)",        
      },
      
    ],
  });

  useEffect(() => {
    fetchedTimeData = [];
    fetchedTypeData = [];

    if (dataType == "Wind speed")  stations = JSON.parse(localStorage.getItem(WIND_SPEED_STATION_KEY));
    if (dataType == "Humidity")  stations = JSON.parse(localStorage.getItem(HUMIDITY_STATION_KEY));

    if (stations != null) {
      for (const station_data of stations[stationId].data) {

        let typeData;
        if (dataType == "Wind speed") typeData = station_data.wind_speed;
        else if (dataType == "Humidity") typeData = station_data.humidity;
        else
          document.getElementById("noData").innerHTML =
            "No data available for data type";
        var day = station_data.date
        day = getDayName(day, "en-EN").slice(0,3);
        var time = station_data.time
        time = time.split(':')
        var date = ''
        if (lastChartDay != day) {date = day; lastChartDay = date}
        date += ' '+time[0]+'h'
        fetchedTimeData.push(date);
        fetchedTypeData.push(typeData);
      }
      // fetchedData = {windSpeed: response[0].wind_speed, time: response[0].time}
      console.log(
        "Chart gets updated with...",
        fetchedTypeData,
        fetchedTimeData
      );
      var measurement = " km/h";
      if (dataType == "Humidity") measurement = " %";
      setData({
        labels: fetchedTimeData,
        datasets: [
          {
            label: dataType + " in last 7 days in" + measurement,
            data: fetchedTypeData,
            fill: true,
            backgroundColor: "rgba(151, 201, 62, 0.2)",
            borderColor: "rgba(151, 201, 62, 1)",
          },
        ],
      });
    } else {
      document.getElementById("noData").innerHTML =
        "No data available from last 7 days";
    }
    
  }, [dataType]);

  function changeDataType(type) {
    localStorage.setItem("currentDataType", type);
  }
  function getDayName(dateStr, locale)
  {
      var date = new Date(dateStr);
      return date.toLocaleDateString(locale, { weekday: 'long' });        
  }

  return (
    <div className="Home">
      <>
        <Container>
          <Row>
            <Col sm={12}>
              {/* <div id='map'></div> */}
              <h2>Station: {stationId}</h2>
              <h5>Country: {stations[stationId].country}</h5>
              <h5>Location: {stations[stationId].location}</h5>
              <div id="noData"></div>
              <button
                id="Windspeed"
                className="btn btn-primary"
                onClick={() => {
                  localStorage.setItem("currentDataType", "Wind speed");
                  setDataType("Wind speed");
                }}
              >
                Wind speed
              </button>
              <button
                id="Humidity"
                // className="ms-2 btn btn-primary"
                className= {humidityClassName}
                onClick={() => {
                  localStorage.setItem("currentDataType", "Humidity");
                  setDataType("Humidity");
                }}
              >
                Humidity
              </button>
              <DownloadStation station_id={stationId} data_key={dataKey}/> 
                <Line id="Graph" data={data} options={{maintainAspectRatio: false}}/>
              {/* <img className="img-fluid" src="map.png"/> */}
            </Col>
          
          </Row>
        </Container>
      </>
    </div>
  );
}
export default Station;
