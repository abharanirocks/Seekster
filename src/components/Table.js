import React from "react";
import "../styles/Table.css";
import { DeleteOutline } from "@mui/icons-material";
import ConsoleCard from "./ConsoleCard";

function Table({ data }) {
  return (
    <div className="table-container">
      <table className="custom-table">
        <thead>
          <tr>
            <th>URL</th>
            <th>Submitted</th>
            <th>Last Read</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* {data.map((row) => (
            <tr>
              {row.map((cell) => (
                <td>{cell}</td>
              ))}
              <td>
                <DeleteOutline className="card-delete" />
              </td>
            </tr>
          ))} */}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
