import axios from "axios";
import { BaseUrl } from "./constant";

export const createProblem = async (
  title,
  username,
  description,
  tags,
  status,
  epics
) => {
  const data = {
    title,
    username,
    description,
    tags,
    status,
    epics,
  };
  return axios
    .post(`${BaseUrl}problems/`, data)
    .then((response) => response.status)
    .catch((e) => console.log(e));
};

export const fetchProblem = async () => {
  return axios.get(`${BaseUrl}problems/`).then((response) => response.data);
};
