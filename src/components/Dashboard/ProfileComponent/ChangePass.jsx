import { Box } from "@mui/system";
import React from "react";
import Button from "../../../common/Button";
import InputPassword from "../../../common/Input/InputPassword";

function ChangePass() {
  return (
    <>
      <div className="ChangePass_Wrapper">
        <Box sx={{maxWidth:320}}>
          <form>
            <InputPassword labelText={"Old Password"} placeholder={'Old Password'}/>
            <InputPassword labelText={"New Password"} placeholder={'New Password'}/>
            <Button type={"submit"}>Submit</Button>
          </form>
        </Box>
      </div>
    </>
  );
}

export default ChangePass;
