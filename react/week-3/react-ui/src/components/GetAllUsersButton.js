import React from 'react';

export default (props) => {
    return (
        <button className="btn btn-primary m-3" onClick={props.getAllUsers} >Get all users</button>
    )
}