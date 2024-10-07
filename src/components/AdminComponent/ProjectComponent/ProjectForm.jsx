import React from "react";
import {useFormik} from "formik";

const ProjectForm = () => {
  const formik = useFormik({
    initialValues: {
      roleResources: [
        {
          RRId: "",
          RRName: "",
        },
      ],
    },
    onSubmit: (values) => {
      console.log(values);
      // Handle form submission, e.g., API call
    },
  });

  const handleAddResource = () => {
    formik.setFieldValue("roleResources", [
      ...formik.values.roleResources,
      {RRId: "", RRName: ""},
    ]);
  };

  const handleRemoveResource = (index) => {
    const newRoleResources = formik.values.roleResources.filter(
      (_, i) => i !== index
    );
    formik.setFieldValue("roleResources", newRoleResources);
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <h2>Resource Roles</h2>
      {formik.values.roleResources.map((resource, index) => (
        <div key={index} style={{marginBottom: "10px"}}>
          <input
            type="text"
            placeholder="Resource ID"
            {...formik.getFieldProps(`roleResources.${index}.RRId`)}
          />
          <input
            type="text"
            placeholder="Resource Name"
            {...formik.getFieldProps(`roleResources.${index}.RRName`)}
          />
          <button type="button" onClick={() => handleRemoveResource(index)}>
            Remove
          </button>
        </div>
      ))}
      <button type="button" onClick={handleAddResource}>
        Add Resource
      </button>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ProjectForm;
