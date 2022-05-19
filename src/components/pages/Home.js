import React, { useState } from "react"
import { link } from "react-router-dom"
import {Container, Row, Col, Card, } from "react-bootstrap"
import {
    useJsApiLoader,
    GoogleMap,
    Marker,
    Autocomplete,
    DirectionsRenderer,
  } from '@react-google-maps/api'
  import { useRef } from 'react'

 
function Home(){
    const center = { lat: 20.03300, lng: 45.318161 }
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries: ['places'],
      })
    
      if (!isLoaded) {
        return ''
      }
 
    
    return ( 
       <div className="Home">
            <>
                <Container>
                    <Row>
                        <Col sm={8}>
                        <GoogleMap
                            center={center}
                            zoom={4}
                            mapContainerStyle={{ width: '100%', height: '100%' }}
                            options={{
                                zoomControl: true,
                                streetViewControl: false,
                                mapTypeControl: false,
                                fullscreenControl: false,
                            }} 
                        >
{/* Oman */}
                            <Marker position={ {lat: 17.03300, lng:54.08300 }} />
                            <Marker position={ {lat: 26.16700, lng:56.23300 }} />
                            <Marker position={ {lat: 23.06700, lng:57.63300 }} />
                            <Marker position={ {lat: 24.46700, lng:56.63300 }} />
                            <Marker position={ {lat: 23.58300, lng:58.28300 }} />
                            <Marker position={ {lat: 20.66700, lng:58.90000 }} />
                            <Marker position={ {lat: 17.03300, lng:54.08300 }} />
                            <Marker position={ {lat: 17.66700, lng:54.01700 }} />
                            <Marker position={{ lat: 19.96700, lng:42.66700  }} />
{/* saudi arabia  */}
<Marker position={{ lat: 20.46700, lng:45.66700  }} />
<Marker position={{ lat: 21.48300, lng:40.53300  }} />
<Marker position={{ lat: 21.50000, lng:39.20000  }} />
<Marker position={{ lat: 26.43300, lng:49.80000  }} />
<Marker position={{ lat: 26.45000, lng:49.81700  }} />
<Marker position={{ lat: 26.26700, lng:50.16700  }} />
<Marker position={{ lat: 25.30000, lng:49.48300  }} />
<Marker position={{ lat: 26.20000, lng:36.48300  }} />
<Marker position={{ lat: 26.30000, lng:43.76700  }} />
<Marker position={{ lat: 24.70000, lng:46.73300  }} />
<Marker position={{ lat: 24.93300, lng:46.71700  }} />
<Marker position={{ lat: 24.13300, lng:38.06700  }} />
<Marker position={{ lat: 24.15000, lng:47.31700  }} />
<Marker position={{ lat: 24.55000, lng:39.70000  }} />
<Marker position={{ lat: 29.61700, lng:43.48300  }} />
<Marker position={{ lat: 29.78300, lng:40.10000  }} />
<Marker position={{ lat: 31.40000, lng:37.28300  }} />
<Marker position={{ lat: 30.96700, lng:40.98300  }} />
<Marker position={{ lat: 30.90000, lng:41.13300  }} />
<Marker position={{ lat: 31.68300, lng:38.73300  }} />
<Marker position={{ lat: 27.43300, lng:41.68300  }} />
<Marker position={{ lat: 28.38300, lng:36.60000  }} />
<Marker position={{ lat: 27.91700, lng:45.51700  }} />
<Marker position={{ lat: 30.53300, lng:38.90000  }} />
{/* yemen */}
<Marker position={{ lat: 15.48300, lng:44.21700  }} />
<Marker position={{ lat: 12.83300, lng:45.03300  }} />
<Marker position={{ lat: 15.51700, lng:44.18300  }} />
<Marker position={{ lat: 12.83300, lng:45.03300  }} />
{/* verenigde arabische emiraten */}
<Marker position={{ lat: 25.80000, lng:55.93300  }} />
<Marker position={{ lat: 25.35000, lng:55.38300  }} />
<Marker position={{ lat: 25.25000, lng:55.33300  }} />
<Marker position={{ lat: 25.61700, lng:55.93300  }} />
<Marker position={{ lat: 25.10000, lng:56.33300  }} />
<Marker position={{ lat: 25.25000, lng:55.33300  }} />
<Marker position={{ lat: 25.33300, lng:55.51700  }} />
<Marker position={{ lat: 24.26700, lng:55.60000  }} />
<Marker position={{ lat: 24.43300, lng:54.46700  }} />
<Marker position={{ lat: 24.43300, lng:54.65000  }} />
{/* Qatar */}
<Marker position={{ lat: 25.26700, lng:51.55000  }} />
<Marker position={{ lat: 25.25000, lng:51.56700  }} />
{/* Iran */}
<Marker position={{ lat: 27.20000, lng:60.70000  }} />
<Marker position={{ lat: 27.21700, lng:56.36700  }} />
<Marker position={{ lat: 28.96700, lng:53.68300  }} />
<Marker position={{ lat: 28.98300, lng:50.83300  }} />
<Marker position={{ lat: 29.53300, lng:52.53300  }} />
<Marker position={{ lat: 29.46700, lng:60.88300  }} />
<Marker position={{ lat: 30.25000, lng:56.96700  }} />
<Marker position={{ lat: 25.43300, lng:60.36700  }} />
<Marker position={{ lat: 31.90000, lng:54.28300  }} />
<Marker position={{ lat: 30.36700, lng:48.25000  }} />
<Marker position={{ lat: 31.33300, lng:48.66700  }} />
<Marker position={{ lat: 32.86700, lng:59.20000  }} />
<Marker position={{ lat: 25.43300, lng:60.36700  }} />
<Marker position={{ lat: 32.46700, lng:51.66700  }} />
<Marker position={{ lat: 25.43300, lng:60.36700  }} />
<Marker position={{ lat: 26.51700, lng:53.98300  }} />
<Marker position={{ lat: 25.43300, lng:60.36700  }} />
<Marker position={{ lat: 35.55000, lng:53.38300  }} />
<Marker position={{ lat: 35.26700, lng:59.21700  }} />
<Marker position={{ lat: 34.26700, lng:47.11700  }} />
<Marker position={{ lat: 36.41700, lng:54.95000  }} />
<Marker position={{ lat: 36.71700, lng:52.65000  }} />
<Marker position={{ lat: 36.65000, lng:51.50000  }} />
<Marker position={{ lat: 36.90000, lng:50.66700  }} />
<Marker position={{ lat: 36.25000, lng:50.00000  }} />
{/* bahrein */}
<Marker position={{ lat: 26.26700, lng:50.61700  }} />
<Marker position={{ lat: 26.26700, lng:50.65000  }} />
                        </GoogleMap>
                            {/* <img className="img-fluid" src="map.png"/> */}
                             </Col>
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
                                   4.<span class="ms-2">Qatar</span> <span class="ms-4"> 58 km/h</span>
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