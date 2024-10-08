import apiInstance from "../apiInstance";

export const addDepartmentapicall = async (payload) => {
  const response = await apiInstance.post("/v1/add-department", payload);
  return response.data;
};

export const fetchDepartmentapicall = async () => {
  const response = await apiInstance.get("/v1/fetch-department");
  return response.data;
};
