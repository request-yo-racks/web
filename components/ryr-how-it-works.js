import PropTypes from 'prop-types';
import facepaint from 'facepaint';
import styled from '@emotion/styled';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const RyrHowItWorks = props => {
  // Define responsive options.
  const breakpoints = [600];
  const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}px)`));

  // Read the props or use default values.
  const iconSize = props.size || '5x';

  // Define the styled components.
  const H2 = styled.h2({
    textAlign: 'center',
    marginBottom: '1em'
  });
  const Container = styled.div(
    mq({
      margin: '0 auto',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: ['column', 'row'],
      textAlign: 'center'
    })
  );
  const Item = styled.div({
    width: '33%',
    marginBottom: '2em'
  });

  // Define the common styles.
  const IconDiv = styled.div(
    mq({
      fontSize: ['0.75em', '1em']
    })
  );

  // Render the component.
  return (
    <div>
      <H2>How does it Work?</H2>
      <Container>
        <Item>
          <IconDiv>
            <FontAwesomeIcon icon={faMapMarkerAlt} size={iconSize} />
          </IconDiv>
          <h3>Select</h3>
          <p>the location</p>
        </Item>
        <Item>
          <IconDiv>
            <FontAwesomeIcon icon={faCheckSquare} size={iconSize} />
          </IconDiv>
          <h3>Review</h3>
          <p>the petition</p>
        </Item>
        <Item>
          <IconDiv>
            <FontAwesomeIcon icon={faPaperPlane} size={iconSize} />
          </IconDiv>
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
