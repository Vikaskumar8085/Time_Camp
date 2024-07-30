import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css'
function InputPhone({
  type,
  value,
  placeholder,
  labelText,
  className,
  ...rest
}) {
  const [isvalue, setisvalue] = useState();
  const handlchagne = (value) => {
    setisvalue(value);
  };

  return (
    <div className="">
      <label htmlFor={labelText}>{labelText}</label>
      <div className="">
        <PhoneInput
          type={type}
          value={value}
          onChange={handlchagne}
          className={className}
          placeholder={placeholder}
          {...rest}
        />
      </div>
    </div>
  );
}

export default InputPhone;
