 
import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

import icon from "./constants";

export default function LeafLet() {
//   function LocationMarker() {
//     const [position, setPosition] = useState(null);
//     const [bbox, setBbox] = useState([]);

//     const map = useMap();

//     useEffect(() => {
//       map.locate().on("locationfound", function (e) {
//         setPosition(e.latlng);
//         map.flyTo(e.latlng, map.getZoom());
//         const radius = e.accuracy;
//         const circle = L.circle(e.latlng, radius);
//         circle.addTo(map);
//         setBbox(e.bounds.toBBoxString().split(","));
//       });
//     }, [map]);

//     return position === null ? null : (
//       <Marker position={position} icon={icon}>
//         <Popup>
//           You are here. <br />
//           Map bbox: <br />
//           <b>Southwest lng</b>: {bbox[0]} <br />
//           <b>Southwest lat</b>: {bbox[1]} <br />
//           <b>Northeast lng</b>: {bbox[2]} <br />
//           <b>Northeast lat</b>: {bbox[3]}
//         </Popup>
//       </Marker>
//     );
//   }
const position = [51.505, -0.09]
  return (
    <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  </MapContainer>

    // <MapContainer
    //   center={[49.1951, 16.6068]}
    //   zoom={13}
    //   scrollWheelZoom
    //   style={{ height: "100vh",position:"relative"}}
    // >
      
    //   <TileLayer
    //     attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    //     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    //   />

    //   <LocationMarker />
    //   <AddressContent/>
    // </MapContainer>
  );
}
