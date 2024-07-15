import React from 'react'
import { ScaleLoader } from 'react-spinners'

function Loader() {
  return (
    <div className="Loader_container">
      <div className="Loader_row">
        <ScaleLoader color='red' />
      </div>
    </div>
  )
}

export default Loader
