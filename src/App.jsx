import React, { Component } from 'react';

import './App.css';
import 'mapbox-gl/dist/mapbox-gl.css';

import 'typeface-open-sans';

import SideBar from './SideBar';
import Map from './Map';

import members from './teaminfo';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      members,
      selectedMember: null,
      map: null
    };
  }

  onSelectMember(p) {
    this.setState({ selectedMember: p });
  }

  onUnselectMember() {
    this.setState({ selectedMember: null });
  }

  onZoomMember(location) {
    const { map } = this.state;
    if (map) {
      map.flyTo({ center: location, zoom: 7 });
    }
  }

  render() {
    const { members, selectedMember } = this.state;
    return (
      <div className="App">
        <SideBar
          members={members}
          zoomMember={location => this.onZoomMember(location)}
          selectMember={m => this.onSelectMember(m)}
        />
        <Map
          members={members}
          setMap={map => this.setState({ map })}
          selectedMember={selectedMember}
          selectMember={m => this.onSelectMember(m)}
          unselectMember={() => this.onUnselectMember()}
        />
      </div>
    );
  }
}

export default App;
