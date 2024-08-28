import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import moment from "moment";
import React, { Suspense, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { MdOutlineDelete, MdOutlineEdit } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {
  addTimesheetApiCall,
  edittimesheetapicall,
  GetallTimesheetapicall,
  removetimesheetapicall,
} from "../../../../apiservice/admin";
import Button from "../../../../common/Button";
import Loader from "../../../../common/Loader";
import TimeSheetDrawer from "../../../../components/AdminComponent/TImeSheetComponent/TimeSheetDrawer";
import { setLoader } from "../../../../redux/slices/loaderSlice";
import {
  setSingleTimesheet,
  setTimesheetValue,
} from "../../../../redux/slices/Timesheet/TimesheetSlice";

function TimeSheet() {
  const [IsOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const TimesheetData = useSelector((state) => state.timesheet.values);
  const TSItems = useSelector((state) => state.timesheet.singleValue);

  const handleOpen = () => {
    setIsOpen(true);
  };

  // get all timesheets
  const getalltimesheetservice = async () => {
    try {
      dispatch(setLoader(true));
      const response = await GetallTimesheetapicall();
      if (response?.data?.success) {
        dispatch(setLoader(false));
        dispatch(setTimesheetValue(response?.data?.message));
      }
    } catch (error) {
      dispatch(setLoader(false));
      console.log(error?.response?.data);
    }
  };

  // add timesheets
  const AddTimesheets = async (value) => {
    try {
      dispatch(setLoader(true));
      const response = await addTimesheetApiCall(value);
      console.log(response, "response");
      if (response.status === 200) {
        dispatch(setLoader(false));
        setIsOpen(false);
        getalltimesheetservice();
        toast.success("TimeSheet data added successfully");
      }
    } catch (error) {
      dispatch(setLoader(false));
      console.log(error?.response?.data);
    }
  };

  // Remove TimeSheet

  const handleRemove = async (value) => {
    try {
      dispatch(setLoader(true));
      const response = await removetimesheetapicall(value);
      if (response.status === 200) {
        toast?.success(response.data?.message);
        dispatch(setLoader(false));
        getalltimesheetservice();
      }
    } catch (error) {
      dispatch(setLoader(false));
      console.log(error?.response?.data);
    }
  };

  //   Update time sheets

  const updatetimesheetservice = async (value) => {
    try {
      console.log(value, "edit value");
      const Val = {
        id: TSItems._id,
        payload: value,
      };
      dispatch(setLoader(true));
      const response = await edittimesheetapicall(Val);
      if (response.status === 200) {
        dispatch(setLoader(false));
        setIsOpen(false);
        getalltimesheetservice();
        toast.success("updated timeSheet successfully");
      }
    } catch (error) {
      dispatch(setLoader(false));
      setIsOpen(false);
      toast.error(error?.response?.data);
    }
  };
  useEffect(() => {
    getalltimesheetservice();
  }, [dispatch]);

  return (
    <>
      <Suspense fallback={<Loader />}>
        <Button type={"submit"} onclick={handleOpen}>
          Add TimeSheet
        </Button>
        {IsOpen && (
          <TimeSheetDrawer
            IsOpen={IsOpen}
            setIsOpen={setIsOpen}
            AddTimesheets={AddTimesheets}
            TSItems={TSItems}
            updatetimesheetservice={updatetimesheetservice}
          />
        )}

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell align="right">ProjectName</TableCell>
                <TableCell align="right">Company</TableCell>
                <TableCell align="right">Task Description</TableCell>
                <TableCell align="right">Description</TableCell>
                <TableCell align="right">Bill Status</TableCell>
                <TableCell align="right">Resource</TableCell>
                <TableCell align="right">StartTime</TableCell>
                <TableCell align="right">Endtime</TableCell>
                <TableCell align="right">Approvel</TableCell>
                <TableCell align="right">CreateDate</TableCell>
                <TableCell align="right">Approvel_Date</TableCell>
                <TableCell align="right">Hours</TableCell>
                <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {TimesheetData?.map((item, index) => {
                return (
                  <>
                    <TableRow
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell key={index}>{index + 1}</TableCell>
                      <TableCell>{item?.ProjectName}</TableCell>
                      <TableCell>{item?.Company}</TableCell>
                      <TableCell>{item?.Task_Description}</TableCell>
                      <TableCell>{item?.Description}</TableCell>
                      <TableCell>{item?.Bill_Status}</TableCell>
                      <TableCell>{item?.Resource}</TableCell>
                      <TableCell>{item?.StartTime}</TableCell>
                      <TableCell>{item?.Endtime}</TableCell>
                      <TableCell>{item?.Approvel}</TableCell>
                      <TableCell>
                        {moment(item?.CreateDate).format("DD/MM/YYYY")}
                      </TableCell>
                      <TableCell>
                        {moment(item?.Approvel_Date).format("DD/MM/YYYY")}
                      </TableCell>
                      <TableCell>{item?.Hours}</TableCell>
                      <TableCell>
                        <span onClick={() => handleRemove(item?._id)}>
                          <MdOutlineDelete
                            style={{ fontSize: "1.2em", margin: "0px 3px" }}
                          />
                        </span>
                        <span
                          onClick={() => {
                            setIsOpen(true);
                            dispatch(setSingleTimesheet(item));
                          }}
                        >
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
    </>
  );
}

export default TimeSheet;
