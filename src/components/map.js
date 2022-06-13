import React, { useRef, useEffect } from "react";
// eslint-disable-next-line import/no-webpack-loader-syntax
import maplibregl from '!maplibre-gl'; // ! is important here
import maplibreglWorker from "maplibre-gl/dist/maplibre-gl-csp-worker";
import { useNavigate } from 'react-router-dom';
import { WIND_SPEED_STATION_KEY } from "../App";
maplibregl.workerClass = maplibreglWorker;

export default function Map() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (map.current) return;

    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: JSON.parse(localStorage.getItem('data')),
      center: [49, 24],
      zoom: 3,
    });
    map.current.addControl(new maplibregl.NavigationControl(), 'top-right');

    let stations = JSON.parse(localStorage.getItem(WIND_SPEED_STATION_KEY));
    
    for (const [station_id, station_data] of Object.entries(stations)) {
      // create a HTML element for each feature
      const element = document.createElement("div");
      element.className = "marker";
      element.id = station_id;
      // make a marker for each feature and add it to the map
      const marker = new maplibregl.Marker(element)
        .setLngLat([station_data.longitude, station_data.latitude])
        // add popups
      
        .setPopup(
          new maplibregl.Popup({ offset: 25 }).setHTML(
            `<p><strong>${station_data.country}</strong><br>${station_data.location}</p><p> Wind ${station_data.data[0].wind_speed} km/h</p><a class="markerLink" id="${station_id}" >Station info </a>  `
          )
        )
        .addTo(map.current);
  
        marker.getPopup()._content.childNodes[2].addEventListener('click', function(){
          navigate('/station/' + this.id);
        })
    }      

  });

  return <div ref={mapContainer} className="map-container" />;
}
