import React from 'react'
import { ScaleLoader } from 'react-spinners'

function Loader() {
  return (
    <div className="Loader_container">
      <div className="Loader_row">
        <ScaleLoader color='#ffffff' />
      </div>
    </div>
  )
}

export default Loader
