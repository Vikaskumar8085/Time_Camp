import React from "react";
function Input({
  type,
  value,
  onchange,
  placeholder,
  labelText,
  className,
  ...rest
}) {
  return (
    <div className="input_wrapper">
      <label htmlFor={labelText}>{labelText}</label>
      <div className="input_box">
        <input
          type={type}
          value={value}
          onChange={onchange}
          className={className}
          placeholder={placeholder}
          {...rest}
        />
      </div>
    </div>
  );
}

export default Input;
