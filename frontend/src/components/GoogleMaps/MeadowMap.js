import React from "react";
import {InfoWindow, withScriptjs, withGoogleMap, GoogleMap, Marker} from "react-google-maps";
import "./GoogleMaps.css";

class MeadowMap extends React.Component {

    render(){

        const MapWithAMarker = withScriptjs(withGoogleMap(props =>
            <GoogleMap
              defaultZoom={12}
              defaultCenter={{ lat: 39.24944, lng: -76.82333 }}
            >
              <Marker
                position={{ lat: 39.24944, lng: -76.82333 }}
              >
                <InfoWindow>
                  <div className='google-title'>5001 Meadowbrook Ln, Ellicott City, MD 21043</div>
                </InfoWindow>
                </Marker>
            </GoogleMap>
          ));
          
        return(
        <MapWithAMarker
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `300px` }} />}
        mapElement={<div style={{ height: `100%`, borderRadius: `20px`, boxShadow:  '4px 2px 5px black', width: `500px` }} />}
/>
        )
    }
    
}
 
export default MeadowMap;