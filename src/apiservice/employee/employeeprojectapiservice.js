import apiInstance from "../apiInstance";

export const fetchemployeeprojects = async () => {
  const response = await apiInstance.get("/v3/fetch-employee-projects");
  return response.data;
};

export const fetchactiveemployeeprojects = async () => {
  const response = await apiInstance.get("/v3/fetch-employee-active-projects");
  return response.data;
};

export const fetchInactiveemployeeProjects = async () => {
  const response = await apiInstance.get(
    "/v3/fetch-employee-inactive-projects"
  );
  return response.data;
};

export const addtimesheetsapicall = async (payload) => {
  const response = await apiInstance.post(
    "/v3/add-employee-timesheet",
    payload
  );
  return response.data;
};

export const fetchemployeetimesheetdataapicall = async () => {
  const response = await apiInstance.get("/v3/fetch-employee-timesheet");
  return response.data;
};



