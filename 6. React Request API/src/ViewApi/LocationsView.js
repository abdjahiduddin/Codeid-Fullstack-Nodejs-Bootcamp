import React, { useState, useEffect } from "react";
import api from "../Api/indexApi";
import ShowData from "./ShowData";

export default function LocationsView() {
  const title = "List Locations";
  const [locations, setLocations] = useState([]);
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    api.locationsApi.findAll().then((data) => {
      setLocations(data);
    });
  }, []);

  const renderTable = () => {
    return (
      <table>
        <th>Location ID</th>
        <th>Street Address</th>
        <th>Postal Code</th>
        <th>City</th>
        <th>State Province</th>
        <th>Country ID</th>
        <tbody>
          {locations &&
            locations.map((location) => (
              <tr key={location.location_id}>
                <td>{location.location_id}</td>
                <td>{location.street_address}</td>
                <td>{location.postal_code}</td>
                <td>{location.city}</td>
                <td>{location.state_province}</td>
                <td>{location.country_id}</td>
              </tr>
            ))}
        </tbody>
      </table>
    );
  };

  return (
    <div>
      <ShowData
        Title={title}
        Display={display}
        setDisplay={setDisplay}
        renderTable={renderTable}
      />
    </div>
  );
}
