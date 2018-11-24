import PropTypes from 'prop-types';

const RyrPopupItem = props => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        fontSize: '0.8em',
        lineHeight: '1.1',
        backgroundColor: props.selected ? 'yellow' : 'rgba(255,255,255,0)',
        padding: '1em'
      }}
    >
      <div>
        <p style={{ fontWeight: 'bold' }}>{props.index + 1}.</p>
      </div>
      <div style={{ textIndent: '0.5em' }}>
        <p style={{ fontWeight: 'bold' }}>{props.place.name}</p>
        <p>{props.place.vicinity}</p>
      </div>
    </div>
  );
};

RyrPopupItem.propTypes = {
  index: PropTypes.number,
  place: PropTypes.object,
  selected: PropTypes.bool
};

export default RyrPopupItem;
