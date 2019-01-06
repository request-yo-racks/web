import Proptypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import styled from '@emotion/styled';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';
import { faCopy } from '@fortawesome/free-solid-svg-icons';

const RyrPreview = props => {
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
  const PreviewArea = styled.div({
    width: '90%',
    minHeight: '10em',
    backgroundColor: 'white',
    margin: '0 auto 1em auto',
    borderRadius: '5px'
  });

  const CopyButton = styled.button({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '1.75em',
    height: '1.75em',
    fontSize: '2.5em',
    borderRadius: '50%',
    backgroundColor: 'white',
    color: 'black',
    margin: '0 auto',
    '&:active': {
      backgroundColor: 'rgba(128, 128, 128,.5)'
    },
    '&:focus': {
      outline: '0'
    }
  });

  return (
    <div>
      <PreviewArea>
        <ReactMarkdown source={email} />
      </PreviewArea>
      <CopyToClipboard text={email}>
        <CopyButton>
          <FontAwesomeIcon icon={faCopy} size="1x" />
        </CopyButton>
      </CopyToClipboard>
    </div>
  );
};

RyrPreview.propTypes = {
  placeDetails: Proptypes.object
};

const mapStateToProps = state => {
  const { placeDetails } = state;
  return { placeDetails };
};

export default connect(mapStateToProps)(RyrPreview);
