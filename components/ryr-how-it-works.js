import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const defaultIconSize = '7x';

const RyrHowItWorks = props => {
  const iconSize = props.size || defaultIconSize;
  const iconStyle = { marginBottom: '0.5em' };
  const containerStyle = {
    margin: '0 auto',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    textAlign: 'center'
  };
  const itemStyle = {
    width: '33%',
    marginBottom: '2em'
  };

  return (
    <div>
      <h2 style={{ textAlign: 'center', marginBottom: '1em' }}>How does it Work?</h2>
      <div style={containerStyle}>
        <div style={itemStyle}>
          <FontAwesomeIcon icon={faMapMarkerAlt} size={iconSize} style={iconStyle} />
          <h3>Select</h3>
          <p>the location</p>
        </div>
        <div style={itemStyle}>
          <FontAwesomeIcon icon={faCheckSquare} size={iconSize} style={iconStyle} />
          <h3>Review</h3>
          <p>the petition</p>
        </div>
        <div style={itemStyle}>
          <FontAwesomeIcon icon={faPaperPlane} size={iconSize} style={iconStyle} />
          <h3>Submit</h3>
          <p>the request</p>
        </div>
      </div>
    </div>
  );
};

RyrHowItWorks.propTypes = {
  size: PropTypes.string
};

export default RyrHowItWorks;
