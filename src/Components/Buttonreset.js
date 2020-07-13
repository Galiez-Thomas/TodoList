import React from 'react';

function Buttonreset (props) {
    return (
        <button className="btn btn-danger" onClick={props.reset}>Reset</button>
    )
}

export default Buttonreset;