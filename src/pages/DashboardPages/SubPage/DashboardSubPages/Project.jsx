import React, {Suspense, useState} from "react";
import Loader from "../../../../common/Loader";
import {useDispatch, useSelector} from "react-redux";
import {setLoader} from "../../../../redux/slices/loaderSlice";
// import {
//   addprojectapicall,
//   removeprojectapicall,
// } from "../../../../apiservice/admin";
import toast from "react-hot-toast";
import {useEffect} from "react";
import {
  setProjectValues,
  setSingelProject,
} from "../../../../redux/slices/ProjectSlice/projectslice";

import TabComp from "../../../../common/TabComp";
import AllProjects from "./Projects/AllProjects";
import ActiveProjects from "./Projects/ActiveProjects";
import InActiveProjects from "./Projects/InActiveProjects";
import {addprojects} from "../../../../apiservice/admin/projectapiservice";

function Project() {
  const [IsOpen, setIsOpen] = useState(false);
  const projectitmes = useSelector((state) => state.project.value);
  const PItems = useSelector((state) => state?.project?.singleValue);
  const dispatch = useDispatch();

  // project add data
  const PhandleSubmit = async (values) => {
    try {
      dispatch(setLoader(true));
      const response = await addprojects(values);
      console.log(response,'response')
      // if (response?.status === 201) {
      //   console.log("response", response?.data);
      //   dispatch(setLoader(false));
      //   setIsOpen(false);
      //   getallprojects();
      //   toast.success(response?.data?.message);
      // }
    } catch (error) {
      console.log(error?.response?.data);
      dispatch(setLoader(false));
    }
  };

  // project get data
  const getallprojects = async () => {
    try {
      // dispatch(setLoader(true));
      // const response = await getallprojects();
      // if (response?.status === 200) {
      //   dispatch(setProjectValues(response?.data));
      //   dispatch(setLoader(false));
      // }
    } catch (error) {
      console.log(error?.response?.data);
      dispatch(setLoader(false));
    }
  };

  const RemoveProjects = async (value) => {
    try {
      // console.log(value, "value");
      // dispatch(setLoader(true));
      // const response = await removeprojectapicall(value);
      // if (response?.status === 200) {
      //   console.log(response);
      //   dispatch(setLoader(false));
      //   getallprojects();
      // }
    } catch (error) {
      console.log(error?.response?.data);
      dispatch(setLoader(false));
    }
  };

  // edit

  const handleEdit = (value) => {
    setIsOpen(true);
    dispatch(setSingelProject(value));
  };

  const EPhandleSubmit = async (value) => {
    const Val = {
      id: PItems.Project_Id,
      payload: value,
    };
    console.log(Val);
  };

  useEffect(() => {
    getallprojects();
  }, [0]);

  // Project tabs
  const tabsheadr = [
    {title: "All Projects"},
    {title: "Active Projects"},
    {title: "In Active Projects"},
  ];
  const Tabsbody = [
    {
      content: (
        <>
          <AllProjects
            IsOpen={IsOpen}
            projectitmes={projectitmes}
            PhandleSubmit={PhandleSubmit}
            RemoveProjects={RemoveProjects}
            EPhandleSubmit={EPhandleSubmit}
            handleEdit={handleEdit}
            dispatch={dispatch}
            setIsOpen={setIsOpen}
            PItems={PItems}
          />
        </>
      ),
    },
    {
      content: (
        <>
          <ActiveProjects />
        </>
      ),
    },
    {
      content: (
        <>
          <InActiveProjects />
        </>
      ),
    },
  ];
  //  Project tabs
  return (
    <Suspense fallback={<Loader />}>
      <TabComp Tabsheader={tabsheadr} TabsBody={Tabsbody} />
    </Suspense>
  );
}

export default Project;
