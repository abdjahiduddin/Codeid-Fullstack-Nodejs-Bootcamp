import React, { useState, useEffect } from "react";
import api from "../Api/indexApi";
import JobsShow from "./Show/JobsShow";
import JobsAdd from "./Add/JobsAdd";
import JobsEdit from "./Edit/JobsEdit";

export default function JobsView() {
  const title = "Jobs";
  const [jobs, setJobs] = useState([]);
  const [display, setDisplay] = useState("");
  const [refresh, setRefresh] = useState(false);
  const [id, setId] = useState();
  const [values, setValues] = useState({
    job_title: "",
    min_salary: "",
    max_salary: "",
  });

  useEffect(() => {
    api.jobsApi.findAll().then((data) => {
      setJobs(data);
    });
    setRefresh(false);
  }, [refresh]);

  const handleOnChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    const payload = {
      job_title: values.job_title,
      min_salary: values.min_salary || null,
      max_salary: values.max_salary || null,
    };

    await api.jobsApi
      .create(payload)
      .then(() => {
        setDisplay("show");
        setRefresh(true);
        window.alert(`Successfully Add Job ${values.job_title}`);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onDelete = async (id, name) => {
    await api.jobsApi
      .deleted(id)
      .then(() => {
        setDisplay("show");
        setRefresh(true);
        window.alert(`Successfully Delete Job ${name}`);
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
        <JobsShow Jobs={jobs} onDelete={onDelete} onEdit={onEdit} />
      </div>
    );
  };

  const add = () => {
    return (
      <div>
        <JobsAdd
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
        <JobsEdit
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
        {display === "add" ? "Close" : "Add Job"}
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
