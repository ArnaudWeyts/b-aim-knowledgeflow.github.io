import React, { Component } from 'react';

import './App.css';
import 'mapbox-gl/dist/mapbox-gl.css';

import SideBar from './SideBar';
import Map from './Map';

import members from './teaminfo';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      members,
      map: null
    };
  }

  onZoomMember(location) {
    const { map } = this.state;
    map.flyTo({
      center: location,
      zoom: 7
    });
    console.log(this.state.map, location);
  }

  render() {
    const { members } = this.state;
    return (
      <div className="App">
        <SideBar
          members={members}
          zoomMember={location => this.onZoomMember(location)}
        />
        <Map members={members} setMap={map => this.setState({ map })} />
      </div>
    );
  }
}

export default App;
