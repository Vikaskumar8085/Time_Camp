import apiInstace from "../apiInstance";

export const dashboardcounterapicall = async () => {
  const response = await apiInstace.get("/v1/dasboard-counter");
  return response.data;
};
