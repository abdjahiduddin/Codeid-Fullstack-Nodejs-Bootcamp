import { connection_pool } from "./connection_pool.js";

const pool = connection_pool();

export const getAllJobs = (req, res) => {
  pool.query("SELECT * FROM jobs", [], (err, result) => {
    if (err) {
      throw err;
    }
    res.status(200).json(result.rows);
  });
};

export const getJobsWithId = (req, res) => {
  const { job_id } = req.params;
  pool.query(
    "SELECT * FROM jobs WHERE job_id = $1",
    [job_id],
    (err, result) => {
      if (err) {
        throw err;
      }
      res.status(200).json(result.rows);
    }
  );
};

export const postJobs = (req, res) => {
  const { job_title, min_salary, max_salary } = req.body;
  pool.query(
    "INSERT INTO jobs(job_title,min_salary,max_salary) VALUES ($1, $2, $3)",
    [job_title, min_salary, max_salary],
    (err, result) => {
      if (err) {
        throw err;
      }
      res.status(200).json(result.rowCount);
    }
  );
};

export const updateJobs = (req, res) => {
  const { job_id } = req.params;
  const keys = Object.keys(req.body);
  const len = Object.keys(req.body).length;

  let query = "UPDATE jobs SET ";
  const values = [job_id];

  keys.forEach((key, index) => {
    if (index < len - 1) {
      query += `${key}=$${index + 2},`;
    } else {
      query += `${key}=$${index + 2}`;
    }
    values.push(req.body[key]);
  });

  query += " WHERE job_id=$1";

  pool.query(query, values, (error, result) => {
    if (error) {
      throw error;
    }
    res.status(200).json(result.rowCount);
  });
};

export const deleteJobs = (req, res) => {
  const { job_id } = req.params;
  pool.query(
    "DELETE FROM jobs WHERE job_id = $1",
    [job_id],
    (error, result) => {
      if (error) {
        throw error;
      }
      res.status(200).json(result.rowCount);
    }
  );
};
