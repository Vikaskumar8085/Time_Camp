import axios from "axios";
import apiInstance from "../apiInstance";

export const loginResourseapicall = async (payload) => {
  const response = await apiInstance.post("/user/resource-login", payload);
  return response.data;
};

// fetch resourse api call
export const fetchresourseapicall = async () => {
  const response = await axios.get(
    "http://localhost:8000/api/user/fetch-resource",
    {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2ZjQwM2QwN2E0NmNkYTM4YmU5MjNhZSIsImlhdCI6MTcyODEyOTkzMCwiZXhwIjoxNzMwNzIxOTMwfQ.Uzv6irsnAPUqX64IBElprra2WXhEXFwVre-OijseA_U",
      },
    }
  );
  return response.data;
};
