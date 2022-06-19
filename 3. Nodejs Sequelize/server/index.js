import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import compress from "compression";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import models, { sequelize } from "./models/init-models";
import routes from "./routes/indexRoutes";

dotenv.config();

const port = process.env.PORT || 8080;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(helmet());
app.use(compress());
app.use(cors());

app.use(async (req, res, next) => {
  req.context = { models };
  console.log(req.method + " " + req.path + " - " + req.hostname);
  next();
});

app.use("/regions", routes.regionsRoutes);
app.use("/countries", routes.countriesRoutes);
app.use("/locations", routes.locataionsRoutes);
app.use("/departments", routes.departmentsRoutes);
app.use("/jobs", routes.jobsRoutes);
app.use("/employees", routes.employeesRoutes);
app.use("/dependents", routes.dependentsRoutes);

const dropDatabaseSync = false;

sequelize.sync({ force: dropDatabaseSync }).then(async () => {
  if (dropDatabaseSync) {
    console.log("Database do not drop");
  }
  app.listen(port, () => {
    console.log("Server listening on port " + port);
  });
});

export default app;
