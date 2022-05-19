import React, { useRef, useEffect, useState } from "react"
import {Container, Row, Col, Card, } from "react-bootstrap"
import mapboxgl from 'mapbox-gl';
mapboxgl.accessToken = 'pk.eyJ1IjoiamVyb2VuZGVoYWFuIiwiYSI6ImNsM2Rjdjg0cDA3N2oza3B2M2pyZmxxcGcifQ.xw6YF9mf-O3M7FFjZ41SHA';
// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default
function Home(){

  const mapContainer = useRef(null);
  const map = useRef(null);
const geojson = {
    'type': 'FeatureCollection',
    'features': [
        {'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [ 50.61700, 26.26700 ] },'properties': { 'description': 'البحرين'}}
        ,{'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [ 50.65000, 26.26700 ] },'properties': { 'description': 'البحرين'}}
        
        //sa
        ,{'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [ 42.66700, 19.96700 ] },'properties': { 'description': 'السعودية'}}
,{'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [ 45.66700, 20.46700 ] },'properties': { 'description': 'السعودية'}}
,{'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [ 40.53300, 21.48300 ] },'properties': { 'description': 'السعودية'}}
,{'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [ 39.20000, 21.50000 ] },'properties': { 'description': 'السعودية'}}
,{'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [ 49.80000, 26.43300 ] },'properties': { 'description': 'السعودية'}}
,{'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [ 49.81700, 26.45000 ] },'properties': { 'description': 'السعودية'}}
,{'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [ 50.16700, 26.26700 ] },'properties': { 'description': 'السعودية'}}
,{'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [ 49.48300, 25.30000 ] },'properties': { 'description': 'السعودية'}}
,{'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [ 36.48300, 26.20000 ] },'properties': { 'description': 'السعودية'}}
,{'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [ 43.76700, 26.30000 ] },'properties': { 'description': 'السعودية'}}
,{'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [ 46.73300, 24.70000 ] },'properties': { 'description': 'السعودية'}}
,{'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [ 46.71700, 24.93300 ] },'properties': { 'description': 'السعودية'}}
,{'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [ 38.06700, 24.13300 ] },'properties': { 'description': 'السعودية'}}
,{'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [ 47.31700, 24.15000 ] },'properties': { 'description': 'السعودية'}}
,{'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [ 39.70000, 24.55000 ] },'properties': { 'description': 'السعودية'}}
,{'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [ 43.48300, 29.61700 ] },'properties': { 'description': 'السعودية'}}
,{'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [ 40.10000, 29.78300 ] },'properties': { 'description': 'السعودية'}}
,{'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [ 37.28300, 31.40000 ] },'properties': { 'description': 'السعودية'}}
,{'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [ 40.98300, 30.96700 ] },'properties': { 'description': 'السعودية'}}
,{'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [ 41.13300, 30.90000 ] },'properties': { 'description': 'السعودية'}}
,{'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [ 38.73300, 31.68300 ] },'properties': { 'description': 'السعودية'}}
,{'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [ 41.68300, 27.43300 ] },'properties': { 'description': 'السعودية'}}
,{'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [ 36.60000, 28.38300 ] },'properties': { 'description': 'السعودية'}}
,{'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [ 45.51700, 27.91700 ] },'properties': { 'description': 'السعودية'}}
,{'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [ 38.90000, 30.53300 ] },'properties': { 'description': 'السعودية'}}
//om
,{'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [ 54.08300, 17.03300 ] },'properties': { 'description': 'عمان'}}
,{'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [ 56.23300, 26.16700 ] },'properties': { 'description': 'عمان'}}
,{'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [ 57.63300, 23.06700 ] },'properties': { 'description': 'عمان'}}
,{'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [ 56.63300, 24.46700 ] },'properties': { 'description': 'عمان'}}
,{'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [ 58.28300, 23.58300 ] },'properties': { 'description': 'عمان'}}
,{'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [ 58.90000, 20.66700 ] },'properties': { 'description': 'عمان'}}
,{'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [ 54.08300, 17.03300 ] },'properties': { 'description': 'عمان'}}
,{'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [ 54.01700, 17.66700 ] },'properties': { 'description': 'عمان'}}
//ye
,{'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [ 44.21700, 15.48300 ] },'properties': { 'description': 'اليمن'}}
,{'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [ 45.03300, 12.83300 ] },'properties': { 'description': 'اليمن'}}
,{'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [ 44.18300, 15.51700 ] },'properties': { 'description': 'اليمن'}}
,{'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [ 45.03300, 12.83300 ] },'properties': { 'description': 'اليمن'}}
//ae
	
,{'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [ 55.93300, 25.80000 ] },'properties': { 'description': 'الإمارات العربية المتحدة'}}
,{'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [ 55.38300, 25.35000 ] },'properties': { 'description': 'الإمارات العربية المتحدة'}}
,{'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [ 55.33300, 25.25000 ] },'properties': { 'description': 'الإمارات العربية المتحدة'}}
,{'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [ 55.93300, 25.61700 ] },'properties': { 'description': 'الإمارات العربية المتحدة'}}
,{'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [ 56.33300, 25.10000 ] },'properties': { 'description': 'الإمارات العربية المتحدة'}}
,{'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [ 55.33300, 25.25000 ] },'properties': { 'description': 'الإمارات العربية المتحدة'}}
,{'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [ 55.51700, 25.33300 ] },'properties': { 'description': 'الإمارات العربية المتحدة'}}
,{'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [ 55.60000, 24.26700 ] },'properties': { 'description': 'الإمارات العربية المتحدة'}}
,{'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [ 54.46700, 24.43300 ] },'properties': { 'description': 'الإمارات العربية المتحدة'}}
,{'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [ 54.65000, 24.43300 ] },'properties': { 'description': 'الإمارات العربية المتحدة'}}
//kw
,{'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [ 47.96600, 29.22200 ] },'properties': { 'description': 'الكويت'}}
,{'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [ 48.33300, 29.44900 ] },'properties': { 'description': 'الكويت'}}
,{'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [ 47.66700, 29.31700 ] },'properties': { 'description': 'الكويت'}}
,{'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [ 48.06000, 28.55600 ] },'properties': { 'description': 'الكويت'}}
,{'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [ 47.57700, 29.61000 ] },'properties': { 'description': 'الكويت'}}
,{'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [ 47.76700, 29.80000 ] },'properties': { 'description': 'الكويت'}}
,{'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [ 48.20000, 29.56700 ] },'properties': { 'description': 'الكويت'}}
,{'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [ 48.37500, 29.76800 ] },'properties': { 'description': 'الكويت'}}
,{'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [ 46.68200, 29.10100 ] },'properties': { 'description': 'الكويت'}}
,{'type': 'Feature', 'geometry': { 'type': 'Point', 'coordinates': [ 48.00000, 29.41700 ] },'properties': { 'description': 'الكويت'}}
    ]
    };
    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [ 45.318161 , 20.03300],
        zoom: 3
        });

        map.current.addControl(new mapboxgl.NavigationControl()); 

    for (const feature of geojson.features) {
        // create a HTML element for each feature
        const el = document.createElement('div');
        el.className = 'marker';
         console.log(0)
        // make a marker for each feature and add it to the map
        new mapboxgl.Marker(el)
        .setLngLat(feature.geometry.coordinates)
        .setPopup(
        new mapboxgl.Popup({ offset: 25 }) // add popups
        .setHTML(
        `<p>${feature.properties.description}</p>`
        )
        )
        .addTo(map.current);
        }

    });

    return ( 
       <div className="Home">
            <>
                <Container>
                    <Row>
                        <Col sm={8}>
                        {/* <div id='map'></div> */}
                    
                        <div ref={mapContainer} className="map-container" />
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