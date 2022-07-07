import React, { useState, useEffect } from "react";
import api from "../Api/indexApi";
import ShowData from "./ShowData";

export default function ProjectAssignmentView() {
  const title = "List Project Assignments";
  const [projectAssignment, setProjectAssignment] = useState([]);
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    api.projectAssignmentApi.findAll().then((data) => {
      setProjectAssignment(data);
    });
  }, []);

  const renderTable = () => {
    return (
      <table>
        <th>Project Assignment ID</th>
        <th>Project Employee ID</th>
        <th>Project Start Date</th>
        <th>Project End Date</th>
        <th>Project Status</th>
        <tbody>
          {projectAssignment &&
            projectAssignment.map((pa) => (
              <tr key={pa.pras_proj_id}>
                <td>{pa.pras_proj_id}</td>
                <td>{pa.pras_employee_id}</td>
                <td>{pa.pras_startdate}</td>
                <td>{pa.pras_enddate}</td>
                <td>{pa.pras_status}</td>
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
