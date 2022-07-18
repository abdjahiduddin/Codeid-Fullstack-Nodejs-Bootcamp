import React, { useState, useEffect } from "react";
import api from "../Api/indexApi";
import LocationsShow from "./Show/LocationsShow";
import LocationsAdd from "./Add/LocationsAdd";
import LocationsEdit from "./Edit/LocationsEdit";

export default function LocationsView() {
  const title = "Locations";
  const [locations, setLocations] = useState([]);
  const [display, setDisplay] = useState("");
  const [refresh, setRefresh] = useState(false);
  const [id, setId] = useState();
  const [values, setValues] = useState({
    location_id: "",
    street_address: "",
    postal_code: "",
    city: "",
    state_province: "",
    country_id: "",
  });

  useEffect(() => {
    api.locationsApi.findAll().then((data) => {
      setLocations(data);
    });
    setRefresh(false);
  }, [refresh]);

  const handleOnChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    const payload = {
      location_id: values.location_id,
      street_address: values.street_address,
      postal_code: values.postal_code,
      city: values.city,
      state_province: values.state_province,
      country_id: values.country_id,
    };

    await api.locationsApi
      .create(payload)
      .then(() => {
        setDisplay("show");
        setRefresh(true);
        window.alert(`Successfully Add New Location`);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onDelete = async (id) => {
    await api.locationsApi
      .deleted(id)
      .then(() => {
        setDisplay("show");
        setRefresh(true);
        window.alert(`Successfully Delete Location ${id}`);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onEdit = (locID) => {
    setDisplay("edit");
    setId(locID);
  };

  const show = () => {
    return (
      <div>
        <LocationsShow
          Locations={locations}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      </div>
    );
  };

  const add = () => {
    return (
      <div>
        <LocationsAdd
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
        <LocationsEdit
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
        {display === "add" ? "Close" : "Add Location"}
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
