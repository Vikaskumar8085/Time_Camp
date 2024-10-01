import axios from "axios";
import apiInstance from "../apiInstance";
// fetch resourse api call
export const fetchresourseapicall = async () => {
  const response = await axios.get("http://localhost:8000/api/user/fetch-resource", {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2ZmJkODE4M2JmMWY2MGQyY2EzMzgyNyIsImlhdCI6MTcyNzc4NDg4OSwiZXhwIjoxNzMwMzc2ODg5fQ.MA0wweuE_pfIc2-uZipLLjfWEM9_x7wfdirz8yohCFg",
    },
  });
  return response.data;
};
