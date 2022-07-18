import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import api from "../../Api/indexApi";

export default function RegionsEdit(props) {
  const [region, setRegion] = useState([]);

  useEffect(() => {
    api.regionsApi.findOne(props.id).then((data) => {
      setRegion(data);
    });
  }, []);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      region_id: region.region_id,
      region_name: region.region_name,
    },
    onSubmit: async (values) => {
      let payload = {
        region_id: values.region_id,
        region_name: values.region_name
      }

      await api.regionsApi.update(payload).then(() => {
        props.closeAdd();
        window.alert("Region succesfully edited");
        props.onRefresh();
      });
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label>Region Name</label>
          <input
            type="text"
            name="region_name"
            id="region_name"
            value={formik.values.region_name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            autoComplete="region_name"
          />
        </div>
        <div>
          <button type="submit">Simpan</button>
          <button onClick={() => props.setDisplay("")}>Cancel</button>
        </div>
      </form>
    </div>
  );
}
