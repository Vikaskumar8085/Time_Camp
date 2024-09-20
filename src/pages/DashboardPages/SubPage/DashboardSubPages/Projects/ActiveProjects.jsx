import React from "react";
import { Formik, Form, Field, FieldArray } from "formik";
import axios from "axios";

const ActiveProjects = () => {
  return (
    <div>
      <h1>Create Project</h1>
      <Formik
        initialValues={{
          ProjectName: "",
          client: {
            clientId: "",
            clientName: "",
          },
          RoleResource: [{ Employee_Id: "", Employee_Name: "" }],
        }}
        onSubmit={async (values) => {
          try {
            const response = await axios.post(
              "http://localhost:5000/api/projects",
              values
            );
            console.log("Project created:", response.data);
            // Reset form or handle success
          } catch (error) {
            console.error("Error creating project:", error.response.data);
          }
        }}
      >
        {({ values }) => (
          <Form>
            <div>
              <label>Project Name</label>
              <Field name="ProjectName" required />
            </div>
            <div>
              <label>Client ID</label>
              <Field name="client.clientId" type="number" required />
            </div>
            <div>
              <label>Client Name</label>
              <Field name="client.clientName" required />
            </div>

            <h2>Role Resources</h2>
            <FieldArray name="RoleResource">
              {({ push, remove }) => (
                <div>
                  {values.RoleResource.map((role, index) => (
                    <div key={index}>
                      <Field
                        name={`RoleResource.${index}.Employee_Id`}
                        placeholder="Employee ID"
                        type="number"
                        required
                      />
                      <Field
                        name={`RoleResource.${index}.Employee_Name`}
                        placeholder="Employee Name"
                        required
                      />
                      <button type="button" onClick={() => remove(index)}>
                        Remove
                      </button>
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={() => push({ Employee_Id: "", Employee_Name: "" })}
                  >
                    Add Role Resource
                  </button>
                </div>
              )}
            </FieldArray>
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ActiveProjects;
