import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const footerStyle = { borderTop: 'solid black 1px', textAlign: 'center', paddingTop: '0.50em' };
const footerIconSize = '3x';
const footerIconStyle = { margin: '0 0.3em' };

const RyrFooter = props => {
  let iconSize = props.size || footerIconSize;
  return (
    <div style={footerStyle}>
      <FontAwesomeIcon icon={faFacebook} size={iconSize} style={footerIconStyle} />
      <FontAwesomeIcon icon={faTwitter} size={iconSize} style={footerIconStyle} />
      <FontAwesomeIcon icon={faGithub} size={iconSize} style={footerIconStyle} />
    </div>
  );
};

RyrFooter.propTypes = {
  size: PropTypes.string
};

export default RyrFooter;
