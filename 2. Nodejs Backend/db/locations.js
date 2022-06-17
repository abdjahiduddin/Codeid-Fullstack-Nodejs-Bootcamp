import { connection_pool } from "./connection_pool.js";

const pool = connection_pool();

export const getAllLocations = (req, res) => {
  pool.query("SELECT * FROM locations", [], (err, result) => {
    if (err) {
      throw err;
    }
    res.status(200).json(result.rows);
  });
};

export const getLocationsWithId = (req, res) => {
  const { location_id } = req.params;
  pool.query(
    "SELECT * FROM locations WHERE location_id = $1",
    [location_id],
    (err, result) => {
      if (err) {
        throw err;
      }
      res.status(200).json(result.rows);
    }
  );
};

export const postLocations = (req, res) => {
  const {
    location_id,
    street_address,
    postal_code,
    city,
    state_province,
    country_id,
  } = req.body;
  pool.query(
    "INSERT INTO locations(location_id,street_address,postal_code,city,state_province,country_id) VALUES ($1, $2, $3, $4, $5, $6)",
    [
      location_id,
      street_address,
      postal_code,
      city,
      state_province,
      country_id,
    ],
    (err, result) => {
      if (err) {
        throw err;
      }
      res.status(200).json(result.rowCount);
    }
  );
};

export const updateLocations = (req, res) => {
  const { location_id } = req.params;
  const keys = Object.keys(req.body);
  const len = Object.keys(req.body).length;

  let query = "UPDATE locations SET ";
  const values = [location_id];

  keys.forEach((key, index) => {
    if (index < len - 1) {
      query += `${key}=$${index + 2},`;
    } else {
      query += `${key}=$${index + 2}`;
    }
    values.push(req.body[key]);
  });

  query += " WHERE location_id=$1";

  pool.query(query, values, (error, result) => {
    if (error) {
      throw error;
    }
    res.status(200).json(result.rowCount);
  });
};

export const deleteLocations = (req, res) => {
  const { location_id } = req.params;
  pool.query(
    "DELETE FROM locations WHERE location_id = $1",
    [location_id],
    (error, result) => {
      if (error) {
        throw error;
      }
      res.status(200).json(result.rowCount);
    }
  );
};
