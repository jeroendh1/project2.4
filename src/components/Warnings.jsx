import React, { useRef, useEffect } from "react";

export default class Warnings extends React.Component {
    constructor(props) {
        super();
    }

    render() {
        const navigate = this.props.navigation;
        return <div className="warnings"> {this.props.stations.map((element) => {
            if (!element[1].warning) return; 
            return <div key={element[0]} className="warning"><button className="btn btn-warning" onClick={() => navigate(`station/${element[0]}`)}>{element[0]}</button><div>Humidity: {element[1].data[element[1].data.length - 1].humidity}%</div><div>Windspeed: {element[1].data[element[1].data.length - 1].wind_speed} km/h</div></div>
        })} </div>;
    }
}