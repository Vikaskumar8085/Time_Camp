import apiInstance from "../apiInstance";

// add employee api call
export const addemployeeapicall = async (payload) => {
  const response = await apiInstance.post("/v1/add-employee", payload);
  return response.data;
};

// get employee
export const fetchemployeedataapicall = async () => {
  const response = await apiInstance.get("/v1/get-employee");
  return response.data;
};

// get single employee information

export const fetchsingleemployeeapicall = async (payload) => {
  const response = await apiInstance.get(
    `/v1/fetch-single-employee/${payload}`
  );
  return response.data;
};

export const fetchemployeeprojectsapicall = async (payload) => {
  const response = await apiInstance.get(
    `/v1/fetch-employee-projects/${payload}`
  );
  return response.data;
};

// fetch all resources

export const fetchallresources = async () => {
  const response = await apiInstance.get("/v1/fetch-all-resources");
  return response.data;
};

export const fetchactiveemployeesapicall = async () => {
  const response = await apiInstance.get("/v1/fetch-active-employee");
  return response.data;
};

// fetch in active employees

export const fetchinactiveemployeeapicall = async () => {
  const response = await apiInstance.get("/v1/fetch-inactive-employee");
  return response.data;
};
