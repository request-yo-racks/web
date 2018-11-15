import PropTypes from 'prop-types';

const InstTitleStyle = { textAlign: 'center', marginBottom: '0.8em', fontSize: '1.8em' };

const InstTypes = { textAlign: 'center', marginBottom: '1.5em' };
const InstTypes2 = { textAlign: 'center', marginBottom: '1.5em', textIndent: '-4.9em' };

const circleStyle = {
  borderRadius: 50,
  fontWeight: '970',
  backgroundColor: '#06b700',
  width: 100,
  height: 100,
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
      <h3 style={InstTitleStyle}>What to do next?</h3>
      <p style={InstTypes}>
        <span style={circleShape}>1</span> Send your email to bicycleprogram@austintexas.gov.
      </p>
      <p style={InstTypes2}>
        <span style={circleShape}>2</span> Set U+201C;Bicycle Corral RequestU+201D; as the subject.
      </p>
    </div>
  );
};

RyrInstructions.propTypes = {
  size: PropTypes.string
};

export default RyrInstructions;
