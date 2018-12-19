import PropTypes from 'prop-types';

const RyrInstructions = () => {
  return (
    <div>
      <div id="instructions" className="color-black">
        <h2 className="center">What to do next?</h2>
        <div className="instruction-list">
          <ol className="list-numbered">
            <li>
              Send your email to{' '}
              <a href="mailto:bicycleprogram@austintexas.gov?subject=Bicycle Corral Request">
                bicycleprogram@austintexas.gov
              </a>
            </li>
            <li>Set &quot;Bicycle Corral Request&quot; as the subject.</li>
          </ol>
        </div>
      </div>
      <style jsx>
        {`
      h2 {
        text-align: center;
        margin-bottom: 1em;
        margin-top: 1em;
      }

      #instructions {
        background-color: #DDFDDF;
      }

      .instruction-list {
        margin: auto;
        max-width: 450px;
        width: 100%;
      }

      .list-numbered {
        list-style: none;
        margin-left: 1em;
        counter-reset: line;
      }

      .list-numbered > li {
        position: relative;
        margin-bottom: 1.5em;
      }

      .list-numbered > li:before {
        position: absolute;
        left: -2.25em;
        display: inline-block;
        width: 1.25em;
        height: 1.25em;
        margin-right: 0.5em;
        background-color: #129406;
        border-radius: 50%;
        color: #fff;
        text-align: center;
        vertical-align: middle;
        line-height: 1.25em;
        counter-increment: line;
        content: counter(line);
      }

      `}
      </style>
    </div>
  );
};

RyrInstructions.propTypes = {
  size: PropTypes.string
};

export default RyrInstructions;
