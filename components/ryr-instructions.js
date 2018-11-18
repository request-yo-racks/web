import PropTypes from 'prop-types';

const stepsHeader = { textAlign: 'center', marginBottom: '0.8em', fontSize: '1.8em' };

const stepsText = { textAlign: 'center', marginBottom: '1.5em' };
const stepIndent = { textIndent: '-4.9em' };

const circleStyle = {
  borderRadius: '50%',
  fontWeight: '970',
  backgroundColor: '#06b700',
  width: '100px',
  height: '100px',
  color: 'white',
  padding: '3px 6px 3px 6px'
};

const NextStyle = {
  marginBottom: '2em',
  h3: '2em'
};

const RyrInstructions = props => {
  let circleShape = props.size || circleStyle;
  return (
    <div className={NextStyle}>

      <h3 style={stepsHeader}>What to do next?</h3>

      <p style={stepsText}>
        <span style={circleShape}>1</span> Send your email to bicycleprogram@austintexas.gov.
      </p>
      
      <p style={stepsText}>
        <span style={circleShape}>2</span> Set &#8220;Bicycle Corral Request&#8221; as the subject.
      </p>
  
    </div>

  );
};

RyrInstructions.propTypes = {
  size: PropTypes.string
};

export default RyrInstructions;
