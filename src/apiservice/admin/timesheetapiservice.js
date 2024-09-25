import apiInstance from "../apiInstance";

// fetch all timesheets
export const fetchtimesheets = async () => {
  const response = await apiInstance("");
  return response.data;
};
