import React, { useState, useEffect } from "react";
import api from "../Api/indexApi";
import DepartmentsShow from "./Show/DepartmentsShow";
import DepartmentsAdd from "./Add/DepartmentsAdd";

export default function DepartmentsView() {
  const title = "Departments";
  const [departments, setDepartments] = useState([]);
  const [display, setDisplay] = useState("");
  const [refresh, setRefresh] = useState(false)
  const [values, setValues] = useState({
    department_id: undefined,
    department_name: "",
    location_id : ""
  })

  useEffect(() => {
    api.departmentsApi.findAll().then((data) => {
      setDepartments(data);
    });
    setRefresh(false)
  }, [refresh]);

  const handleOnChange = (name) => (event) => {
    setValues({...values, [name]: event.target.value})
  }

  const onSubmit = async (event) => {
    event.preventDefault()

    const payload = {
      department_name: values.department_name,
      location_id: values.location_id || null
    }

    await api.departmentsApi.create(payload).then(() => {
      setDisplay("show")
      setRefresh(true)
      window.alert(`Successfully Add Department ${values.department_name}`)
    }).catch(err => {
      console.log(err);
    })
  }

  const onDelete = async (id, name) => {
    await api.departmentsApi.deleted(id).then(() => {
      setDisplay("show")
      setRefresh(true)
      window.alert(`Successfully Delete Department ${name}`)
    }).catch(err => {
      console.log(err);
    })
  };

  const show = () => {
    return (
      <div>
        <DepartmentsShow Departments={departments} onDelete={onDelete} />
      </div>
    );
  };

  const add = () => {
    return (
      <div>
        <DepartmentsAdd
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
        {display === "add" ? "Close" : "Add Department"}
      </button>
      {display === "show" ? show() : display === "add" ? add() : <></>}
    </div>
  );
}
