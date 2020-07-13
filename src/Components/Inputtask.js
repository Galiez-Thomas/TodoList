import React from 'react';

function Inputtask(props) {
    return (
        <div className="input-group flex-nowrap taskInput col-sm-11" style={{marginBottom: '3%'}}>
            <div className="input-group-prepend">
                <span className="input-group-text">Tâches</span>
            </div>
            <input
                type="text"
                className="form-control"
                placeholder="Ex : Aspirer"
                value={props.val}
                onChange={props.change}
            />
        </div>
    );
}

export default Inputtask;