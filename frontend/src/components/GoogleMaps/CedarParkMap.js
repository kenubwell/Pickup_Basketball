import React from "react";
import {InfoWindow, withScriptjs, withGoogleMap, GoogleMap, Marker} from "react-google-maps";

class CedarParkMap extends React.Component {

    render(){

        const MapWithAMarker = withScriptjs(withGoogleMap(props =>
            <GoogleMap
              zoom={12}
              defaultCenter={{ lat: 39.23381, lng: -76.88165 }}
            >
              <Marker
                position={{ lat: 39.23381, lng: -76.88165 }}
              >
                <InfoWindow>
                  <div className="google-title">10723 Cottonwood Way, Columbia, MD 21044</div>
                </InfoWindow>
                </Marker>
            </GoogleMap>
          ));
          
        return(
        <MapWithAMarker
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `300px` }} />}
        mapElement={<div style={{ height: `100%`, borderRadius: `20px`, boxShadow:  '4px 2px 5px black' }} />}
        />

        )
    }
    
}
 
export default CedarParkMap;