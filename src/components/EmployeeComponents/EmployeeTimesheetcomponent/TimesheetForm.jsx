import React from "react";
import {useFormik} from "formik";
import {useDispatch, useSelector} from "react-redux";
import {setLoader} from "../../../redux/slices/loaderSlice";
import {addtimesheetsapicall} from "../../../apiservice/employee/employeeprojectapiservice";

const TimesheetForm = ({setOpen}) => {
  const datafilltimesheetproject = useSelector(
    (state) => state.employeetimesheet.timesheetprojects
  );

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      project: "",
      task_description: "",
      Description: "",
      start_time: "",
      hours: "00:00",
    },
    onSubmit: async (values, {resetForm}) => {
      try {
        dispatch(setLoader(true));
        console.log(values, "values");
        const response = await addtimesheetsapicall(values);
        console.log(response, "add fill time sheet");
        if (response.success) {
          dispatch(setLoader(false));
          resetForm();
          setOpen(false);
        }
      } catch (error) {
        console.log(error?.message);
      }
    },
  });

  return (
    <div style={{maxWidth: "600px", margin: "0 auto", padding: "20px"}}>
      <h2>Timesheet Form</h2>
      <form onSubmit={formik.handleSubmit}>
        <div style={{marginBottom: "15px"}}>
          <label htmlFor="project">Project</label>
          <select
            id="project"
            name="project"
            value={formik.values.project}
            onChange={formik.handleChange}
            required
          >
            <option value="" label="Select project" />
            {datafilltimesheetproject.map((item, index) => {
              return (
                <>
                  <option value={item?.ProjectId}>{item.Project_Name}</option>
                </>
              );
            })}
          </select>
        </div>

        <div style={{marginBottom: "15px"}}>
          <label htmlFor="task_description">Task Description</label>
          <textarea
            id="task_description"
            name="task_description"
            value={formik.values.task_description}
            onChange={formik.handleChange}
            rows="4"
            required
            style={{width: "100%"}}
          />
        </div>

        <div style={{marginBottom: "15px"}}>
          <label htmlFor="Description">Description</label>
          <textarea
            id="Description"
            name="Description"
            value={formik.values.Description}
            onChange={formik.handleChange}
            rows="4"
            maxLength={5000}
            style={{width: "100%"}}
          />
        </div>

        <div style={{marginBottom: "15px"}}>
          <label htmlFor="startTime">Start Time</label>
          <input
            id="startTime"
            name="startTime"
            type="date"
            value={formik.values.start_time}
            onChange={formik.handleChange}
            required
          />
        </div>

        <div style={{marginBottom: "15px"}}>
          <label htmlFor="hours">Hours</label>
          <input
            id="hours"
            name="hours"
            type="time"
            value={formik.values.hours}
            onChange={formik.handleChange}
            required
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default TimesheetForm;
