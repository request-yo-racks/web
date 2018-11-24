import React from 'react';
import MapboxMap, { Marker } from 'react-mapbox-wrapper';
import RyrPopup from './ryr-popup';

class RyrLocationSelector extends React.Component {
  constructor(props) {
    super(props);
    this.onMapLoad = this.onMapLoad.bind(this);
    this.state = {
      lng: -97.740313,
      lat: 30.274687,
      error: null,
      isLoaded: false,
      items: [{ name: 'Loading...' }]
    };
  }

  onMapLoad(map) {
    this.map = map;
    this.forceUpdate();
  }

  handleClick(e) {
    console.log(e.lngLat.lng + ', ' + e.lngLat.lat);
    this.setState(() => ({
      lng: e.lngLat.lng,
      lat: e.lngLat.lat
    }));
    this.fetchResult();
  }

  fetchResult() {
    // const apiUrl = 'http://api.192.168.99.100.nip.io'
    const apiUrl = 'http://127.0.0.1:8000';
    fetch(apiUrl + '/1.0/places?location=' + this.state.lat + ',' + this.state.lng)
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            items: result.results.slice(1, 11)
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  componentDidMount() {
    this.fetchResult();
  }

  render() {
    const viewportHeight = 50;
    let marker;
    if (this.map) {
      marker = <Marker coordinates={{ lng: this.state.lng, lat: this.state.lat }} map={this.map} />;
    }

    return (
      <div
        style={{
          height: viewportHeight + 'vh',
          width: '90%',
          margin: '0 auto'
        }}
      >
        <MapboxMap
          accessToken={'pk.eyJ1IjoicmdyZWluaG9mZXIiLCJhIjoiY2pvamE2ZjBzMDMxcTNxbjFvMmgwMm4zZSJ9.gw2KbVBLQF_CbRQJ-ePyZQ'}
          coordinates={{ lng: this.state.lng, lat: this.state.lat }}
          className="map-container"
          zoom={13}
          onLoad={this.onMapLoad}
          onClick={this.handleClick.bind(this)}
        >
          {marker}
        </MapboxMap>
        <div
          id="coordinates"
          className="coordinates"
          style={{
            position: 'relative',
            top: '-' + (viewportHeight - 1) + 'vh',
            right: '1vw',
            float: 'right',
            width: '33%',
            maxHeight: '48vh',
            overflow: 'scroll'
          }}
        >
          <RyrPopup places={this.state.items} />
        </div>
      </div>
    );
  }
}

export default RyrLocationSelector;
