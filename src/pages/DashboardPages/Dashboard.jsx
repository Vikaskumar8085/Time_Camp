import React from "react";
import { setLoader } from "../../redux/slices/loaderSlice";
import { useDispatch } from "react-redux";
import Button from "../../common/Button";
import Proutes from "../../common/Proutes";

function Dashboard() {
  const dispatch = useDispatch();
  return (
    <Proutes>
      <Button onclick={() => dispatch(setLoader(true))}>hello</Button>
    </Proutes>
  );
}

export default Dashboard;
