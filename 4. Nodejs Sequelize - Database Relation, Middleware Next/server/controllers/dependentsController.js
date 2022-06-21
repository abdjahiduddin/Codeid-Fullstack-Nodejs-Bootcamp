import { sequelize } from "../models/init-models";

// Quiz Selasa, 21 Juni 2022
// Relation Database
const dependentsInnerJoin = async (req, res) => {
  try {
    const dependent = await req.context.models.dependents.findAll({
      include: [
        {
          model: req.context.models.employees,
          as: "employee",
          required: true,
        },
      ],
    });
    return res.send(dependent);
  } catch (error) {
    console.log(error);
    res.status(404).send(error);
  }
};

// Middleware Next
const createNext = async (req, res) => {
  try {
    const employee = req.employee;
    const dependent = await req.context.models.dependents.create({
      employee_id: employee.employee_id,
      first_name: req.body.first_name_depen,
      last_name: req.body.last_name_depen,
      relationship: req.body.relationship,
    });
    return res.send(dependent);
  } catch (error) {
    return res.status(404).send(error);
  }
};

// Quiz Jumat 17 Juni 2022
const findAll = async (req, res) => {
  try {
    const dependent = await req.context.models.dependents.findAll();
    return res.send(dependent);
  } catch (error) {
    return res.status(404).send(error);
  }
};

const findOne = async (req, res) => {
  try {
    const dependent = await req.context.models.dependents.findOne({
      where: { dependent_id: req.params.dependent_id },
    });
    return res.send(dependent);
  } catch (error) {
    return res.status(404).send(error);
  }
};

const create = async (req, res) => {
  try {
    const dependent = await req.context.models.dependents.create(req.body);
    return res.send(dependent);
  } catch (error) {
    return res.status(404).send(error);
  }
};

const update = async (req, res) => {
  try {
    const dependent = await req.context.models.dependents.update(req.body, {
      returning: true,
      where: { dependent_id: req.params.dependent_id },
    });
    return res.send(dependent);
  } catch (error) {
    return res.status(404).send(error);
  }
};

const deleted = async (req, res) => {
  try {
    const dependent = await req.context.models.dependents.destroy({
      where: { dependent_id: req.params.dependent_id },
    });
    return res.send("delete " + dependent + " rows");
  } catch (error) {
    return res.status(404).send(error);
  }
};

const querySQL = async (req, res) => {
  try {
    await sequelize
      .query(
        "SELECT dependent_id, e.employee_id, CONCAT(d.first_name,' ',d.last_name) AS dependent_name, CONCAT(e.first_name,' ',e.last_name) AS employee_name, phone_number, salary FROM dependents AS d INNER JOIN employees AS e ON d.employee_id = e.employee_id WHERE dependent_id = :dependent_id",
        {
          replacements: { dependent_id: req.params.dependent_id },
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
  dependentsInnerJoin,
  createNext,
};
