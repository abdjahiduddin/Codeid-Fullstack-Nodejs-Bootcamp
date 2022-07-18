import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import api from "../../Api/indexApi";

export default function LocationsEdit(props) {
  const [location, setLocation] = useState([]);

  useEffect(() => {
    api.locationsApi.findOne(props.id).then((data) => {
      setLocation(data);
    });
  }, []);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      location_id: location.location_id,
      street_address: location.street_address,
      postal_code: location.postal_code,
      city: location.city,
      state_province: location.state_province,
      country_id: location.country_id,
    },
    onSubmit: async (values) => {
      let payload = {
        location_id: values.location_id,
        street_address: values.street_address,
        postal_code: values.postal_code,
        city: values.city,
        state_province: values.state_province,
        country_id: values.country_id,
      };

      await api.locationsApi.update(payload).then(() => {
        props.closeAdd();
        window.alert("Location succesfully edited");
        props.onRefresh();
      });
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label>Location ID :</label>
          <br />
          <input
            id="location_id"
            type="number"
            name="location_id"
            value={formik.values.location_id}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            autoComplete="location_id"
          />
        </div>
        <div>
          <label>Street Address :</label>
          <br />
          <input
            id="street_address"
            type="text"
            name="street_address"
            value={formik.values.street_address}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            autoComplete="street_address"
          />
        </div>
        <div>
          <label>Postal Code :</label>
          <br />
          <input
            id="postal_code"
            type="text"
            name="postal_code"
            value={formik.values.postal_code}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            autoComplete="street_address"
          />
        </div>
        <div>
          <label>City :</label>
          <br />
          <input
            id="city"
            type="text"
            name="city"
            required
            value={formik.values.city}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            autoComplete="city"
          />
        </div>
        <div>
          <label>State Province :</label>
          <br />
          <input
            id="state_province"
            type="text"
            name="state_province"
            value={formik.values.state_province}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            autoComplete="state_province"
          />
        </div>
        <div>
          <label>Country ID :</label>
          <br />
          <input
            id="country_id"
            type="text"
            name="country_id"
            required
            value={formik.values.country_id}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            autoComplete="country_id"
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
