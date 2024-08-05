import apiInstance from "../apiInstance";

// create client
export const createClient = async (payload) => {
  const response = await apiInstance.post("/v1/create-client", payload);
  return response;
};
// get single client

export const getSingleClient = async (palyoad) => {
  const response = await apiInstance.get(`/v1/get-single-client/${palyoad}`);
  return response;
};

// get client
export const GetClientApiCall = async () => {
  const response = await apiInstance.get("/v1/get-all-client");
  return response;
};

// add Admin
export const createAdmin = async (payload) => {
  const response = await apiInstance.post("/v1/create-admin", payload);
  return response;
};

// get all admins
export const GetallAdminApiCall = async () => {
  const response = await apiInstance.get("/v1/get-all-admin");
  return response;
};
