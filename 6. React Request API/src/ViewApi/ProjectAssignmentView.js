import React, { useState, useEffect } from "react";
import api from "../Api/indexApi";
import ProjectAssigmentShow from "./Show/ProjectAssigmentShow";
import ProjectAssigmentsAdd from "./Add/ProjectAssigmentsAdd";

export default function ProjectAssignmentView() {
  const title = "Project Assignments";
  const [projectAssignment, setProjectAssignment] = useState([]);
  const [display, setDisplay] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [values, setValues] = useState({
    pras_proj_id: null,
    pras_employee_id: null,
    pras_startdate: null,
    pras_enddate: null,
    pras_status: "",
  });

  useEffect(() => {
    api.projectAssignmentApi.findAll().then((data) => {
      setProjectAssignment(data);
      setRefresh(false);
    });
  }, [refresh]);

  const handleOnChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    const payload = {
      pras_proj_id: values.pras_proj_id,
      pras_employee_id: values.pras_employee_id,
      pras_startdate: values.pras_startdate,
      pras_enddate: values.pras_enddate,
      pras_status: values.pras_status,
    };

    await api.projectAssignmentApi
      .create(payload)
      .then(() => {
        setDisplay("show");
        setRefresh(true);
        window.alert(`Successfully Add New Pras`);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onDelete = async (id, empId) => {
    await api.projectAssignmentApi
      .deleted(id, empId)
      .then(() => {
        setDisplay("show");
        setRefresh(true);
        window.alert(`Successfully Delete Pras ${id}`);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const show = () => {
    return (
      <div>
        <ProjectAssigmentShow
          ProjectAssignment={projectAssignment}
          onDelete={onDelete}
        />
      </div>
    );
  };

  const add = () => {
    return (
      <div>
        <ProjectAssigmentsAdd
          onSubmit={onSubmit}
          handleOnChange={handleOnChange}
          setDisplay={setDisplay}
        />
      </div>
    );
  };

  return (
    <div>
      <h1>{title}</h1>
      <button
        onClick={() =>
          display === "show" ? setDisplay("") : setDisplay("show")
        }
      >
        {display === "show" ? "Hide" : "Show"}
      </button>
      <button
        onClick={() => (display === "add" ? setDisplay("") : setDisplay("add"))}
      >
        {display === "add" ? "Close" : "Add Project Assignment"}
      </button>
      {display === "show" ? show() : display === "add" ? add() : <></>}
    </div>
  );
}
