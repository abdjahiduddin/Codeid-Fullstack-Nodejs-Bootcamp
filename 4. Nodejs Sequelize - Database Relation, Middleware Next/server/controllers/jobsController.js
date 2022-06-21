import { sequelize } from "../models/init-models";
// Quiz Selasa, 21 Juni 2022
// Relation Database
const jobsRightJoin = async (req, res) => {
  try {
    const country = await req.context.models.jobs.findAll({
      include: [
        {
          model: req.context.models.employees,
          as: "employees",
          right: true,
        },
      ],
    });
    res.send(country);
  } catch (error) {
    console.log(error);
    return res.status(404).send(error);
  }
};

// Middleware Next
const createJobs = async (req, res, next) => {
  try {
    const job = await req.context.models.jobs.create({
      job_title: req.body.job_title,
      min_salary: req.body.min_salary,
      max_salary: req.body.max_salary,
    });
    req.job = job;
    next();
  } catch (error) {
    return res.status(404).send(error);
  }
};

// Quiz Jumat 17 Juni 2022
const findAll = async (req, res) => {
  try {
    const job = await req.context.models.jobs.findAll();
    return res.send(job);
  } catch (error) {
    return res.status(404).send(error);
  }
};

const findOne = async (req, res) => {
  try {
    const job = await req.context.models.jobs.findOne({
      where: { job_id: req.params.job_id },
    });
    return res.send(job);
  } catch (error) {
    return res.status(404).send(error);
  }
};

const create = async (req, res) => {
  try {
    const job = await req.context.models.jobs.create(req.body);
    return res.send(job);
  } catch (error) {
    return res.status(404).send(error);
  }
};

const update = async (req, res) => {
  try {
    const job = await req.context.models.jobs.update(req.body, {
      returning: true,
      where: { job_id: req.params.job_id },
    });
    return res.send(job);
  } catch (error) {
    return res.status(404).send(error);
  }
};

const deleted = async (req, res) => {
  try {
    const job = await req.context.models.jobs.destroy({
      where: { job_id: req.params.job_id },
    });
    return res.send("delete " + job + " rows");
  } catch (error) {
    return res.status(404).send(error);
  }
};

const querySQL = async (req, res) => {
  try {
    await sequelize
      .query("SELECT * FROM jobs WHERE job_id = :job_id", {
        replacements: { job_id: req.params.job_id },
        type: sequelize.QueryTypes.SELECT,
      })
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
  jobsRightJoin,
  createJobs,
};
