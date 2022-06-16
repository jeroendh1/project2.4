import React from "react";
import OBJtoXML from "../OBJtoXML.js";

export const DownloadStation = (props) => {
    const station_id = props.station_id;
    const data_key = props.data_key;
    const stations = JSON.parse(localStorage.getItem(data_key));
    const station = stations[station_id];
    const xml = OBJtoXML({
        id: station_id,
        location: station.location,
        country: station.country,
        longitude: station.longitude,
        latitude: station.latitude,
        warning: station.warning,
        data: station.data.reverse(),
    });
    const data = new Blob([`<station>${xml}</station>`]);
    const url = URL.createObjectURL(data);

    return (
        <a href={url} download={station_id + ".xml"} type="text/xml" className="btn btn-success ms-2">Download Data</a>
    );
}