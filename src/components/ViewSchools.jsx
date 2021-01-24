import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import "../styles/viewSchool.css";
import DataTable from "./DataTable";
import * as Services from "../services";

function ViewSchools() {
  const { getSchools } = Services;
  const [filterInput, setFilterInput] = useState("");
  const [data, setData] = useState(null);

  // const data = useMemo(() => MOCK_DATA, []);
  useEffect(() => {
    let mounted = true;
    getSchools().then((items) => {
      if (mounted) {
        setData(items);
      }
    });
    return () => (mounted = false);
  }, []);

  const columns = [
    {
      Header: "School Name",
      accessor: "schoolName",
    },

    {
      Header: "State",
      accessor: "state",
    },
    {
      Header: "Street Name",
      accessor: "street",
    },
    {
      Header: "Suburb",
      accessor: "suburb",
    },
    {
      Header: "Postal Code",
      accessor: "postalCode",
    },

    {
      Header: " Number of students registered",
      accessor: "numberOfStudents",
    },
  ];

  const handleFilterChange = (e) => {
    setFilterInput(e.target.value);
  };
  function search(rows) {
    return rows.filter(
      (row) =>
        row.schoolName.toLowerCase().indexOf(filterInput.toLowerCase()) > -1 ||
        row.state.toLowerCase().indexOf(filterInput.toLowerCase()) > -1
    );
  }

  return (
    <div>
      <h2>View schools</h2>
      <div className="search-bar">
        <Form.Control
          type="text"
          name="filter_search"
          placeholder="Search by School Name or Address"
          onChange={handleFilterChange}
          values={filterInput}
        />
      </div>
      <br />
      {( data!=null) ? (
        <DataTable data={search(data)} coloumns={columns} />
      ) : (
        <div className="empty-table">
          No schools were added , click Add School button to add schools !
        </div>
      )}
    </div>
  );
}

export default ViewSchools;
