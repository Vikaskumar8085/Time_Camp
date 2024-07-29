import React, { useState } from "react";

function ChangePassword() {
  const [isOldpassword, setIsoldPassword] = useState("");
  const [Password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(isOldpassword, Password);
  };
  return (
    <>
      <div className="forget_container">
        <div className="forget_wrapper">
          <form onSubmit={handleSubmit}>
            <input
              type="oldpass"
              name=""
              onChange={(e) => setIsoldPassword(e.target.value)}
              id=""
            />
            <input
              type="text"
              name=""
              onChange={(e) => setPassword(e.target.value)}
              id=""
            />
            <button>submit</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default ChangePassword;
