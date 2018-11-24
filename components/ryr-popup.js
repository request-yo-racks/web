import PropTypes from 'prop-types';
import React from 'react';

import RyrPopupItem from './ryr-popup-item';

// const CapitolSummaryInfo = { name: 'Texas State Capitol', address1: '1100 Congress Ave', address2: 'Austin, TX 78701' };
// const CloakRoomSummaryInfo = { name: 'The Cloak Room', address1: '1300 Colorado St', address2: 'Austin, TX 78701' };
// const TexasChiliParlorSummaryInfo = { name: 'Texas Chili Parlor', address1: '1409 Lavaca St', address2: 'Austin, TX 78701' };
// const fakePlaces = [CapitolSummaryInfo, CloakRoomSummaryInfo, TexasChiliParlorSummaryInfo];

class RyrPopup extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selected: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(index) {
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
          fontSize: '11px',
          lineHeight: '18px',
          borderRadius: '3px',
          display: 'inline-block',
          float: 'right',
          boxShadow: '3px 3px 5px 6px #ccc'
        }}
      >
        {places.map((place, index) => {
          const isSelected = index === this.state.selected;
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
  places: PropTypes.array
};

export default RyrPopup;
