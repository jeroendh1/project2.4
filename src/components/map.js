import React, { useRef, useEffect } from "react";
// eslint-disable-next-line import/no-webpack-loader-syntax
import maplibregl from '!maplibre-gl'; // ! is important here
import maplibreglWorker from "maplibre-gl/dist/maplibre-gl-csp-worker";
import { useNavigate } from 'react-router-dom';
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

    let stations = JSON.parse(localStorage.getItem("stations"));

    for (const station of stations) {
      // create a HTML element for each feature
      const element = document.createElement("div");
      element.className = "marker";
      element.id = station.station_id;
      // make a marker for each feature and add it to the map
      const marker = new maplibregl.Marker(element)
        .setLngLat([station.longitude, station.latitude])
        // add popups
      
        .setPopup(
          new maplibregl.Popup({ offset: 25 }).setHTML(
            `<p><strong>${station.country}</strong><br>${station.location}</p><button class="markerLink" id="${station.station_id}" >Station: ${station.station_id}</button>  <p> Wind ${station.wind_speed} km/h</p>`
          )
        )
        .addTo(map.current);
  
        marker.getPopup()._content.childNodes[1].addEventListener('click', function(){
          navigate('/station/' + this.id);
        })
    }      

  });

  return <div ref={mapContainer} className="map-container" />;
}
