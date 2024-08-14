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

//  @Designation <===================================== Designation ===========================>

// add Designation

export const addDesingationApiCall = async (value) => {
  const response = await apiInstance.post("/v1/add-designation", value);
  return response.data;
};

// Get all Designation

export const GetAllDesignationApiCall = async (value) => {
  const response = await apiInstance.get("/v1/get-all-designation");
  return response.data;
};

// Edit designation api Call
export const EditDesignationApiCall = async (value) => {
  console.log("??????????????????///", value, "value");
  const response = await apiInstance.put(
    `/v1/edit-designation/${value.id}`,
    value.payload
  );
  return response;
};

// rmeove Designation api call

export const RemoveDesignationApiCall = async (value) => {
  const response = await apiInstance.delete(`/v1/remove-designation/${value}`);
  return response;
};

// @ Department <=================================================Department=================================>
// Department

// add Department

export const AddDepartmentApiCall = async (value) => {
  const response = await apiInstance.post("/v1/add-department", value);
  return response;
};

// Get all Department
export const GetAllDepartmentApiCall = async () => {
  const response = await apiInstance.get("/v1/get-all-department");
  return response;
};

// Delete Department

export const RemoveDepartmentApiCall = async (value) => {
  const response = await apiInstance.delete(`/v1/remove-department/${value}`);
  return response;
};

//  Edit Department

export const EditDepartmentApiCall = async (value) => {
  const repsonse = await apiInstance.put(
    `/v1/edit-department/${value.id}`,
    value.payload
  );
  return repsonse;
};
//  <=================================================Department=================================>
// <=================================================Contractor =================================>

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
