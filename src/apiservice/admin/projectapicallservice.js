import apiInstance from "../apiInstance";
export const getallprojects = async () => {
  const response = await apiInstance.get("/v1/get-projects");
  return response.data;
};
