import apiInstance from "../apiInstance";
export const getallprojects = async () => {
  const response = await apiInstance.get("/v1/fetch-all-projects");
  return response.data;
};

export const addprojects = async (payload) => {
  const response = await apiInstance.post("/v1/add-project", payload);
  return response.data;
};
