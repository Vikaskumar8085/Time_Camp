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

//Delete Client data
export const RemoveClientApiCall = async (value) => {
  const response = await apiInstance.delete(`/v1/remove-client/${value}`);
  return response;
};

// Edit Client data

export const EditClientApiCall = async (value) => {
  const response = await apiInstance.put(
    `/v1/edit-client/${value.id}`,
    value.payload
  );
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

// add contractor
export const AddContractorApiCall = async (values) => {
  const response = await apiInstance.post("/v1/add-contractor", values);
  return response;
};

// get all contractor
export const GetAllContractorApiCall = async () => {
  const response = await apiInstance.get("/v1/get-all-contractor");
  return response;
};

export const RemoveContractorApiCall = async (value) => {
  const repsonse = await apiInstance.delete(`/v1/remove-contractor/${value}`);
  return repsonse;
};

export const EditContractorApiCall = async (value) => {
  const response = await apiInstance.put(
    `/v1/edit-contractor/${value.id}`,
    value.payload
  );
  return response;
};

// <============================================= Employee ===================================================================>

export const CreateEmployeeApiCall = async (value) => {
  const response = await apiInstance.post("/v1/add-employee", value);
  return response;
};

export const GetAllEmployeeApiCall = async () => {
  const response = await apiInstance.get("/v1/get-all-employee");
  return response;
};

export const RemoveEmployeeApiCall = async (value) => {
  const response = await apiInstance.delete(`/v1/reomve-employee/${value}`);
  return response;
};

export const EditEmployeeApiCall = async (value) => {
  const response = await apiInstance.put(
    `/v1/edit-Employee/${value.id}`,
    value.payload
  );
  return response;
};

// Time Sheet api call

export const addTimesheetApiCall = async (value) => {
  const response = await apiInstance.post("/v1/add-timesheet", value);
  return response;
};

export const GetallTimesheetapicall = async () => {
  const response = await apiInstance.get("/v1/get-all-timesheet");
  return response;
};

export const removetimesheetapicall = async (value) => {
  const response = await apiInstance.delete(`/v1/remove-timesheet/${value}`);
  return response;
};

export const edittimesheetapicall = async (value) => {
  const response = await apiInstance.put(
    `/v1/edit-timesheet/${value.id}`,
    value.payload
  );
  return response;
};

export const getallprojectsapicall = async () => {
  const response = await apiInstance.get("/v1/get-project");
  return response;
};

export const addprojectapicall = async (values) => {
  const response = await apiInstance.post("/v1/add-project", values);
  return response;
};
export const removeprojectapicall = async (value) => {
  const response = await apiInstance.delete(`/v1/remove-project/${value}`);
  return response;
};

export const editprojectapicall = async (values) => {
  const response = await apiInstance.post(
    `/v1/edit-project/${values.id}`,
    values.palyoad
  );
  return response;
};
