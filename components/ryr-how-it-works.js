import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const RyrHowItWorks = props => {
  // Read the props or use default values.
  const iconSize = props.size || '7x';

  // Define the styled components.
  const H2 = styled.h2({
    textAlign: 'center',
    marginBottom: '1em'
  });
  const Container = styled.div({
    margin: '0 auto',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    textAlign: 'center'
  });
  const Item = styled.div({
    width: '33%',
    marginBottom: '2em'
  });

  // Define the common styles.
  const iconStyle = { marginBottom: '0.5em' };

  return (
    <div>
      <H2>How does it Work?</H2>
      <Container>
        <Item>
          <FontAwesomeIcon icon={faMapMarkerAlt} size={iconSize} style={iconStyle} />
          <h3>Select</h3>
          <p>the location</p>
        </Item>
        <Item>
          <FontAwesomeIcon icon={faCheckSquare} size={iconSize} style={iconStyle} />
          <h3>Review</h3>
          <p>the petition</p>
        </Item>
        <Item>
          <FontAwesomeIcon icon={faPaperPlane} size={iconSize} style={iconStyle} />
          <h3>Submit</h3>
          <p>the request</p>
        </Item>
      </Container>
    </div>
  );
};

RyrHowItWorks.propTypes = {
  size: PropTypes.string
};

export default RyrHowItWorks;
