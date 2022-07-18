import React, { useState, useEffect } from "react";
import api from "../Api/indexApi";
import ProjectsShow from "./Show/ProjectsShow";
import ProjectsAdd from "./Add/ProjectsAdd";

export default function ProjectsView() {
  const title = "Projects";
  const [projects, setProjects] = useState([]);
  const [display, setDisplay] = useState("");
  const [refresh, setRefresh] = useState(false);
  const [values, setValues] = useState({
    proj_name: "",
    proj_createdon: "",
    proj_duedate: "",
    proj_cust_name: "",
    proj_description: "",
    proj_status: "",
    proj_amount: null,
    proj_account_mgr: null,
    employee_id: null,
  });

  useEffect(() => {
    api.projectsApi.findAll().then((data) => {
      setProjects(data);
    });
  }, [refresh]);

  const handleOnChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    const payload = {
      proj_name: values.proj_name,
      proj_createdon: values.proj_createdon,
      proj_duedate: values.proj_duedate || null,
      proj_cust_name: values.proj_cust_name,
      proj_description: values.proj_description,
      proj_status: values.proj_status,
      proj_amount: values.proj_amount,
      proj_account_mgr: values.proj_account_mgr,
      employee_id: values.employee_id,
    };

    await api.projectsApi
      .create(payload)
      .then(() => {
        setDisplay("show");
        setRefresh(true);
        window.alert(`Successfully Add New Project`);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onDelete = async (id) => {
    await api.projectsApi
      .deleted(id)
      .then(() => {
        setDisplay("show");
        setRefresh(true);
        window.alert(`Successfully Delete Project ${id}`);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const show = () => {
    return (
      <div>
        <ProjectsShow Projects={projects} onDelete={onDelete} />
      </div>
    );
  };

  const add = () => {
    return (
      <div>
        <ProjectsAdd
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
        {display === "add" ? "Close" : "Add Project"}
      </button>
      {display === "show" ? show() : display === "add" ? add() : <></>}
    </div>
  );
}
