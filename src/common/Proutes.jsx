import React, { useEffect } from 'react'

function Proutes({ children }) {

    useEffect(() => {
        if (!sessionStorage.getItem("token")) {
            // window.location.href = "/login"  
        }
    }, [0])

    return (
        <>
            {children}
        </>
    )
}

export default Proutes
