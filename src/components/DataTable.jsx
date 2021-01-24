import React from "react";
import { Table } from "react-bootstrap";
function DataTable({ data, coloumns }) {
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            {coloumns.map((heading) => (
              <th>{heading.Header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr>
              {coloumns.map((coloumn) => (
                <td>{row[coloumn.accessor]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default DataTable;
