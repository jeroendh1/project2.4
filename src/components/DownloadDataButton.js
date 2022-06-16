import React from "react";
import { HUMIDITY_STATION_KEY, WIND_SPEED_STATION_KEY } from "../App";

const OBJtoXML = (obj) => {
    var xml = '';
    for (var prop in obj) {
        xml += obj[prop] instanceof Array ? '' : "<" + prop + ">";
        if (obj[prop] instanceof Array) {
            for (var array in obj[prop]) {
                xml += "<" + prop + ">";
                xml += OBJtoXML(new Object(obj[prop][array]));
                xml += "</" + prop + ">";
            }
        } else if (typeof obj[prop] == "object") {
            xml += OBJtoXML(new Object(obj[prop]));
        } else {
            xml += obj[prop];
        }
        xml += obj[prop] instanceof Array ? '' : "</" + prop + ">";
    }
    var xml = xml.replace(/<\/?[0-9]{1,}>/g, '');
    return xml
}

export const DownloadDataButton = (props) => {
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