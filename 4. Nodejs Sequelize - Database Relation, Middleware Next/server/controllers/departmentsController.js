import { sequelize } from "../models/init-models";

// Quiz Selasa, 21 Juni 2022
// Relation Database
const departmentsRightJoin = async (req, res) => {
  try {
    const department = await req.context.models.departments.findAll({
      include: [
        {
          model: req.context.models.locations,
          as: "location",
          right: true,
        },
      ],
    });
    return res.send(department);
  } catch (error) {
    console.log(error);
    return res.status(404).send(error);
  }
};

// Middleware Next
const createDepartments = async (req, res, next) => {
  try {
    const department = await req.context.models.departments.create({
      location_id: req.body.location_id,
      department_name: req.body.department_name,
    });
    req.department = department;
    next();
  } catch (error) {
    return res.status(404).send(error);
  }
};

const createNext = async (req, res) => {
  try {
    const location = req.location;
    const department = await req.context.models.departments.create({
      location_id: location.location_id,
      department_name: req.body.department_name,
    });
    return res.send(department);
  } catch (error) {
    return res.status(404).send(error);
  }
};

// Quiz Jumat 17 Juni 2022
const findAll = async (req, res) => {
  try {
    const department = await req.context.models.departments.findAll();
    return res.send(department);
  } catch (error) {
    return res.status(404).send(error);
  }
};

const findOne = async (req, res) => {
  try {
    const department = await req.context.models.departments.findOne({
      where: { department_id: req.params.department_id },
    });
    return res.send(department);
  } catch (error) {
    return res.status(404).send(error);
  }
};

const create = async (req, res) => {
  try {
    const department = await req.context.models.departments.create(req.body);
    return res.send(department);
  } catch (error) {
    return res.status(404).send(error);
  }
};

const update = async (req, res) => {
  try {
    const department = await req.context.models.departments.update(req.body, {
      returning: true,
      where: { department_id: req.params.department_id },
    });
    return res.send(department);
  } catch (error) {
    return res.status(404).send(error);
  }
};

const deleted = async (req, res) => {
  try {
    const department = await req.context.models.departments.destroy({
      where: { department_id: req.params.department_id },
    });
    return res.send("delete " + department + " rows");
  } catch (error) {
    return res.status(404).send(error);
  }
};

const querySQL = async (req, res) => {
  try {
    await sequelize
      .query(
        "INSERT INTO departments(department_name,location_id) VALUES (:department_name, :location_id)",
        {
          replacements: {
            department_name: req.body.department_name,
            location_id: req.body.location_id,
          },
          type: sequelize.QueryTypes.INSERT,
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
  departmentsRightJoin,
  createDepartments,
  createNext,
};
