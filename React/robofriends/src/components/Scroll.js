import React from 'react';
import '../containers/App.css';

const Scroll = (props) => {
    return (
        <div id='scroll'>
            {props.children}
        </div>
    )
};

export default Scroll;