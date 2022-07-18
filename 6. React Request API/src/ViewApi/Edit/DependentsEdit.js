import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import api from "../../Api/indexApi";

export default function DependentsEdit(props) {
  const [dependent, setDependent] = useState([]);

  useEffect(() => {
    api.dependentsApi.findOne(props.id).then((data) => {
      setDependent(data);
    });
  }, []);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      dependent_id: dependent.dependent_id,
      first_name: dependent.first_name,
      last_name: dependent.last_name,
      relationship: dependent.relationship,
      employee_id: dependent.employee_id,
    },
    onSubmit: async (values) => {
      let payload = {
        dependent_id: values.dependent_id,
        first_name: values.first_name,
        last_name: values.last_name,
        relationship: values.relationship,
        employee_id: values.employee_id,
      };

      await api.regionsApi.update(payload).then(() => {
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
          <label>First Name :</label>
          <br />
          <input
            id="first_name"
            type="text"
            name="first_name"
            required
            value={formik.values.first_name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            autoComplete="first_name"
          />
        </div>
        <div>
          <label>Last Name :</label>
          <br />
          <input
            id="last_name"
            type="text"
            name="last_name"
            required
            value={formik.values.last_name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            autoComplete="last_name"
          />
        </div>
        <div>
          <label>Relationship :</label>
          <br />
          <input
            id="relationship"
            type="text"
            name="relationship"
            required
            value={formik.values.relationship}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            autoComplete="relationship"
          />
        </div>
        <div>
          <label>Employee ID :</label>
          <br />
          <input
            id="employee_id"
            type="number"
            name="employee_id"
            value={formik.values.employee_id}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            autoComplete="employee_id"
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
