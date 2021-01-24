import React from "react";
import { Link } from "react-router-dom";
import { Form, Col, Row, Button } from "react-bootstrap";
import "../styles/addSchools.css";
import { Formik } from "formik";
import * as Services from "../services";

const { addSchool } = Services;
const initialValues = {
  schoolName: "",
  state: "",
  postalCode: "",
  street: "",
  suburb: "",
  numberOfStudents: "",
  id: "",
};
const onSubmit = (values, { setSubmitting, resetForm }) => {
  console.log(values);
  setSubmitting(true);
  addSchool(values).then((data) => {
    console.log(data);
    if (data != null) {
      alert("Added School Successfully !!");
      resetForm();
      setSubmitting(false);
    } else {
      alert("Try Again !!!");
      setSubmitting(false);
    }
  });
};

const validate = (values) => {
  let errors = {};
  if (!values.schoolName) {
    errors.schoolName = "School Name is Required!";
  }
  if (!values.numberOfStudents) {
    errors.numberOfStudents = "Number of Studnts is Required!";
  } else if (isNaN(values.numberOfStudents)) {
    errors.numberOfStudents = "Value should be a Number!";
  }

  if (!values.state) {
    errors.state = "State is Required!";
  }
  if (!values.street) {
    errors.street = "Street Name isRequired!";
  }
  if (!values.suburb) {
    errors.suburb = "Suburb is Required!";
  }
  if (!values.postalCode) {
    errors.postalCode = "Postal Code Required!";
  }
  return errors;
};
function NewForm() {
  return (
    <div className="addSchool">
      <Row>
        <Col md={12}>
          <h2>Adding Schools</h2>
        </Col>
        <Col md={{ span: 8, offset: 0 }}>
          <Link to={`/`}>
            <Button variant="info">View Schools</Button>
          </Link>
        </Col>
      </Row>

      <br />

      <Formik
        initialValues={initialValues}
        validate={validate}
        onSubmit={onSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          isValid,
        }) => (
          <Form className="form" onSubmit={handleSubmit}>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridSchoolName">
                <Form.Label>School Name</Form.Label>
                <Form.Control
                  type="text"
                  name="schoolName"
                  onChange={handleChange}
                  value={values.schoolName}
                  onBlur={handleBlur}
                />
                {touched.schoolName && errors.schoolName ? (
                  <div className="error">{errors.schoolName}</div>
                ) : null}
              </Form.Group>

              <Form.Group as={Col} controlId="formGridNumberOfStudents">
                <Form.Label>Number of Students</Form.Label>
                <Form.Control
                  type="text"
                  name="numberOfStudents"
                  onChange={handleChange}
                  value={values.numberOfStudents}
                  onBlur={handleBlur}
                />
                {touched.numberOfStudents && errors.numberOfStudents ? (
                  <div className="error">{errors.numberOfStudents}</div>
                ) : null}
              </Form.Group>
            </Form.Row>

            <Form.Group controlId="formGridState" className="address">
              <Form.Label>Address :</Form.Label>
              <br />
              <Form.Label>State</Form.Label>
              <Form.Control
                type="text"
                name="state"
                onChange={handleChange}
                value={values.state}
                onBlur={handleBlur}
              />
              {touched.state && errors.state ? (
                <div className="error">{errors.state}</div>
              ) : null}
            </Form.Group>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridStreetName">
                <Form.Label>Street Name</Form.Label>
                <Form.Control
                  type="text"
                  name="street"
                  onChange={handleChange}
                  value={values.street}
                  onBlur={handleBlur}
                />
                {touched.street && errors.street ? (
                  <div className="error">{errors.street}</div>
                ) : null}
              </Form.Group>

              <Form.Group as={Col} controlId="formGridSuburb">
                <Form.Label>Suburb</Form.Label>
                <Form.Control
                  type="text"
                  name="suburb"
                  onChange={handleChange}
                  value={values.suburb}
                  onBlur={handleBlur}
                />
                {touched.suburb && errors.suburb ? (
                  <div className="error">{errors.suburb}</div>
                ) : null}
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPostalCode">
                <Form.Label>Postal Code</Form.Label>
                <Form.Control
                  type="text"
                  name="postalCode"
                  onChange={handleChange}
                  value={values.postalCode}
                  onBlur={handleBlur}
                />
                {touched.postalCode && errors.postalCode ? (
                  <div className="error">{errors.postalCode}</div>
                ) : null}
              </Form.Group>
            </Form.Row>

            <Button
              variant="primary"
              type="submit"
              className="submit"
              disabled={!isValid || isSubmitting}
            >
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default NewForm;
