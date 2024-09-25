import apiInstance from "../apiInstance";

export const fetchCompanyapicall = async () => {
  const response = await apiInstance.get("/v1/get-company");
  return response?.data;
};
//get company api call
export const getcompanyapicall = async () => {
  const response = await apiInstance.get("/v1/fetch-company");
  return response?.data;
};
// add company
export const addcompanyapicall = async (payload) => {
  const response = await apiInstance.post("/v1/add-company", payload);
  return response.data;
};
