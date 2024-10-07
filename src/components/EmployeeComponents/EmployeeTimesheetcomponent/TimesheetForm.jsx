import React from "react";
import {useFormik} from "formik";

const TimesheetForm = () => {
  const formik = useFormik({
    initialValues: {
      project: "",
      taskDescription: "",
      description: "",
      startTime: "",
      hours: "00:00",
    },
    onSubmit: (values, {resetForm}) => {
      console.log("Timesheet Data Submitted:", values);
      resetForm();
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
            <option value="1">Project 1</option>
            <option value="2">Project 2</option>
            <option value="3">Project 3</option>
          </select>
        </div>

        <div style={{marginBottom: "15px"}}>
          <label htmlFor="taskDescription">Task Description</label>
          <textarea
            id="taskDescription"
            name="taskDescription"
            value={formik.values.taskDescription}
            onChange={formik.handleChange}
            rows="4"
            required
            style={{width: "100%"}}
          />
        </div>

        <div style={{marginBottom: "15px"}}>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={formik.values.description}
            onChange={formik.handleChange}
            rows="2"
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
            value={formik.values.startTime}
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
