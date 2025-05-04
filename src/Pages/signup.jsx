import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const CreateUser = () => {
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    username: Yup.string()
      .min(3, "Username must be at least 3 characters")
      .required("Username is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    retypepassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Retype Password is required"),
  });

  const initialValues = {
    username: "",
    password: "",
    retypepassword: "",
  };

  const handleSubmit = (values) => {
    console.log("Form submitted:", values);
    alert("Sign up successful!");
    navigate("/homepage");
  };

  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form>
              <label htmlFor="username" style={styles.label}>
                Create Username
              </label>
              <Field
                type="text"
                id="username"
                name="username"
                style={styles.inputField}
                placeholder="Enter your username"
              />
              <ErrorMessage
                name="username"
                component="div"
                style={{ color: "red", marginBottom: "10px" }}
              />

              <label htmlFor="password" style={styles.label}>
                Create Password
              </label>
              <Field
                type="password"
                id="password"
                name="password"
                style={styles.inputField}
                placeholder="Enter your password"
              />
              <ErrorMessage
                name="password"
                component="div"
                style={{ color: "red", marginBottom: "10px" }}
              />

              <label htmlFor="retypepassword" style={styles.label}>
                Retype Password
              </label>
              <Field
                type="password"
                id="retypepassword"
                name="retypepassword"
                style={styles.inputField}
                placeholder="Retype your password"
              />
              <ErrorMessage
                name="retypepassword"
                component="div"
                style={{ color: "red", marginBottom: "10px" }}
              />

              <div style={styles.buttonContainer}>
                <button type="submit" style={styles.createUserButton}>
                  Create User
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

const styles = {
  body: {
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#344E41",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
  container: {
    backgroundColor: "#DAD7CD",
    borderRadius: "20px",
    overflow: "hidden",
    width: "500px",
    padding: "40px",
    boxShadow: "0 6px 10px rgba(0, 0, 0, 0.1)",
  },
  inputField: {
    width: "100%",
    padding: "15px",
    marginBottom: "20px",
    border: "2px solid #ccc",
    borderRadius: "10px",
    fontSize: "16px",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "flex-end",
  },
  createUserButton: {
    backgroundColor: "#A3B18A",
    color: "white",
    border: "none",
    padding: "10px 20px",
    borderRadius: "20px",
    cursor: "pointer",
    fontSize: "16px",
  },
  label: {
    display: "block",
    marginBottom: "8px",
    fontSize: "16px",
    color: "#344E41",
  },
};

export default CreateUser;