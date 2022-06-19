import Sequelize from "sequelize";
import config from "../../config/config";

const sequelize = new Sequelize(
  config.db_name,
  config.db_username,
  config.db_password,
  {
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  }
);

var DataTypes = require("sequelize").DataTypes;
var _countries = require("./countries");
var _departments = require("./departments");
var _dependents = require("./dependents");
var _employees = require("./employees");
var _jobs = require("./jobs");
var _locations = require("./locations");
var _regions = require("./regions");

function initModels(sequelize) {
  var countries = _countries(sequelize, DataTypes);
  var departments = _departments(sequelize, DataTypes);
  var dependents = _dependents(sequelize, DataTypes);
  var employees = _employees(sequelize, DataTypes);
  var jobs = _jobs(sequelize, DataTypes);
  var locations = _locations(sequelize, DataTypes);
  var regions = _regions(sequelize, DataTypes);

  locations.belongsTo(countries, { as: "country", foreignKey: "country_id" });
  countries.hasMany(locations, { as: "locations", foreignKey: "country_id" });
  employees.belongsTo(departments, {
    as: "department",
    foreignKey: "department_id",
  });
  departments.hasMany(employees, {
    as: "employees",
    foreignKey: "department_id",
  });
  dependents.belongsTo(employees, {
    as: "employee",
    foreignKey: "employee_id",
  });
  employees.hasMany(dependents, {
    as: "dependents",
    foreignKey: "employee_id",
  });
  employees.belongsTo(employees, { as: "manager", foreignKey: "manager_id" });
  employees.hasMany(employees, { as: "employees", foreignKey: "manager_id" });
  employees.belongsTo(jobs, { as: "job", foreignKey: "job_id" });
  jobs.hasMany(employees, { as: "employees", foreignKey: "job_id" });
  departments.belongsTo(locations, {
    as: "location",
    foreignKey: "location_id",
  });
  locations.hasMany(departments, {
    as: "departments",
    foreignKey: "location_id",
  });
  countries.belongsTo(regions, { as: "region", foreignKey: "region_id" });
  regions.hasMany(countries, { as: "countries", foreignKey: "region_id" });

  return {
    countries,
    departments,
    dependents,
    employees,
    jobs,
    locations,
    regions,
  };
}

const models = initModels(sequelize);
export default models;
export { sequelize };

// module.exports = initModels;
// module.exports.initModels = initModels;
// module.exports.default = initModels;
