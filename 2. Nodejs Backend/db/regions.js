import { connection_pool } from "./connection_pool.js";

const pool = connection_pool();

export const getAllRegions = (req, res) => {
  pool.query("SELECT * FROM regions", [], (err, result) => {
    if (err) {
      throw err;
    }
    res.status(200).json(result.rows);
  });
};

export const getRegionsWithId = (req, res) => {
  const { id } = req.params;
  pool.query(
    "SELECT * FROM regions WHERE region_id = $1",
    [id],
    (err, result) => {
      if (err) {
        throw err;
      }
      res.status(200).json(result.rows);
    }
  );
};

export const postRegions = (req, res) => {
  const { region_name } = req.body;
  pool.query(
    "INSERT INTO regions (region_name) VALUES ($1)",
    [region_name],
    (err, result) => {
      if (err) {
        throw err;
      }
      res.status(200).json(result.rowCount);
    }
  );
};

export const updateRegions = (req, res) => {
  const { id } = req.params;
  const { region_name } = req.body;
  pool.query(
    "UPDATE regions SET region_name=$1 WHERE region_id=$2",
    [region_name, id],
    (error, result) => {
      if (error) {
        throw error;
      }
      res.status(200).json(result.rowCount);
    }
  );
};

export const deleteRegions = (req, res) => {
  const { id } = req.params;
  pool.query(
    "DELETE FROM regions WHERE region_id = $1",
    [id],
    (error, result) => {
      if (error) {
        throw error;
      }
      res.status(200).json(result.rowCount);
    }
  );
};
