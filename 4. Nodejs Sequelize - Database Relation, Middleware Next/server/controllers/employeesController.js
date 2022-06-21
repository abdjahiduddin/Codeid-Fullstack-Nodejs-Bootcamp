import { sequelize } from "../models/init-models";

// Quiz Selasa, 21 Juni 2022
// Relation Database
const employeesDepartmentsInnerJoin = async (req, res) => {
  try {
    const employee = await req.context.models.employees.findAll({
      include: [
        {
          model: req.context.models.departments,
          as: "department",
          required: true,
        },
      ],
    });
    res.send(employee);
  } catch (error) {
    console.log(error);
    res.status(404).send(error);
  }
};

// Middleware Next
const createEmployees = async (req, res, next) => {
  try {
    const employee = await req.context.models.employees.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      phone_number: req.body.phone_number,
      hire_date: req.body.hire_date,
      salary: req.body.salary,
      manager_id: req.body.manager_id,
      job_id: req.body.job_id,
      department_id: req.body.department_id,
    });
    req.employee = employee;
    next();
  } catch (error) {
    return res.status(404).send(error);
  }
};

const createNextFromDepartments = async (req, res) => {
  try {
    const department = req.department;
    const employee = await req.context.models.employees.create({
      department_id: department.department_id,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      phone_number: req.body.phone_number,
      hire_date: req.body.hire_date,
      salary: req.body.salary,
      manager_id: req.body.manager_id,
      job_id: req.body.job_id,
    });
    return res.send(employee);
  } catch (error) {
    return res.status(404).send(error);
  }
};

const createNextFromJobs = async (req, res) => {
  try {
    const job = req.job;
    const employee = await req.context.models.employees.create({
      job_id: job.job_id,
      department_id: req.body.department_id,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      phone_number: req.body.phone_number,
      hire_date: req.body.hire_date,
      salary: req.body.salary,
      manager_id: req.body.manager_id,
    });
    return res.send(employee);
  } catch (error) {
    return res.status(404).send(error);
  }
};
// Quiz Jumat 17 Juni 2022

const findAll = async (req, res) => {
  try {
    const employee = await req.context.models.employees.findAll();
    return res.send(employee);
  } catch (error) {
    return res.status(404).send(error);
  }
};

const findOne = async (req, res) => {
  try {
    const employee = await req.context.models.employees.findOne({
      where: { employee_id: req.params.employee_id },
    });
    return res.send(employee);
  } catch (error) {
    return res.status(404).send(error);
  }
};

const create = async (req, res) => {
  try {
    const employee = await req.context.models.employees.create(req.body);
    return res.send(employee);
  } catch (error) {
    return res.status(404).send(error);
  }
};

const update = async (req, res) => {
  try {
    const employee = await req.context.models.employees.update(req.body, {
      returning: true,
      where: { employee_id: req.params.employee_id },
    });
    return res.send(employee);
  } catch (error) {
    return res.status(404).send(error);
  }
};

const deleted = async (req, res) => {
  try {
    const employee = await req.context.models.employees.destroy({
      where: { employee_id: req.params.employee_id },
    });
    return res.send("delete " + employee + " rows");
  } catch (error) {
    return res.status(404).send(error);
  }
};

const querySQL = async (req, res) => {
  try {
    await sequelize
      .query(
        "SELECT employee_id, first_name, last_name, salary, EXTRACT(YEAR FROM AGE(NOW(),hire_date)) AS masa_kerja, CASE WHEN EXTRACT(YEAR FROM AGE(NOW(),hire_date)) >= 25 THEN 5 * salary ELSE 3 * salary END AS bonus FROM employees WHERE employee_id = :employee_id",
        {
          replacements: { employee_id: req.params.employee_id },
          type: sequelize.QueryTypes.SELECT,
        }
      )
      .then((result) => {
        return res.send(result);
      });
  } catch (error) {
    return res.status(404).send(error);
  }
};

export default {
  findAll,
  findOne,
  create,
  update,
  deleted,
  querySQL,
  employeesDepartmentsInnerJoin,
  createEmployees,
  createNextFromDepartments,
  createNextFromJobs,
};
