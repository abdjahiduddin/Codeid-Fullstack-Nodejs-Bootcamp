import axios from "axios";
import config from "../config/config";

const findAll = async () => {
  try {
    const result = await axios.get(`${config.domain}/locations/`);
    return result.data;
  } catch (error) {
    return await error.message;
  }
};

const create = async (payload) => {
  console.log(payload);
  try {
    const result = await axios.post(`${config.domain}/locations/`, payload);
    return result;
  } catch (error) {
    return await error;
  }
};

const deleted = async (id) => {
  try {
    const result = await axios.delete(`${config.domain}/locations/${id}`);
    return result;
  } catch (error) {
    return await error.message;
  }
};

const findOne = async (id) => {
  try {
    const result = await axios.get(`${config.domain}/locations/${id}`);
    return result.data;
  } catch (error) {
    return error;
  }
};

const update = async (data) => {
  const id = data.location_id;
  try {
    const result = await axios.put(`${config.domain}/locations/${id}`, data);
    return result.data;
  } catch (error) {
    return error;
  }
};

export default {
  findAll,
  create,
  deleted,
  findOne,
  update,
};
