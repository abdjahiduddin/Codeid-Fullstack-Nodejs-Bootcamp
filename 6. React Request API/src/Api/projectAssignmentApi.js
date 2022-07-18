import axios from "axios";
import config from "../config/config";

const findAll = async () => {
  try {
    const result = await axios.get(`${config.domain}/project_assignment/`);
    return result.data;
  } catch (error) {
    return await error.message;
  }
};

const create = async (payload) => {
  try {
    const result = await axios.post(`${config.domain}/project_assignment/`, payload);
    return result;
  } catch (error) {
    return await error.message;
  }
};

const deleted = async (id, empId) => {
  try {
    const result = await axios.delete(`${config.domain}/project_assignment/${id}`);
    return result;
  } catch (error) {
    return await error.message;
  }
};

const findOne = async (id) => {
  try {
    const result = await axios.get(`${config.domain}/project_assignment/${id}`);
    return result.data;
  } catch (error) {
    return error;
  }
};

const update = async (data) => {
  const id = parseInt(data.get("pras_proj_id"));
  try {
    const result = await axios.put(`${config.domain}/project_assignment/${id}`, data);
    return result.data;
  } catch (error) {}
};

export default {
  findAll,
  create,
  deleted,
  findOne,
  update,
};

