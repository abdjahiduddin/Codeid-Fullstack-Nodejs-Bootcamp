import { sequelize } from "../models/init-models";

// Quiz Selasa, 21 Juni 2022
// Relation Database
const regionsLeftJoin = async (req, res) => {
  try {
    const region = await req.context.models.regions.findAll({
      include: [
        {
          model: req.context.models.countries,
          as: "countries",
          required: true
        },
      ],
    });
    return res.send(region);
  } catch (error) {
    console.log(error);
    res.status(404).send(error);
  }
};

// Middleware Next
const createRegions = async (req, res, next) => {
  try {
    const region = await req.context.models.regions.create({
      region_name : req.body.region_name 
    });
    req.region = region
    next()
  } catch (error) {
    console.log(error);
    return res.status(404).send(error);
  }
}


// Quiz Jumat 17 Juni 2022
const findAll = async (req, res) => {
  try {
    const region = await req.context.models.regions.findAll();
    return res.send(region);
  } catch (error) {
    return res.status(404).send(error);
  }
};

const findOne = async (req, res) => {
  try {
    const region = await req.context.models.regions.findOne({
      where: { region_id: req.params.id },
    });
    return res.send(region);
  } catch (error) {
    return res.status(404).send(error);
  }
};

const create = async (req, res) => {
  try {
    const region = await req.context.models.regions.create(req.body);
    return res.send(region);
  } catch (error) {
    return res.status(404).send(error);
  }
};

const update = async (req, res) => {
  try {
    const region = await req.context.models.regions.update(req.body, {
      returning: true,
      where: { region_id: req.params.id },
    });
    return res.send(region);
  } catch (error) {
    return res.status(404).send(error);
  }
};

const deleted = async (req, res) => {
  try {
    const region = await req.context.models.regions.destroy({
      where: { region_id: req.params.id },
    });
    return res.send("delete " + region + " rows");
  } catch (error) {
    return res.status(404).send(error);
  }
};

const querySQL = async (req, res) => {
  try {
    await sequelize
      .query("SELECT * FROM countries where region_id = :region_id", {
        replacements: { region_id: req.params.id },
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
  regionsLeftJoin,
  createRegions
};
