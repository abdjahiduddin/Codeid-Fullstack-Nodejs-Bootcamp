import React from "react";

import RegionView from "./RegionView";
import CountriesView from "./CountriesView";
import DepartmentsView from "./DepartmentsApi";
import DependentsView from "./DependentsView";
import EmployeesView from "./EmployeesView";
import JobsView from "./JobsView";
import LocationsView from "./LocationsView";
import ProjectsView from "./ProjectsView";
import ProjectAssignmentView from "./ProjectAssignmentView";

export default function IndexView() {
  return (
    <div>
      <RegionView />
      <CountriesView />
      <DepartmentsView />
      <DependentsView />
      <EmployeesView />
      <JobsView />
      <LocationsView />
      <ProjectsView />
      <ProjectAssignmentView />
    </div>
  );
}
