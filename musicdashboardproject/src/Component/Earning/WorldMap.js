import React, { useEffect, useState } from "react";
import { csv } from "d3-fetch";
import { scaleLinear } from "d3-scale";
import {
  ComposableMap,
  Geographies,
  Geography,
  Sphere,
  Graticule,
  Marker
} from "react-simple-maps";

const markers = [
    {
      markerOffset: -15,
      name: "Buenos Aires",
      coordinates: [-58.3816, -34.6037]
    },
    { markerOffset: -15, name: "VietNam", coordinates: [105.8030925,15.44421] },
    { markerOffset: 25, name: "USA", coordinates: [-100.8825, 40.7942] },
    { markerOffset: 25, name: "Canada", coordinates: [-100.8825, 55.4489] },
    { markerOffset: 25, name: "Bogota", coordinates: [-5.0721, 4.711] },
    { markerOffset: 25, name: "Quito", coordinates: [100.4678, -0.1807] },
    { markerOffset: -15, name: "China", coordinates: [80.1551, 40.8013] },
    { markerOffset: -15, name: "Asuncion", coordinates: [57.5759, 25.2637] },
    { markerOffset: 25, name: "Paramaribo", coordinates: [37.2038, 20.852] },
    { markerOffset: 25, name: "Montevideo", coordinates: [-56.1645, -34.9011] },
    { markerOffset: -15, name: "Caracas", coordinates: [-66.9036, 10.4806] },
    { markerOffset: -15, name: "Lima", coordinates: [-77.0428, -12.0464] }
  ];
const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const colorScale = scaleLinear()
  .domain([0.29, 0.68])
  .range(["#ffedea", "#ff5233"]);

const MapChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    csv(`/vulnerability.csv`).then((data) => {
      setData(data);
    });
  }, []);

  return (
      <div className="map">
          <div className="mapTitle"><h5>Revenue Map Location</h5></div>
            
            <ComposableMap className="map_fit"
                projectionConfig={{
                    rotate: [-10, 0, 0],
                    scale: 120
                }}
                >
                <Sphere stroke="#95c2f0" strokeWidth={0.5} />
                <Graticule stroke="#95c2f0" strokeWidth={0.5} />
                {data.length > 0 && (
                    <Geographies geography={geoUrl}>
                    {({ geographies }) =>
                        geographies.map((geo) => {
                        const d = data.find((s) => s.ISO3 === geo.properties.ISO_A3);
                        return (
                            <Geography
                            key={geo.rsmKey}
                            geography={geo}
                            fill={d ? colorScale(d["2017"]) : "#FFBCBC"}
                            />
                        );
                        })
                    }
                    </Geographies>
                )}
                {markers.map(({ name, coordinates, markerOffset }) => (
        <Marker key={name} coordinates={coordinates}>
          <circle r={10} fill="#F00" stroke="#fff" strokeWidth={2} />
          <text
            textAnchor="middle"
            y={markerOffset}
            style={{ fontFamily: "system-ui", fill: "#5D5A6D" }}
          >
            {name}
          </text>
        </Marker>
      ))}
            </ComposableMap>
      </div>
    
  );
};

export default MapChart;

