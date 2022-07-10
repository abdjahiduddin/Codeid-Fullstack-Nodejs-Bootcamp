import React, { useState, useEffect } from "react";
import api from "../Api/indexApi";
import ProjectsShow from "./Show/ProjectsShow";

export default function ProjectsView() {
  const title = "Projects";
  const [projects, setProjects] = useState([]);
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    api.projectsApi.findAll().then((data) => {
      setProjects(data);
    });
  }, []);

  const onDelete = async (id) => {
    console.log("OnDelete Clicked");
  };

  const show = () => {
    return (
      <div>
        <ProjectsShow Projects={projects} onDelete={onDelete} />
      </div>
    );
  };

  const add = () => {
    return <div>{/* <RegionAdd Title={title} /> */}</div>;
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
