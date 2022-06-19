import { sequelize } from "../models/init-models";

const findAll = async (req, res) => {
  try {
    const country = await req.context.models.countries.findAll();
    return res.send(country);
  } catch (error) {
    return res.status(404).send(error);
  }
};

const findOne = async (req, res) => {
  try {
    const country = await req.context.models.countries.findOne({
      where: { country_id: req.params.country_id },
    });
    return res.send(country);
  } catch (error) {
    return res.status(404).send(error);
  }
};

const create = async (req, res) => {
  try {
    const country = await req.context.models.countries.create(req.body);
    return res.send(country);
  } catch (error) {
    return res.status(404).send(error);
  }
};

const update = async (req, res) => {
  try {
    const country = await req.context.models.countries.update(req.body, {
      returning: true,
      where: { country_id: req.params.country_id },
    });
    return res.send(country);
  } catch (error) {
    return res.status(404).send(error);
  }
};

const deleted = async (req, res) => {
  try {
    const country = await req.context.models.countries.destroy({
      where: { country_id: req.params.country_id },
    });
    return res.send("delete " + country + " rows");
  } catch (error) {
    return res.status(404).send(error);
  }
};

const querySQL = async (req, res) => {
  const replacements = {
    country_id: req.params.country_id,
    ...req.body,
  };

  const keys = Object.keys(req.body);

  let query = "UPDATE countries SET ";
  keys.forEach((key, index) => {
    if (index < keys.length - 1) {
      query += `${key} = :${key}, `;
    } else {
      query += `${key} = :${key} `;
    }
  });

  query += "WHERE country_id = :country_id";

  try {
    await sequelize
      .query(query, {
        replacements: replacements,
        type: sequelize.QueryTypes.UPDATE,
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
};
