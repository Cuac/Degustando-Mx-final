import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
//import './ubicacion.css'; 


const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={15}
    defaultCenter={props.location}
    defaultOptions={{
      disableDefaultUI: true
    }}
  >
    {props.isMarkerShown && <Marker position={props.location} />}
  </GoogleMap>
))


export default MyMapComponent;

