import apiInstance from "../apiInstance";

export const taskupload = async (payload) => {
  const response = await apiInstance.post("/v1/task-upload", payload);
  return response.data;
};

export const createtaskapicall = async (payload) => {
  console.log(payload,"formdata from task create")
  const response = await apiInstance.post("/v1/create-task", payload);
  return response.data;
};
