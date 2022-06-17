import { connection_pool } from "./connection_pool.js";

const pool = connection_pool();

export const getAllCountries = (req, res) => {
  pool.query("SELECT * FROM countries", [], (err, result) => {
    if (err) {
      throw err;
    }
    res.status(200).json(result.rows);
  });
};

export const getCountriesWithId = (req, res) => {
  const { country_id } = req.params;
  pool.query(
    "SELECT * FROM countries WHERE country_id = $1",
    [country_id],
    (err, result) => {
      if (err) {
        throw err;
      }
      res.status(200).json(result.rows);
    }
  );
};

export const postCountries = (req, res) => {
  const { country_id, country_name, region_id } = req.body;
  pool.query(
    "INSERT INTO countries(country_id, country_name, region_id) VALUES ($1, $2, $3)",
    [country_id, country_name, region_id],
    (err, result) => {
      if (err) {
        throw err;
      }
      res.status(200).json(result.rowCount);
    }
  );
};

export const updateCountries = (req, res) => {
  const { country_id } = req.params;
  const keys = Object.keys(req.body);
  const len = Object.keys(req.body).length;

  let query = "UPDATE countries SET ";
  const values = [country_id];

  keys.forEach((key, index) => {
    if (index < len - 1) {
      query += `${key}=$${index + 2},`;
    } else {
      query += `${key}=$${index + 2}`;
    }
    values.push(req.body[key]);
  });

  query += " WHERE country_id=$1";

  pool.query(query, values, (error, result) => {
    if (error) {
      throw error;
    }
    res.status(200).json(result.rowCount);
  });
};

export const deleteCountries = (req, res) => {
  const { country_id } = req.params;
  pool.query(
    "DELETE FROM countries WHERE country_id = $1",
    [country_id],
    (error, result) => {
      if (error) {
        throw error;
      }
      res.status(200).json(result.rowCount);
    }
  );
};
