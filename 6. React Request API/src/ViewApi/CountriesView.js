import React, { useState, useEffect } from "react";
import api from "../Api/indexApi";
import ShowData from "./ShowData";

export default function CountriesView() {
    const title = "List Countries"
  const [countries, setCountries] = useState([]);
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    api.countriesApi.findAll().then((data) => {
      setCountries(data);
    });
  }, []);

  const renderTable = () => {
    return (
      <table>
        <th>Country ID</th>
        <th>Country Name</th>
        <th>Region ID</th>
        <tbody>
          {countries &&
            countries.map((country) => (
              <tr key={country.country_id}>
                <td>{country.country_id}</td>
                <td>{country.country_name}</td>
                <td>{country.region_id}</td>
              </tr>
            ))}
        </tbody>
      </table>
    );
  };

  return (
    <div>
      <ShowData
      Title = {title}
      Display = {display}
      setDisplay = {setDisplay}
      renderTable = {renderTable}
      />
    </div>
  );
}
