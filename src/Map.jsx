import React, { Component } from 'react';
import ReactMapboxGl, { Marker, Popup } from 'react-mapbox-gl';

import images from './img';
import teaminfo from './teaminfo';

const Map = ReactMapboxGl({
  accessToken: process.env.REACT_APP_MAPBOXACCESSTOKEN,
  maxZoom: 6
});

class MapComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedMember: null
    };
  }

  showPopup(p) {
    this.setState({ selectedMember: p });
  }

  hidePopup() {
    this.setState({ selectedMember: null });
  }

  renderMarkers() {
    return teaminfo.map(p => {
      return (
        <Marker
          key={p.id}
          coordinates={p.location}
          offset={[0, 60 / 2]}
          onClick={() => this.showPopup(p)}
          className="marker"
        >
          <img
            src={images.boy}
            alt={p.name}
            style={{ height: 60, width: 60 }}
          />
        </Marker>
      );
    });
  }

  render() {
    const sm = this.state.selectedMember;

    return (
      <Map // eslint-disable-next-line
        style="mapbox://styles/mapbox/streets-v9"
        containerStyle={{ height: '100vh', width: '100vw' }}
        fitBounds={[[-38, 25], [69, 63]]}
        onMouseDown={() => this.hidePopup()}
      >
        {this.renderMarkers()}
        {sm && (
          <Popup className="popup" coordinates={sm.location}>
            <div>
              <h1>{sm.name}</h1>
              <p>{sm.description}</p>
              <p>ECTS involvement: {sm.ects}</p>
              {sm.email.map(m => {
                return (
                  <p>
                    <a href={`mailto:${m}`}>{m}</a>
                  </p>
                );
              })}
            </div>
          </Popup>
        )}
      </Map>
    );
  }
}

export default MapComponent;
