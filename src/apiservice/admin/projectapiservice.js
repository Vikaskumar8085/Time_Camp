import apiInstance from "../apiInstance";
//  fetch all projects
export const getallprojects = async () => {
  const response = await apiInstance.get("/v1/fetch-all-projects");
  return response.data;
};
// add projects
export const addprojects = async (payload) => {
  const response = await apiInstance.post("/v1/add-project", payload);
  return response.data;
};

// fetch active projects

export const fetchactiveprojectapicall = async () => {
  const response = await apiInstance.get("/v1/fetch-active-projects");
  return response.data;
};

//  fetch inactive projects

export const fetchinactiveprojectapicall = async () => {
  const response = await apiInstance.get("/v1/fetch-inactive-projects");
  return response.data;
};
