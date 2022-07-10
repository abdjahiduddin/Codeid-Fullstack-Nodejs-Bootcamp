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

export default {
  findAll,
  create,
  deleted,
};
