import {Container} from "@mui/system";
import React from "react";
import Button from "../../../common/Button";
import Input from "../../../common/Input/Input";
import {useDispatch} from "react-redux";
import {useFormik} from "formik";
import {setLoader} from "../../../redux/slices/loaderSlice";
import {toast} from "react-hot-toast";
import {taskupload} from "../../../apiservice/admin/taskapiservice";

function TaskUploadPages() {
  const [filePreview, setFilePreview] = React.useState(null);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      files: null,
    },
    onSubmit: async (values) => {
      try {
        values.type = "Excel";
        dispatch(setLoader(true));
        const formData = new FormData();
        formData.append("file", values.files);
        formData.appent("type", values.type);
        const response = await taskupload(formData);
        if (response.success) {
          dispatch(setLoader(false));
          toast.success(response.message);
        }
        dispatch(setLoader(false));
      } catch (error) {
        console.log(error?.data?.message, "response");
      }
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
          <Button type="submit">Submit</Button>
        </form>
      </Container>
    </div>
  );
}

export default TaskUploadPages;
