import React from 'react'

function Button({ children }) {
    return (
        <>
            <div className="btn_wrapper">
                <button>
                    {children}
                </button>
            </div>

        </>
    )
}

export default Button
