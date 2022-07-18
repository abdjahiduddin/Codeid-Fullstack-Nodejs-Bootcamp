import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import api from "../../Api/indexApi";

export default function JobsEdit(props) {
  const [job, setJob] = useState([]);

  useEffect(() => {
    api.jobsApi.findOne(props.id).then((data) => {
      setJob(data);
    });
  }, []);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      job_id: job.job_id,
      job_title: job.job_title,
      min_salary: job.min_salary,
      max_salary: job.max_salary,
    },
    onSubmit: async (values) => {
      let payload = {
        job_id: values.job_id,
        job_title: values.job_title,
        min_salary: values.min_salary,
        max_salary: values.max_salary,
      };

      await api.jobsApi.update(payload).then(() => {
        props.closeAdd();
        window.alert("Job succesfully edited");
        props.onRefresh();
      });
    },
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label>Job Title :</label>
          <br />
          <input
            id="job_title"
            type="text"
            name="job_title"
            required
            value={formik.values.job_title}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            autoComplete="job_title"
          />
        </div>
        <div>
          <label>Min Salary :</label>
          <br />
          <input
            id="min_salary"
            type="text"
            name="min_salary"
            value={formik.values.min_salary}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            autoComplete="min_salary"
          />
        </div>
        <div>
          <label>Max Salary :</label>
          <br />
          <input
            id="max_salary"
            type="text"
            name="max_salary"
            value={formik.values.max_salary}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            autoComplete="max_salary"
          />
        </div>
        <div>
          <button type="submit"> Simpan </button>
          <button onClick={() => props.setDisplay("")}>Cancel</button>
        </div>
      </form>
    </div>
  );
}
