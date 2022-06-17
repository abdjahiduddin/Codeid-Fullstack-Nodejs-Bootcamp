import { connection_pool } from "./connection_pool.js";

const pool = connection_pool();

export const getAllDependents = (req, res) => {
  pool.query("SELECT * FROM dependents", [], (err, result) => {
    if (err) {
      throw err;
    }
    res.status(200).json(result.rows);
  });
};

export const getDependentsWithId = (req, res) => {
  const { dependent_id } = req.params;
  pool.query(
    "SELECT * FROM dependents WHERE dependent_id = $1",
    [dependent_id],
    (err, result) => {
      if (err) {
        throw err;
      }
      res.status(200).json(result.rows);
    }
  );
};

export const postDependents = (req, res) => {
  const { first_name, last_name, relationship, employee_id } = req.body;
  pool.query(
    "INSERT INTO dependents(first_name,last_name,relationship,employee_id) VALUES ($1, $2, $3, $4)",
    [first_name, last_name, relationship, employee_id],
    (err, result) => {
      if (err) {
        throw err;
      }
      res.status(200).json(result.rowCount);
    }
  );
};

export const updateDependents = (req, res) => {
  const { dependent_id } = req.params;
  const keys = Object.keys(req.body);
  const len = Object.keys(req.body).length;

  let query = "UPDATE dependents SET ";
  const values = [dependent_id];

  keys.forEach((key, index) => {
    if (index < len - 1) {
      query += `${key}=$${index + 2},`;
    } else {
      query += `${key}=$${index + 2}`;
    }
    values.push(req.body[key]);
  });

  query += " WHERE dependent_id=$1";

  pool.query(query, values, (error, result) => {
    if (error) {
      throw error;
    }
    res.status(200).json(result.rowCount);
  });
};

export const deleteDependents = (req, res) => {
  const { dependent_id } = req.params;
  pool.query(
    "DELETE FROM dependents WHERE dependent_id = $1",
    [dependent_id],
    (error, result) => {
      if (error) {
        throw error;
      }
      res.status(200).json(result.rowCount);
    }
  );
};
