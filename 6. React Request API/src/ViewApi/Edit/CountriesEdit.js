import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import api from "../../Api/indexApi";

export default function CountriesEdit(props) {
  const [country, setCountry] = useState([]);

  useEffect(() => {
    api.countriesApi.findOne(props.id).then((data) => {
      setCountry(data);
    });
  }, []);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      country_id: country.country_id,
      country_name: country.country_name,
      region_id: country.region_id,
    },
    onSubmit: async (values) => {
      let payload = {
        country_id: values.country_id,
        country_name: values.country_name,
        region_id: values.region_id,
      };

      await api.countriesApi.update(payload).then(() => {
        props.closeAdd();
        window.alert("Country succesfully edited");
        props.onRefresh();
      });
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label>Country Name :</label>
          <br />
          <input
            id="country_name"
            type="text"
            name="country_name"
            value={formik.values.country_name}
            onChange={formik.handleChange}
            onBlur={formik.onBlur}
          />
        </div>
        <div>
          <label>Region ID :</label>
          <br />
          <input
            id="region_id"
            type="number"
            name="region_id"
            required
            onChange={formik.handleChange}
            value={formik.values.region_id}
            onBlur={formik.handleBlur}
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
