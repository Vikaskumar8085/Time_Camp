import React, { Suspense, useState } from "react";
import Button from "../../../../common/Button";
import Loader from "../../../../common/Loader";
import ProjectDrawer from "../../../../components/AdminComponent/ProjectComponent/ProjectDrawer";
import { useDispatch, useSelector } from "react-redux";
import { setLoader } from "../../../../redux/slices/loaderSlice";
import {
  addprojectapicall,
  getallprojectsapicall,
  removeprojectapicall,
} from "../../../../apiservice/admin";
import toast from "react-hot-toast";
import { useEffect } from "react";
import {
  setProjectValues,
  setSingelProject,
} from "../../../../redux/slices/ProjectSlice/projectslice";
import {
  TableContainer,
  Table,
  TableHead,
  Paper,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";
import { MdOutlineDelete, MdOutlineEdit } from "react-icons/md";
import TabComp from "../../../../common/TabComp";

function Project() {
  const [IsOpen, setIsOpen] = useState(false);
  const projectitmes = useSelector((state) => state.project.value);
  const PItems = useSelector((state) => state?.project?.singleValue);
  const dispatch = useDispatch();

  // project add data
  const PhandleSubmit = async (values) => {
    try {
      dispatch(setLoader(true));
      const response = await addprojectapicall(values);
      if (response?.status === 201) {
        console.log("response", response?.data);
        dispatch(setLoader(false));
        setIsOpen(false);
        getallprojects();
        toast.success(response?.data?.message);
      }
    } catch (error) {
      console.log(error?.response?.data);
      dispatch(setLoader(false));
    }
  };

  // project get data
  const getallprojects = async () => {
    try {
      dispatch(setLoader(true));
      const response = await getallprojectsapicall();
      if (response?.status === 200) {
        dispatch(setProjectValues(response?.data));
        dispatch(setLoader(false));
      }
    } catch (error) {
      console.log(error?.response?.data);
      dispatch(setLoader(false));
    }
  };

  const RemoveProjects = async (value) => {
    try {
      console.log(value, "value");
      dispatch(setLoader(true));
      const response = await removeprojectapicall(value);
      if (response?.status === 200) {
        console.log(response);
        dispatch(setLoader(false));
        getallprojects();
      }
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
    { title: "All Projects" },
    { title: "Active Projects" },
    { title: "In Active Projects" },
  ];
  const Tabsbody = [
    {
      content: <></>,
    },
  ];
  //  Project tabs
  return (
    <Suspense fallback={<Loader />}>
      <TabComp Tabsheader={tabsheadr} TabsBody={Tabsbody} />

      <Button type="submit" onclick={() => setIsOpen(true)}>
        Add Project
      </Button>
      {IsOpen && (
        <ProjectDrawer
          IsOpen={IsOpen}
          setIsOpen={setIsOpen}
          PhandleSubmit={PhandleSubmit}
          EPhandleSubmit={EPhandleSubmit}
          PItems={PItems}
        />
      )}

      {/* table project */}
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="right">ProjectName</TableCell>
              <TableCell align="right">ProjectCode</TableCell>
              <TableCell align="right">Client Name</TableCell>
              <TableCell align="right">Start Date</TableCell>
              <TableCell align="right">End Date</TableCell>
              <TableCell align="right">Project Type</TableCell>
              <TableCell align="right">Project Manager</TableCell>
              <TableCell align="right">Role</TableCell>
              <TableCell align="right">Employee</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {projectitmes?.map((item, index) => {
              return (
                <>
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell key={index}>{index + 1}</TableCell>
                    <TableCell>{item?.Project_Name}</TableCell>
                    <TableCell>{item?.Project_Code}</TableCell>
                    <TableCell>{item?.Client_Name}</TableCell>
                    <TableCell>{item?.Start_Date}</TableCell>
                    <TableCell>{item?.End_Date}</TableCell>
                    <TableCell>{item?.Project_Type}</TableCell>
                    <TableCell>{item?.Project_Managers}</TableCell>
                    <TableCell>{item?.Role}</TableCell>
                    <TableCell>{item?.Employee}</TableCell>
                    <TableCell>
                      <span onClick={() => RemoveProjects(item?.Project_Id)}>
                        <MdOutlineDelete
                          style={{ fontSize: "1.2em", margin: "0px 3px" }}
                        />
                      </span>
                      <span onClick={() => handleEdit(item)}>
                        <MdOutlineEdit
                          style={{ fontSize: "1.2em", margin: "0px 3px" }}
                        />
                      </span>
                    </TableCell>
                  </TableRow>
                </>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Suspense>
  );
}

export default Project;
