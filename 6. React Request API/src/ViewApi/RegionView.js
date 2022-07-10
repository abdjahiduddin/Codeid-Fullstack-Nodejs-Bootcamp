import React, { useState, useEffect } from "react";
import api from "../Api/indexApi";
import RegionShow from "./Show/RegionsShow";
import RegionAdd from "./Add/RegionsAdd";

export default function RegionView() {
  const title = "Region";
  const [regions, setRegions] = useState([]);
  const [display, setDisplay] = useState("");
  const [refresh, setRefresh] = useState(false);
  const [values, setValues] = useState({
    region_id: undefined,
    region_name: "",
  });

  useEffect(() => {
    api.regionsApi.findAll().then((data) => {
      setRegions(data);
    });
    setRefresh(false);
  }, [refresh]);

  const handleOnChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const payload = {
      region_name: values.region_name,
    };

    await api.regionsApi
      .create(payload)
      .then(() => {
        setDisplay("show");
        setRefresh(true);
        window.alert(`Successfully Add Region ${values.region_name}`);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onDelete = async (id, name) => {
    await api.regionsApi
      .deleted(id)
      .then(() => {
        setRefresh(true);
        setDisplay("show");
        window.alert(`Successfully Delete Region ${name}`);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const show = () => {
    return (
      <div>
        <RegionShow Regions={regions} onDelete={onDelete} />
      </div>
    );
  };

  const add = () => {
    return (
      <div>
        <RegionAdd
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
        {display === "add" ? "Close" : "Add Region"}
      </button>
      {display === "show" ? show() : display === "add" ? add() : <></>}
    </div>
  );
}
