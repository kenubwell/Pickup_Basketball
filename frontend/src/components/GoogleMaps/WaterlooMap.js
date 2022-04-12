import React from "react";
import {InfoWindow, withScriptjs, withGoogleMap, GoogleMap, Marker} from "react-google-maps";

class WaterlooMap extends React.Component {

    render(){

        const MapWithAMarker = withScriptjs(withGoogleMap(props =>
            <GoogleMap
              defaultZoom={12}
              defaultCenter={{ lat: 39.18347, lng: -76.78585 }}
            >
              <Marker
                position={{ lat: 39.18347, lng: -76.78585 }}
              >
                <InfoWindow>
                  <div>6951 Old Waterloo Rd, Elkridge, MD 21075</div>
                </InfoWindow>
                </Marker>
            </GoogleMap>
          ));
          
        return(
        <MapWithAMarker
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `320px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
/>
        )
    }
    
}
 
export default WaterlooMap;