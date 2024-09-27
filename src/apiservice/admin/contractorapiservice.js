import apiInstance from "../apiInstance";

export const addcontractorapicall = async (payload) => {
  const response = await apiInstance.post("/v1//add-contractor", payload);
  return response.data;
};

export const fetchcontractorapicall = async () => {
  const response = await apiInstance.get("/v1/fetch-contractor");
  return response.data;
};

export const fetchcontractorinformationapicall = async (payload) => {
  const response = await apiInstance.get(
    `/v1/fetch-single-contractor/${payload}`
  );
  return response.data;
};
