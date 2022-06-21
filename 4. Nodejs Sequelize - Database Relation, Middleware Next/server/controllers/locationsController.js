import { sequelize } from "../models/init-models";

// Quiz Selasa, 21 Juni 2022
// Relation Database
const locationsAll = async (req, res) => {
  try {
    const location = await req.context.models.locations.findAll({
      include: [
        {
          all: true,
        },
      ],
    });
    return res.send(location);
  } catch (error) {
    return res.status(404).send(error);
  }
};

// Middleware Next
const createLocations = async (req, res, next) => {
  try {
    const location = await req.context.models.locations.create({
      country_id: req.body.country_id,
      location_id: req.body.location_id,
      street_address: req.body.street_address,
      postal_code: req.body.postal_code,
      city: req.body.city,
      state_province: req.body.state_province,
    });
    req.location = location;
    next();
  } catch (error) {
    console.log(error);
    return res.status(404).send(error);
  }
};

const createNext = async (req, res) => {
  try {
    const country = req.country;
    const location = await req.context.models.locations.create({
      country_id: country.country_id,
      location_id: req.body.location_id,
      street_address: req.body.street_address,
      postal_code: req.body.postal_code,
      city: req.body.city,
      state_province: req.body.state_province,
    });
    return res.send(location);
  } catch (error) {
    console.log(error);
    return res.status(404).send(error);
  }
};

// Quiz Jumat 17 Juni 2022
const findAll = async (req, res) => {
  try {
    const location = await req.context.models.locations.findAll();
    return res.send(location);
  } catch (error) {
    return res.status(404).send(error);
  }
};

const findOne = async (req, res) => {
  try {
    const location = await req.context.models.locations.findOne({
      where: { location_id: req.params.location_id },
    });
    return res.send(location);
  } catch (error) {
    return res.status(404).send(error);
  }
};

const create = async (req, res) => {
  try {
    const location = await req.context.models.locations.create(req.body);
    return res.send(location);
  } catch (error) {
    return res.status(404).send(error);
  }
};

const update = async (req, res) => {
  try {
    const location = await req.context.models.locations.update(req.body, {
      returning: true,
      where: { location_id: req.params.location_id },
    });
    return res.send(location);
  } catch (error) {
    return res.status(404).send(error);
  }
};

const deleted = async (req, res) => {
  try {
    const location = await req.context.models.locations.destroy({
      where: { location_id: req.params.location_id },
    });
    return res.send("delete " + location + " rows");
  } catch (error) {
    return res.status(404).send(error);
  }
};

const querySQL = async (req, res) => {
  try {
    await sequelize
      .query("DELETE FROM locations WHERE location_id = :location_id", {
        replacements: { location_id: req.params.location_id },
        type: sequelize.QueryTypes.DELETE,
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
  locationsAll,
  createNext,
  createLocations,
};
