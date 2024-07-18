import React from "react";
import { FaEyeSlash, FaEye } from "react-icons/fa";

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
      <input
        type={type}
        value={value}
        onChange={onchange}
        className={className}
        placeholder={placeholder}
        {...rest}
      />
    </div>
  );
}

export default Input;
