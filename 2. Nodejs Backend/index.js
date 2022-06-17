import dotenv from "dotenv";
import express from "express";

import * as regions from "./db/regions"
import * as countries from "./db/countries"
import * as locations from "./db/locations"
import * as departments from "./db/departments"
import * as jobs from "./db/jobs"
import * as employees from "./db/employees"
import * as dependents from "./db/dependents"

dotenv.config();

const app = express();
app.use(express.json());

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log("Server listening on Port " + port);
});

// Regions Route
app.get('/api/regions', regions.getAllRegions)
app.get('/api/regions/:id', regions.getRegionsWithId)
app.post('/api/regions', regions.postRegions)
app.put('/api/regions/:id', regions.updateRegions)
app.delete('/api/regions/:id', regions.deleteRegions)

// Countries Routes
app.get('/api/countries', countries.getAllCountries)
app.get('/api/countries/:country_id', countries.getCountriesWithId)
app.post('/api/countries', countries.postCountries)
app.put('/api/countries/:country_id', countries.updateCountries)
app.delete('/api/countries/:country_id', countries.deleteCountries)

// Locations Routes
app.get('/api/locations', locations.getAllLocations)
app.get('/api/locations/:location_id', locations.getLocationsWithId)
app.post('/api/locations', locations.postLocations)
app.put('/api/locations/:location_id', locations.updateLocations)
app.delete('/api/locations/:location_id', locations.deleteLocations)

// Departments Routes
app.get('/api/departments', departments.getAllDepartments)
app.get('/api/departments/:department_id', departments.getDepartmentsWithId)
app.post('/api/departments', departments.postDepartments)
app.put('/api/departments/:department_id', departments.updateDepartments)
app.delete('/api/departments/:department_id', departments.deleteDepartments)

// Jobs Routes
app.get('/api/jobs', jobs.getAllJobs)
app.get('/api/jobs/:job_id', jobs.getJobsWithId)
app.post('/api/jobs', jobs.postJobs)
app.put('/api/jobs/:job_id', jobs.updateJobs)
app.delete('/api/jobs/:job_id', jobs.deleteJobs)

// Employees Routes
app.get('/api/employees', employees.getAllEmployees)
app.get('/api/employees/:employee_id', employees.getEmployeesWithId)
app.post('/api/employees', employees.postEmployees)
app.put('/api/employees/:employee_id', employees.updateEmployees)
app.delete('/api/employees/:employee_id', employees.deleteEmployees)

// Dependents Routes
app.get('/api/dependents', dependents.getAllDependents)
app.get('/api/dependents/:dependent_id', dependents.getDependentsWithId)
app.post('/api/dependents', dependents.postDependents)
app.put('/api/dependents/:dependent_id', dependents.updateDependents)
app.delete('/api/dependents/:dependent_id', dependents.deleteDependents)