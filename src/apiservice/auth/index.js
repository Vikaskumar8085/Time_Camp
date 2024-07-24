import apiInstance from "../apiInstance";

// registeration
export const registerauth = async (payload) => {
  const response = await apiInstance.post("/user/register", payload);
  return response;
};

// login

export const loginauth = async (payload) => {
  const response = await apiInstance.post("/user/login", payload);
  return response;
};

// get Profile
export const LoginStatus = async () => {
  const response = await apiInstance.get("/user/loginStatus");
  return response;
};
//get user

export const getUserdata = async () => {
  const response = await apiInstance.get("/user/get-user");
  return response;
};
