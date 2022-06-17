import { connection_pool } from "./connection_pool.js";

const pool = connection_pool();

export const getAllDepartments = (req, res) => {
  pool.query("SELECT * FROM departments", [], (err, result) => {
    if (err) {
      throw err;
    }
    res.status(200).json(result.rows);
  });
};

export const getDepartmentsWithId = (req, res) => {
  const { department_id } = req.params;
  pool.query(
    "SELECT * FROM departments WHERE department_id = $1",
    [department_id],
    (err, result) => {
      if (err) {
        throw err;
      }
      res.status(200).json(result.rows);
    }
  );
};

export const postDepartments = (req, res) => {
  const { department_name, location_id } = req.body;
  pool.query(
    "INSERT INTO departments(department_name,location_id) VALUES ($1, $2)",
    [department_name, location_id],
    (err, result) => {
      if (err) {
        throw err;
      }
      res.status(200).json(result.rowCount);
    }
  );
};

export const updateDepartments = (req, res) => {
  const { department_id } = req.params;
  const keys = Object.keys(req.body);
  const len = Object.keys(req.body).length;

  let query = "UPDATE departments SET ";
  const values = [department_id];

  keys.forEach((key, index) => {
    if (index < len - 1) {
      query += `${key}=$${index + 2},`;
    } else {
      query += `${key}=$${index + 2}`;
    }
    values.push(req.body[key]);
  });

  query += " WHERE department_id=$1";

  pool.query(query, values, (error, result) => {
    if (error) {
      throw error;
    }
    res.status(200).json(result.rowCount);
  });
};

export const deleteDepartments = (req, res) => {
  const { department_id } = req.params;
  pool.query(
    "DELETE FROM departments WHERE department_id = $1",
    [department_id],
    (error, result) => {
      if (error) {
        throw error;
      }
      res.status(200).json(result.rowCount);
    }
  );
};
