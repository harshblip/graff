import React, { useState } from "react";
import './Modal.css';

type GraphDProps = {
    show: boolean;
    setShow: (show: boolean) => void;
}

const GraphsDetails: React.FC<GraphDProps> = ( props ) => {

    const toggleModal = () => {
        props.setShow(!props.show);
    };
    return (
        <>
            <div className="modal text-black">
                <div className="content">
                    <h1>Hello, World!</h1>
                    <p>Welcome to the modal.</p>
                    <button onClick={toggleModal}>Close</button>
                </div>
            </div>
        </>
    )
}

export default GraphsDetails;