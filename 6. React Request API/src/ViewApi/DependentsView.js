import React, { useEffect, useState } from "react";
import api from "../Api/indexApi";
import DependentsShow from "./Show/DependentsShow";
import DependentsAdd from "./Add/DependentsAdd";
import DependentsEdit from "./Edit/DependentsEdit";

export default function DependentsView() {
  const title = "Dependents";
  const [dependents, setDependents] = useState([]);
  const [display, setDisplay] = useState("");
  const [id, setId] = useState();
  const [refresh, setRefresh] = useState(false);
  const [values, setValues] = useState({
    first_name: "",
    last_name: "",
    relationship: "",
    employee_id: "",
  });

  useEffect(() => {
    api.dependentsApi.findAll().then((data) => {
      setDependents(data);
    });
    setRefresh(false);
  }, [refresh]);

  const handleOnChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    const payload = {
      first_name: values.first_name,
      last_name: values.last_name,
      relationship: values.relationship,
      employee_id: values.employee_id || null,
    };

    await api.dependentsApi
      .create(payload)
      .then(() => {
        setDisplay("show");
        setRefresh(true);
        window.alert(
          `Successfully Add Dependent ${
            values.first_name + " " + values.last_name
          }`
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onDelete = async (id, name) => {
    await api.dependentsApi
      .deleted(id)
      .then(() => {
        setDisplay("show");
        setRefresh(true);
        window.alert(`Successfully Delete Dependent ${name}`);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onEdit = (regId) => {
    setDisplay("edit");
    setId(regId);
  };

  const show = () => {
    return (
      <div>
        <DependentsShow
          Dependents={dependents}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      </div>
    );
  };

  const add = () => {
    return (
      <div>
        <DependentsAdd
          onSubmit={onSubmit}
          handleOnChange={handleOnChange}
          setDisplay={setDisplay}
        />
      </div>
    );
  };

  const edit = () => {
    return (
      <div>
        <DependentsEdit
          closeAdd={() => setDisplay("show")}
          onRefresh={() => setRefresh(true)}
          id={id}
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
        {display === "add" ? "Close" : "Add Dependent"}
      </button>
      {display === "edit" ? (
        edit()
      ) : display === "show" ? (
        show()
      ) : display === "add" ? (
        add()
      ) : (
        <></>
      )}
    </div>
  );
}
