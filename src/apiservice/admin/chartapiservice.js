import apiInstance from "../apiInstance";

export const employeeTimeHourApicall = async () => {
  const response = await apiInstance.get("/v1/get-employee-time-hours");
  return response.data;
};

export const getproductivitycharts = async () => {
  const response = await apiInstance.get("/v1/get-productivity-chart");
  return response.data;
};

// get complete projects

export const fetchprojectchartsapicall = async () => {
  const response = await apiInstance.get("/v1/get-project-charts");
  return response.data;
};
