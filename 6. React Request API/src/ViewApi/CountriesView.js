import React, { useState, useEffect } from "react";
import api from "../Api/indexApi";
import CountriesShow from "./Show/CountriesShow";
import CountriesAdd from "./Add/CountriesAdd";

export default function CountriesView() {
  const title = "Countries";
  const [countries, setCountries] = useState([]);
  const [display, setDisplay] = useState("");
  const [refresh, setRefresh] = useState(false);
  const [values, setValues] = useState({
    country_id: "",
    country_name: "",
    region_id: "",
  });

  useEffect(() => {
    api.countriesApi.findAll().then((data) => {
      setCountries(data);
    });
    setRefresh(false);
  }, [refresh]);

  const handleOnChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    
    const payload = {
      country_id: values.country_id,
      country_name: values.country_name,
      region_id: values.region_id,
    };

    await api.countriesApi
      .create(payload)
      .then(() => {
        setDisplay("show");
        setRefresh(true);
        window.alert(`Successfully Add Country ${values.country_name}`);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onDelete = async (id, name) => {
    await api.countriesApi
      .deleted(id)
      .then(() => {
        setRefresh(true);
        setDisplay("show");
        window.alert(`Successfully Delete Country ${name}`);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const show = () => {
    return (
      <div>
        <CountriesShow Countries={countries} onDelete={onDelete} />
      </div>
    );
  };

  const add = () => {
    return (
      <div>
        <CountriesAdd
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
        {display === "add" ? "Close" : "Add Country"}
      </button>
      {display === "show" ? show() : display === "add" ? add() : <></>}
    </div>
  );
}
