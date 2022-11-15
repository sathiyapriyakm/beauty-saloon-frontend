import "./css/addBeautician.css";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { useFormik } from "formik";
import * as yup from "yup";
import { string, number } from "yup";
import { useNavigate } from "react-router-dom";
import { submitRegistration } from "../services/authService";
import { toast } from "react-toastify";
import { useState } from "react";
import { addNewBeautician } from "../services/BeauticianServices";
import { setBeauticianList } from "../features/beauticianSlice.js";
import { useDispatch, useSelector } from "react-redux";

function AddBeautician() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const [loading, setLoading] = useState(false);
  const { beauticianList } = useSelector((state) => state.beautician);
  const formvalidation = yup.object({
    firstname: string().required().min(2),
    lastname: string().required().min(2),
    phone: string().required().min(10),
    email: string().email().required(),
    education: string().required().min(1),
    department: yup.string().required("please select department"),
    experience: yup
      .number()
      .required("ERROR: The number is required!")
      .test(
        "Is positive?",
        "ERROR: The number must be greater than 0!",
        (value) => value >= 0
      ),
    image: yup.string().required(),
  });

  const {
    formik,
    values,
    handleSubmit,
    handleChange,
    handleBlur,
    touched,
    errors,
    setFieldError,
    resetForm,
  } = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      phone: "",
      email: "",
      education: "",
      department: "",
      experience: "",
      image:"",
    },
    validationSchema: formvalidation,
    onSubmit: async (values) => {
      setLoading(true);
      const response = await addNewBeautician(values);
      setLoading(false);

      if (!response.success) {
        setLoading(false);
        setFieldError("firstname", response.message);
      } else {
        resetForm();
       dispatch(setBeauticianList([...beauticianList,values]));
        toast.success("Beautician added Successfully");
      }
    },
  });

  return (
    <div className="addBeautician">
      <Form className="addBeauticianForm" onSubmit={handleSubmit}>
        <h3>Add Beautician Form</h3>
        {touched.firstname && errors.firstname ? (
          <div className="error">{errors.firstname}</div>
        ) : (
          ""
        )}
        {touched.lastname && errors.lastname ? (
          <div className="error">{errors.lastname}</div>
        ) : (
          ""
        )}
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="First Name"
              name="firstname"
              value={values.firstname}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridLastname">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Last name"
              name="lastname"
              value={values.lastname}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          {touched.phone && errors.phone ? (
            <span className="error">{errors.phone}</span>
          ) : (
            ""
          )}
          {touched.email && errors.email ? (
            <span className="error">{errors.email}</span>
          ) : (
            ""
          )}
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter phone number"
              name="phone"
              value={values.phone}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridemail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          {touched.education && errors.education ? (
            <span className="error">{errors.education}</span>
          ) : (
            ""
          )}
          {touched.experience && errors.experience ? (
            <span className="error">{errors.experience}</span>
          ) : (
            ""
          )}
          <Form.Group as={Col} controlId="formGrideducation">
            <Form.Label>Education</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter education "
              name="education"
              value={values.education}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridexperience">
            <Form.Label>Experience in Years</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter experience"
              name="experience"
              value={values.experience}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Form.Group>
        </Row>
        {touched.department && errors.department ? (
          <div className="error">{errors.department}</div>
        ) : (
          ""
        )}
        <Form.Group className="mb-3" controlId="formdepartment">
          <Form.Label>Specialised In</Form.Label>
          <Form.Select
            aria-label="Default select example"
            name="department"
            value={values.department}
            onChange={handleChange}
            onBlur={handleBlur}
          >
            <option value="">Select Expertise</option>
            <option value="facial">Facial Treatments</option>
            <option value="hair-care">Hair Care</option>
            <option value="waxing">Waxing</option>
            <option value="body-massage">Body Massage</option>
            <option value="bridal-grooming">Bridal Grooming</option>
            <option value="manicures-pedicures">Manicures and Pedicures</option>
          </Form.Select>
        </Form.Group>
        {touched.image && errors.image ? (
          <div className="error">{errors.image}</div>
        ) : (
          ""
        )}
        <Form.Group className="mb-3" controlId="formImage">
          <Form.Label>Image</Form.Label>
          <Form.Control
            type="text"
            placeholder="Provide an image"
            name="image"
            value={values.image}
            onChange={handleChange}
            onBlur={handleBlur}
          >
          </Form.Control>
        </Form.Group>

        <div className="addBeauticianbtngrp">
          <Button
            variant="success"
            type="submit"
            className="addBeauticianBtn"
            disabled={loading}
          >
            Add Beautician
          </Button>
          <Button variant="warning" type="submit" className="resetBtn">
            Reset
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default AddBeautician;
