import React from 'react'

export default (props) => (
    <div className="note">
        <h1>{props.title}</h1>
        <p>{props.note}</p>
        <button style={{borderRadius:'10px'}} onClick={props.onClick}>delete</button>
    </div>
)