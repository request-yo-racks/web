import Proptypes from 'prop-types';
import { connect } from 'react-redux';
import ReactMarkdown from 'react-markdown';

const RyrEmail = props => {
  let email = '';
  if (props.placeDetails != undefined) {
    email = `
  Thanks for contacting us on behalf of ${props.placeDetails.name}.

  Dear city of Austin,

  I would like to request a bike rack at ${props.placeDetails.address}, (geolocation:
  ${props.placeDetails.latitude}, ${props.placeDetails.longitude}). The business supporting this demand
  is ${props.placeDetails.name}.

  The point of contact is ${props.placeDetails.contact_name} and can be contacted via phone (${
      props.placeDetails.phone
    }) or email (${props.placeDetails.email}).

  Current parking situation: ${props.placeDetails.parking_info}

  ${props.placeDetails.extra_info}

  Cheers,

  Request Yo Racks Team
  `;
  }

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
  placeDetails: Proptypes.object
};

const mapStateToProps = state => {
  const { placeDetails } = state;
  return { placeDetails };
};

export default connect(mapStateToProps)(RyrEmail);
