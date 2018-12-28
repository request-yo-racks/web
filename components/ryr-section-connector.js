// Inspired from http://www.cssarrowplease.com.
import PropTypes from 'prop-types';

const RyrSectionConnector = props => {
  const fill = props.fill || 'white';
  return (
    <div>
      <div className="arrow_box" />
      <style jsx>
        {`
          .arrow_box {
            position: relative;
            background: ${fill};
            border: 4px solid ${fill};
          }
          .arrow_box:after,
          .arrow_box:before {
            top: 100%;
            left: 50%;
            border: solid transparent;
            content: ' ';
            height: 0;
            width: 0;
            position: absolute;
            pointer-events: none;
          }

          .arrow_box:after {
            border-top-color: ${fill};
            border-width: 30px;
            margin-left: -30px;
          }
          .arrow_box:before {
            border-top-color: ${fill};
            border-width: 4em;
            margin-left: -4em;
          }
        `}
      </style>
    </div>
  );
};

RyrSectionConnector.propTypes = {
  fill: PropTypes.string
};

export default RyrSectionConnector;
