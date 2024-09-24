import apiInstance from "../apiInstance";

export const fetchcontractorapicall = async () => {
  const response = await apiInstance.get("/v1/get-contractor");
  return response.data;
};
