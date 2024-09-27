import apiInstance from "../apiInstance";

export const createClientapicall = async (values) => {
  const response = await apiInstance.post("/v1/add-client", values);
  return response.data;
};

export const fetchclientapicall = async () => {
  const response = await apiInstance.get("/v1/get-client");
  return response?.data;
};

export const activeclientapicall = async () => {
  const response = await apiInstance.get("/v1/get-active-client");
  return response?.data;
};

export const inactiveclientapicall = async () => {
  const response = await apiInstance.get("/v1/get-inactive-client");
  return response?.data;
};

export const deadclientapicall = async () => {
  const response = await apiInstance.get("/v1/get-dead-client");
  return response?.data;
};

// fetch single client
export const fetchsingleclientapicall = async (payload) => {
  const response = await apiInstance.get(`/v1/fetch-single-client/${payload}`);
  return response.data;
};
// fetch client projects

export const fetchclientprojectsapicall = async (payload) => {
  console.log(payload, "payload");
  const repsonse = await apiInstance.get(
    `/v1//fetch-client-projects/${payload}`
  );
  return repsonse.data;
};
