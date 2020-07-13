import React from 'react';

function Todo(props) {
    return (
        <div className="list col-sm-10">
            <p>Liste des tâches :</p>
            {props.todo}
        </div>)
}

export default Todo;