import axios from "axios";
import config from "../config/config";

const findAll = async () => {
  try {
    const result = await axios.get(`${config.domain}/projects/`);
    return result.data;
  } catch (error) {
    return await error.message;
  }
};

const create = async (payload) => {
  try {
    const result = await axios.post(`${config.domain}/projects/`, payload);
    return result;
  } catch (error) {
    return await error.message;
  }
};

const deleted = async (id) => {
  try {
    const result = await axios.delete(`${config.domain}/projects/${id}`);
    return result;
  } catch (error) {
    return await error.message;
  }
};

const findOne = async (id) => {
  try {
    const result = await axios.get(`${config.domain}/projects/${id}`);
    return result.data;
  } catch (error) {
    return error;
  }
};

const update = async (data) => {
  const id = parseInt(data.get("proj_id"));
  try {
    const result = await axios.put(`${config.domain}/projects/${id}`, data);
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
