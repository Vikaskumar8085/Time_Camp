import React, { useState } from "react";

function ForgetPassword() {
  const [isEmail, setIsEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(isEmail);
  };
  return (
    <>
      <div className="forget_container">
        <div className="forget_wrapper">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name=""
              onChange={(e) => setIsEmail(e.target.value)}
              id=""
            />
            <button>submit</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default ForgetPassword;
