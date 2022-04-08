import React from "react";
import {InfoWindow, withScriptjs, withGoogleMap, GoogleMap, Marker} from "react-google-maps";

class CedarParkMap extends React.Component {

    render(){

        const MapWithAMarker = withScriptjs(withGoogleMap(props =>
            <GoogleMap
              defaultZoom={12}
              defaultCenter={{ lat: 39.23381, lng: -76.88165 }}
            >
              <Marker
                position={{ lat: 39.23381, lng: -76.88165 }}
              >
                <InfoWindow>
                  <div>10723 Cottonwood Way, Columbia, MD 21044</div>
                </InfoWindow>
                </Marker>
            </GoogleMap>
          ));
          
        return(
        <MapWithAMarker
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAdK3c1JlvzeLj5rDD5NhOgD_Gr11VcDE4&v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `350px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
/>
        )
    }
    
}
 
export default CedarParkMap;