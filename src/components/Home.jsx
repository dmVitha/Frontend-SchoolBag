import { Link } from "react-router-dom";
import React from "react";
import { Button } from "react-bootstrap";
import ViewSchools from "./ViewSchools";
import "../styles/home.css";

function Home() {
  return (
    <div>
      <h2 className="headline">School Portal</h2>
      <br></br>
      <Link to={`/addNewSchool`}>
        <Button type="button" class="btn btn-primary">
          Add School
        </Button>
      </Link>
      <br></br>
      <br></br>
      <ViewSchools />
    </div>
  );
}

export default Home;
