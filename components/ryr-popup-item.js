import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const RyrPopupItem = props => {
  // Define the styled components.
  const Container = styled.div({
    display: 'flex',
    flexDirection: 'row',
    fontSize: '0.8em',
    lineHeight: '1.1',
    backgroundColor: props.selected ? 'yellow' : 'rgba(255,255,255,0)',
    padding: '1em'
  });
  const P = styled.p({
    fontWeight: 'bold'
  });
  const IndentedBlock = styled.div({
    textIndent: '0.5em'
  });

  // Render the component.
  return (
    <Container>
      <P>{props.index + 1}.</P>
      <IndentedBlock>
        <P>{props.place.name}</P>
        <p>{props.place.vicinity}</p>
      </IndentedBlock>
    </Container>
  );
};

RyrPopupItem.propTypes = {
  index: PropTypes.number,
  place: PropTypes.object,
  selected: PropTypes.bool
};

export default RyrPopupItem;
