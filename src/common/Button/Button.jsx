import React from 'react'
import PropTypes from 'prop-types';

function Button({ onclick, children }) {
    return (
        <>
            <div className="btn_wrapper">
                <button onClick={onclick}>
                    {children}
                </button>
            </div>

        </>
    )
}

export default Button;



