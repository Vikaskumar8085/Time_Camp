import axios from "axios";
import apiInstance from "../apiInstance";

export const contactapicall = async (payload) => {
  const response = await axios.post(
    "http://localhost:8000/api/v2/add-contact",
    payload
  );
  return response.data;
};
