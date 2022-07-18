import axios from "axios";
import config from "../config/config";

const findAll = async () => {
  try {
    const result = await axios.get(`${config.domain}/regions/`);
    return result.data;
  } catch (error) {
    return await error.message;
  }
};

const create = async (payload) => {
  try {
    const result = await axios.post(`${config.domain}/regions/`, payload);
    return result;
  } catch (error) {
    return await error.message;
  }
};

const deleted = async (id) => {
  try {
    const result = await axios.delete(`${config.domain}/regions/${id}`);
    return result;
  } catch (error) {
    return await error.message;
  }
};

const findOne = async (id) => {
  try {
    const result = await axios.get(`${config.domain}/regions/${id}`);
    return result.data;
  } catch (error) {
    return error;
  }
};

const update = async (data) => {
  const id = data.region_id
  try {
    const result = await axios.put(`${config.domain}/regions/${id}`, data);
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
