import apiInstance from "../apiInstance";

export const fetchclientapicall = async () => {
  const response = await apiInstance.get("/v1/get-client");
  return response?.data;
};

export const activeclientapicall = async () => {
  const response = await apiInstance.get("/v1/get-Active-client");
  return response;
};

export const inactiveclientapicall = async () => {
  const response = await apiInstance.get("/v1/get-InActive-client");
  return response;
};

export const deadclientapicall = async () => {
  const response = await apiInstance.get("/v1/get-dead-client");
  return response;
};
