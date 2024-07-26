import React from "react";
import { Helmet } from "react-helmet-async";

import SignUpForm from "../../components/SignUp/SignUpForm";

const SiginUp = () => {
  const handleSubmit = (values) => {
    console.log(values, "////");
  };
  return (
    <>
      <Helmet>
        <title>Sign Up</title>
      </Helmet>
      <div className="Register_wrapper">
        <div className="Register_box">
            {/* <div className="Register_leftSide">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates excepturi expedita incidunt dolores enim perferendis
                exercitationem alias corporis iure esse repudiandae ad vel tenetur
                rem quas, numquam ex quibusdam odio.
              </p>
            </div> */}
          <div className="Register_RightSide">
            <div className="Register_title">
              <h1>Register</h1>
            </div>
            <SignUpForm handleSubmit={handleSubmit} />
          </div>
        </div>
      </div>
    </>
  );
};

export default SiginUp;
