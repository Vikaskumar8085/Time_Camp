import apiInstance from "../apiInstance";

export const fetchCompanyapicall = async () => {
  const response = await apiInstance.get("/v1/get-company");
  return response?.data;
};


