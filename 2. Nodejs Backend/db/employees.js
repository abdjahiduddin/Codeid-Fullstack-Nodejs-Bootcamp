import { connection_pool } from "./connection_pool.js";

const pool = connection_pool();

export const getAllEmployees = (req, res) => {
  pool.query("SELECT * FROM employees", [], (err, result) => {
    if (err) {
      throw err;
    }
    res.status(200).json(result.rows);
  });
};

export const getEmployeesWithId = (req, res) => {
  const { employee_id } = req.params;
  pool.query(
    "SELECT * FROM employees WHERE employee_id = $1",
    [employee_id],
    (err, result) => {
      if (err) {
        throw err;
      }
      res.status(200).json(result.rows);
    }
  );
};

export const postEmployees = (req, res) => {
  const {
    employee_id,
    first_name,
    last_name,
    email,
    phone_number,
    hire_date,
    salary,
    manager_id,
    job_id,
    department_id,
  } = req.body;
  pool.query(
    "INSERT INTO employees(employee_id,first_name,last_name,email,phone_number,hire_date,job_id,salary,manager_id,department_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)",
    [
      employee_id,
      first_name,
      last_name,
      email,
      phone_number,
      hire_date,
      job_id,
      salary,
      manager_id,
      department_id,
    ],
    (err, result) => {
      if (err) {
        throw err;
      }
      res.status(200).json(result.rowCount);
    }
  );
};

export const updateEmployees = (req, res) => {
  const { employee_id } = req.params;
  const keys = Object.keys(req.body);
  const len = Object.keys(req.body).length;

  let query = "UPDATE employees SET ";
  const values = [employee_id];

  keys.forEach((key, index) => {
    if (index < len - 1) {
      query += `${key}=$${index + 2},`;
    } else {
      query += `${key}=$${index + 2}`;
    }
    values.push(req.body[key]);
  });

  query += " WHERE employee_id=$1";

  pool.query(query, values, (error, result) => {
    if (error) {
      throw error;
    }
    res.status(200).json(result.rowCount);
  });
};

export const deleteEmployees = (req, res) => {
  const { employee_id } = req.params;
  pool.query(
    "DELETE FROM employees WHERE employee_id = $1",
    [employee_id],
    (error, result) => {
      if (error) {
        throw error;
      }
      res.status(200).json(result.rowCount);
    }
  );
};
