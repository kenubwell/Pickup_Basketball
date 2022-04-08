import React from "react";
import {InfoWindow, withScriptjs, withGoogleMap, GoogleMap, Marker} from "react-google-maps";

class LionGateMap extends React.Component {

    render(){

        const MapWithAMarker = withScriptjs(withGoogleMap(props =>
            <GoogleMap
              defaultZoom={12}
              defaultCenter={{ lat: 39.24697, lng: -76.81994 }}
            >
              <Marker
                position={{ lat: 39.24697, lng: -76.81994 }}
              >
                <InfoWindow>
                  <div>Long Gate Playground, 5001 Meadowbrook Ln, Ellicott City, MD 21043</div>
                </InfoWindow>
                </Marker>
            </GoogleMap>
          ));
          
        return(
        <MapWithAMarker
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `350px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
/>
        )
    }
    
}
 
export default LionGateMap;