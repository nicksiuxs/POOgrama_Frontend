import React from 'react';
import "./LeftSide.css";

const LeftSide = ({ title, definition, example, imageExample, exampleDescription, activity }) => {
    return (
        <aside className="left-side">
            <h1>{title}</h1>
            <p className="left-side-definition">{definition}</p>
            <p className="left-side-example">{example}</p>
            <figure className="left-side-image">
                <img src={imageExample} alt="example" />
            </figure>
            <p className="left-side-example-description">{exampleDescription}</p>
            <p>{activity}</p>
        </aside>
    )
}

export default LeftSide