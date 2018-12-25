import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import MapboxMap, { Marker } from 'react-mapbox-wrapper';

import RyrPopup from './ryr-popup';
import { fetchPlaces, selectLocation } from '../redux/store';

class RyrLocationSelector extends React.Component {
  constructor(props) {
    super(props);
    this.onMapLoad = this.onMapLoad.bind(this);
    this.state = {
      error: null,
      isLoaded: false
    };
  }

  onMapLoad(map) {
    this.map = map;
    this.forceUpdate();
  }

  handleClick(e) {
    console.log(e.lngLat.lng + ', ' + e.lngLat.lat);
    const location = {
      lng: e.lngLat.lng,
      lat: e.lngLat.lat
    };
    this.props.selectLocation(location);
    this.fetchResult();
  }

  fetchResult() {
    const apiUrl = 'http://api.192.168.99.100.nip.io';
    // const apiUrl = 'http://127.0.0.1:8000';
    fetch(apiUrl + '/1.0/places?location=' + this.props.location.lat + ',' + this.props.location.lng)
      .then(res => res.json())
      .then(
        result => {
          this.props.fetchPlaces(result.results.slice(1, 11));
          this.setState({
            isLoaded: true
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
      marker = <Marker coordinates={{ lng: this.props.location.lng, lat: this.props.location.lat }} map={this.map} />;
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
          accessToken={this.props.mapboxToken}
          coordinates={{ lng: this.props.location.lng, lat: this.props.location.lat }}
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
          <RyrPopup places={this.props.placeSummaries} />
        </div>
      </div>
    );
  }
}

RyrLocationSelector.propTypes = {
  fetchPlaces: PropTypes.func.isRequired,
  location: PropTypes.object,
  mapboxToken: PropTypes.string.isRequired,
  placeSummaries: PropTypes.array,
  selectLocation: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  const { placeSummaries, location } = state;
  return { placeSummaries, location };
};

export default connect(
  mapStateToProps,
  { fetchPlaces, selectLocation }
)(RyrLocationSelector);
