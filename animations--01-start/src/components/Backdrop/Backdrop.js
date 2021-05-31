import React from 'react';

import './Backdrop.css';

const backdrop = (props) => {

    const modalClass = `Backdrop ${props.show ? "BackdropOpen" : "BackdropClose"}`;
    return <div className={modalClass}></div>
};

export default backdrop;