import React, { useState, useEffect } from "react";
import api from "../Api/indexApi";
import ProjectAssigmentShow from "./Show/ProjectAssigmentShow";

export default function ProjectAssignmentView() {
  const title = "Project Assignments";
  const [projectAssignment, setProjectAssignment] = useState([]);
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    api.projectAssignmentApi.findAll().then((data) => {
      setProjectAssignment(data);
    });
  }, []);

  const onDelete = async (id) => {
    console.log("OnDelete Clicked");
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
        {display === "add" ? "Close" : "Add Project Assignment"}
      </button>
      {display === "show" ? show() : display === "add" ? add() : <></>}
    </div>
  );
}
