import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import RyrPopupItem from './ryr-popup-item';
import { selectPlaceAsync } from '../redux/store';

class RyrPopup extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selected: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(index) {
    const selectedPlace = this.props.places[index];
    this.props.selectPlaceAsync(selectedPlace);
    this.setState(() => ({
      selected: index
    }));
  }

  render() {
    const places = this.props.places || [];
    return (
      <div
        style={{
          background: 'rgba(255,255,255,0.8)',
          color: '#000',
          padding: '0',
          margin: '0',
          fontSize: '0.66em',
          lineHeight: '1.1em',
          borderRadius: '3px',
          boxShadow: '3px 3px 5px 6px #ccc'
        }}
      >
        {places.map((place, index) => {
          const isSelected = index === this.state.selected;
          if (isSelected) {
            const selectedPlace = this.props.places[index];
            this.props.selectPlaceAsync(selectedPlace);
          }

          return (
            <div key={index} onClick={e => this.handleClick(index, e)}>
              <RyrPopupItem index={index} place={place} selected={isSelected} />
            </div>
          );
        })}
      </div>
    );
  }
}

RyrPopup.propTypes = {
  places: PropTypes.array,
  selectPlaceAsync: PropTypes.func.isRequired
};

export default connect(
  null,
  { selectPlaceAsync }
)(RyrPopup);
