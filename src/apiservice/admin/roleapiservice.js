import apiInstance from "../apiInstance";

export const addroleapicall = async (payload) => {
  const response = await apiInstance.post("/v1/add-role", payload);
  return response.data;
};

export const fetroleapicall = async () => {
  const response = await apiInstance.get("/v1/fetch-role");
  return response.data;
};
