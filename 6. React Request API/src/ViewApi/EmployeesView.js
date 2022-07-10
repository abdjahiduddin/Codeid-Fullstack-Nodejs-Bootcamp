import React, { useState, useEffect } from "react";
import api from "../Api/indexApi";
import EmployeesShow from "./Show/EmployeesShow";

export default function EmployeesView() {
  const title = "Employees";
  const [employees, setEmployees] = useState([]);
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    api.employeesApi.findAll().then((data) => {
      setEmployees(data);
    });
  }, []);

  const onDelete = async (id) => {
    console.log("OnDelete Clicked");
  };

  const show = () => {
    return (
      <div>
        <EmployeesShow 
          Employees={employees}
          onDelete={onDelete} />
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
        {display === "add" ? "Close" : "Add Employee"}
      </button>
      {display === "show" ? show() : display === "add" ? add() : <></>}
    </div>
  );
}
