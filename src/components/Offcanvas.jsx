
import React, { useState } from 'react';

function Offcanvas() {
    const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);

    const toggleOffcanvas = () => {
        setIsOffcanvasOpen(!isOffcanvasOpen);
    };

    return (
        <>

            <button onClick={toggleOffcanvas} className="navbar-toggler collapsed">
                <span className="navbar-toggler-icon"></span>
            </button>

            {/* <button className="btn btn-primary" type="button" onClick={toggleOffcanvas}>
                Toggle right offcanvas
            </button> */}

            <div className={`offcanvas offcanvas-end${isOffcanvasOpen ? ' show' : ''}`} tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasRightLabel">Offcanvas right</h5>
                    <button type="button" className="btn-close" onClick={toggleOffcanvas} aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    {/* ... Content for the offcanvas body */}
                </div>
            </div>
        </>
    );
}
export default Offcanvas;
