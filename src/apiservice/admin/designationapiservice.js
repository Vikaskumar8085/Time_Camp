import apiInstance from "../apiInstance";

export const addDesignationapicall = async (payload) => {
  const response = await apiInstance.post("/v1/add-designation", payload);
  return response.data;
};

export const fetchDesignationapicall = async () => {
  const response = await apiInstance.get("/v1/fetch-designation");
  return response.data;
};
