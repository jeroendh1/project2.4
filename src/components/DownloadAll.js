import React from "react";
import { WIND_SPEED_STATION_KEY } from "../App.js";
import OBJtoXML from "../OBJtoXML.js";

export const DownloadAll = (props) => {
    const data_key = props.data_key;
    const data_type = data_key === WIND_SPEED_STATION_KEY ? "Windspeed" : "Humidity";
    const stations = JSON.parse(localStorage.getItem(data_key));

    let xml = "";
    for (const [station_id, station] of Object.entries(stations)) {
        xml += "<station>";
        xml += OBJtoXML({
            id: station_id,
            location: station.location,
            country: station.country,
            longitude: station.longitude,
            latitude: station.latitude,
            warning: station.warning,
            data: station.data.reverse(),
        });
        xml += "</station>";
    }

    const data = new Blob([`<stations>${xml}</stations>`]);
    const url = URL.createObjectURL(data);

    return (
        <a href={url} download={data_type + ".xml"} type="text/xml" className="btn btn-success">Download</a>
    );
}