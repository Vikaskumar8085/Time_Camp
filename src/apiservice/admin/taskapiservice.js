import apiInstance from "../apiInstance";

export const taskupload = async (payload) => {
  const response = await apiInstance.post("/v1/task-upload", payload);
  return response.data;
};
