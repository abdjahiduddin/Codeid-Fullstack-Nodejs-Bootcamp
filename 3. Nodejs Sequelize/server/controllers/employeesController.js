import { sequelize } from "../models/init-models";

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
      .query("SELECT employee_id, first_name, last_name, salary, EXTRACT(YEAR FROM AGE(NOW(),hire_date)) AS masa_kerja, CASE WHEN EXTRACT(YEAR FROM AGE(NOW(),hire_date)) >= 25 THEN 5 * salary ELSE 3 * salary END AS bonus FROM employees WHERE employee_id = :employee_id",
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
};
