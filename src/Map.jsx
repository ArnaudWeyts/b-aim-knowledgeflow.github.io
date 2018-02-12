import React, { Component } from 'react';
import ReactMapboxGl, { Marker } from 'react-mapbox-gl';

const Map = ReactMapboxGl({
  accessToken: process.env.REACT_APP_MAPBOXACCESSTOKEN,
  maxZoom: 6
});

class MapComponent extends Component {
  render() {
    return (
      <Map // eslint-disable-next-line
        style="mapbox://styles/mapbox/streets-v9"
        containerStyle={{ height: '100vh', width: '100vw' }}
        fitBounds={[[-38, 25], [69, 63]]}
      >
        <Marker coordinates={[3.6, 50.9]} offset={[0, 60 / 2]}>
          <img
            src="https://avatars2.githubusercontent.com/u/10011712?s=460&v=4"
            alt="Arnaud"
            style={{ height: 60, width: 60 }}
          />
        </Marker>
      </Map>
    );
  }
}

export default MapComponent;
