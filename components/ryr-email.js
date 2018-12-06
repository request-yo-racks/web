import Proptypes from 'prop-types';
import { connect } from 'react-redux';
import ReactMarkdown from 'react-markdown';

const RyrEmail = props => {
  const email = `
  Thanks for contacting us on behalf of ${props.text}.

  Dear city of Austin,

  I would like to request a bike rack at ${props.text}, geolocation  ${props.text}}. The business supporting this demand
  is ${props.text}, located at ${props.text}.

  The point of contact is ${props.text} and can be contacted via phone (${props.text}) or email (${props.text}).

  Current parking situation: ${props.text}

  ${props.text}

  Cheers,

  Request Yo Racks Team
  `;

  return (
    <div
      style={{
        width: '90%',
        minHeight: '10em',
        backgroundColor: 'white',
        margin: '0 auto',
        borderRadius: '5px',
        padding: '0.5em'
      }}
    >
      <ReactMarkdown source={email} />
    </div>
  );
};

RyrEmail.propTypes = {
  text: Proptypes.string
};

const mapStateToProps = state => {
  const { text } = state;
  return { text };
};

export default connect(mapStateToProps)(RyrEmail);
