import React, { useState, useEffect } from "react";
import api from "../Api/indexApi";
import ShowData from "./ShowData";

export default function RegionView() {
  const title = "List Regions";
  const [regions, setRegions] = useState([]);
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    api.regionsApi.findAll().then((data) => {
      setRegions(data);
    });
  }, []);

  const renderTable = () => {
    return (
      <table>
        <th>Region ID</th>
        <th>Region Name</th>
        <tbody>
          {regions &&
            regions.map((reg) => (
              <tr key={reg.region_id}>
                <td>{reg.region_id}</td>
                <td>{reg.region_name}</td>
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
