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

//  @Designation

// add Designation

export const addDesingationApiCall = async (value) => {
  const response = await apiInstance.post("/v1/add-designation", value);
  return response.data;
};

export const GetAllDesignationApiCall = async (value) => {
  const response = await apiInstance.get("/v1/get-all-designation");
  return response.data;
};

export const EditDesignationApiCall = async (value) => {
  console.log("??????????????????///",value, "value");
  const response = await apiInstance.put(
    `/v1/edit-designation/${value.id}`,
    value.payload
  );
  return response;
};
