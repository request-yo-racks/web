import propTypes from 'prop-types'

const RyrHeader = props => {
    const h1style = {
            color: '#b35c22',
            display: 'inline-block',
            marginLeft: '0.5em',
    };
    return(
        <div>
            <img src="/static/images/logos/ryr_logo-64x64.png" alt="RYR logo" />
            <h1 style={h1style}>Request Yo Racks</h1>
            <style jsx>
            {`
                div > * {
                    vertical-align: middle;
                }
            `}    
            </style>
        </div>
    );
};

RyrHeader.propTypes = {

};
export default RyrHeader;
