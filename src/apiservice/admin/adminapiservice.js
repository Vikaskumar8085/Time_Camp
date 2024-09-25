import apiInstance from "../apiInstance";

// add Admin
export const createAdmin = async (payload) => {
  const response = await apiInstance.post("/v1/create-admin", payload);
  return response.data;
};

// get all admins
export const GetallAdminApiCall = async () => {
  const response = await apiInstance.get("/v1/get-all-admin");
  return response.data;
};
