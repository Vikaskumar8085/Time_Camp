import moment from "moment";
import React from "react";
import { useSelector } from "react-redux";
import Button from "../../../../common/Button";
import TimeSheetDrawer from "../../../../components/AdminComponent/TImeSheetComponent/TimeSheetDrawer";
import TImeSheetHead from "../../../../components/AdminComponent/TImeSheetComponent/TImeSheetHead";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { MdOutlineDelete, MdOutlineEdit } from "react-icons/md";

function TImeSheets({
  updatetimesheetservice,
  handleRemove,
  AddTimesheets,
  handleOpen,
  IsOpen,
  setIsOpen,
  dispatch,
  setSingleTimesheet,
  TSItems,
}) {
  const TimesheetData = useSelector((state) => state.timesheet.values);

  return (
    <>
      <TImeSheetHead />
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
    </>
  );
}

export default TImeSheets;
