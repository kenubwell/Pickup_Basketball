import React from "react";
import {InfoWindow, withScriptjs, withGoogleMap, GoogleMap, Marker} from "react-google-maps";

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
                  <div>5001 Meadowbrook Ln, Ellicott City, MD 21043</div>
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
 
export default MeadowMap;