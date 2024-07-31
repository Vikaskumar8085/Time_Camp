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

// Edit user

export const EditAuthUser = async (value) => {
  const response = await apiInstance.post("/user/Edit-user", value);
  return response;
};

// Forget Password
export const ForgetPasswordUser = async (value) => {
  const response = await apiInstance.post("/user/forget", value);
  return response;
};

// change password

export const ChangePasswordAuth = async (value) => {
  const response = await apiInstance.post("/user/change-password", value);
  return response;
};

// google Auth
export const GoogleLoginAuth = async (value) => {
  const response = await apiInstance.post("/user/google-auth", value);
  return response;
};

export const verifyMail = async (value) => {
  const respons = await apiInstance.get(`/user/verify/${value.id}`);
  return respons;
};
