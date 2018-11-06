import PropTypes from 'prop-types';

const RyrSectionConnector = props => {
  const sectionConnectorStyle = {
    width: '100%',
    height: '75px',
    textAlign: 'center',
    backgroundColor: props.bg || '#2E5D2A',
    fill: props.fill || 'white'
  };
  return (
    <div style={{ margin: '0 auto -1em auto' }}>
      <svg style={sectionConnectorStyle} viewBox="0 0 10 10" preserveAspectRatio="none">
        <polygon points="0,0 10,0 5,10" />
      </svg>
    </div>
  );
};

RyrSectionConnector.propTypes = {
  fill: PropTypes.string,
  bg: PropTypes.string
};

export default RyrSectionConnector;
