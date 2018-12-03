import PropTypes from 'prop-types';

const RyrInstructions = props => {

  return (
    <div>
      <div id="instructions" className="color-black">
        <h2 className="center">What to do next?</h2>
        <div className="instruction-list">
          <ol className="list-numbered">
            <li>
              Send your email to <a href="mailto:bicycleprogram@austintexas.gov?subject=Bicycle Corral Request">
                bicycleprogram@austintexas.gov
              </a>
            </li>
            <li>
                Set "Bicycle Corral Request" as the subject.
            </li>
          </ol>
        </div>
      </div>
    <style jsx>

      {`
      h2 {
        text-align: center;
        margin-bottom: 1em;
      }
      
      section {
        padding: 15px;
      }

      #instructions {
        background-color: #DDFDDF;
      }

      .circle {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 4.5em;
        height: 4.5em;
        border-radius: 50%;
        background-color: white;
        color: #5AAD54;
      }  

      .section-connector {
        width: 100%;
        height: 75px;
        margin-bottom: -1em;
        padding: 0;
      }

      .section-connector-location {
        background-color: #2E5D2A;
        fill: white;
      }

      .section-connector-preview {
        background-color: #5AAD54;
        fill: #2E5D2A;
      }

      .section-connector-instructions {
        background-color: #DDFDDF;
        fill: #5AAD54;
      }

      .instruction-list {
        margin: auto;
        max-width: 450px;
      }

      .instruction-list {
        margin: auto;
        width: 70%;

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
      .instruction-list {
          width: 100%;
        }
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
