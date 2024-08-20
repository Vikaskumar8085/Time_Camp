import React, { Suspense, useState } from "react";
import Button from "../../../../common/Button";
import Loader from "../../../../common/Loader";
import ProjectDrawer from "../../../../components/AdminComponent/ProjectComponent/ProjectDrawer";
import { useDispatch } from "react-redux";
import { setLoader } from "../../../../redux/slices/loaderSlice";

function Project() {
  const [IsOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const PhandleSubmit = async (values) => {
    try {
      dispatch(setLoader(true));

      console.log(values, "value");
    } catch (error) {}
  };

  return (
    <Suspense fallback={<Loader />}>
      <Button type="submit" onclick={() => setIsOpen(true)}>
        Add Project
      </Button>
      {IsOpen && (
        <ProjectDrawer
          IsOpen={IsOpen}
          setIsOpen={setIsOpen}
          PhandleSubmit={PhandleSubmit}
        />
      )}
    </Suspense>
  );
}

export default Project;
