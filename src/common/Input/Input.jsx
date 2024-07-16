import React from 'react'

function Input({ value, onchange,placeholder, labelText, className }) {
  return (
    <div className='input_wrapper'>
      <label htmlFor={labelText}>{labelText}</label>
      <input type="text" value={value} onChange={onchange} className={className} placeholder={placeholder} />
    </div>
  )
}

export default Input
