import {Container} from "@mui/system";
import React from "react";
import Button from "../../../common/Button";
import Input from "../../../common/Input/Input";
import {useFormik} from "formik";

function TaskUploadPages() {
  const [filePreview, setFilePreview] = React.useState(null);

  const formik = useFormik({
    initialValues: {
      files: null,
    },
    onSubmit: (values) => {
      // Handle form submission
      console.log(values.files);
      // You can also handle the file upload here
    },
  });

  const handleFileChange = (event) => {
    const file = event.currentTarget.files[0];
    formik.setFieldValue("files", file);

    // Create a preview URL
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setFilePreview(previewUrl);
    }
  };
  return (
    <div>
      <Container>
        <form onSubmit={formik.handleSubmit}>
          <Input type="file" onChange={handleFileChange} />
          {/* {filePreview && (
            <div>
              <h3>File Preview:</h3>
              <img
                src={filePreview}
                alt="File preview"
                style={{maxWidth: "200px"}}
              />
            </div>
          )} */}
          <button type="submit">Submit</button>
        </form>
      </Container>
    </div>
  );
}

export default TaskUploadPages;
