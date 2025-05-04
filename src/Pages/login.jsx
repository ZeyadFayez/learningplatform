import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, HStack, Heading, Text } from "@chakra-ui/react";
import icon from "./icons8-logo-50.png";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link as RouterLink } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  
  const validationSchema = Yup.object({
    username: Yup.string()
      .min(3, "Username must be at least 3 characters")
      .required("Username is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });


  const initialValues = {
    username: "",
    password: "",
  };

  //  submission handler
  const handleSubmit = (values) => {
    console.log("Form submitted:", values);
    alert("Login successful!");
    navigate("/homepage");
  };

  return (
    <div style={styles.body}>
      <div style={styles.container}>
       
        <div style={styles.leftSection}>
          <div style={styles.icon}>
            <img src={icon} alt="icon" style={styles.svg} />
          </div>
          <Heading color="#344E41" fontWeight="bold" size={"lg"}>
            Welcome Back!
          </Heading>
          <Text color="#344E41" mt={4}>
            Please log in to continue.
          </Text>
        </div>

        
        <div style={styles.rightSection}>
          <Heading color="#DAD7CD" fontWeight="bold" size={"3xl"}>
            fritz
          </Heading>
          <HStack justify="left" align="center" mb={100} gap={9}>
            <Text color="#DAD7CD" textAlign="left" mt={-50} mb={-20}>
              Meet Fritz, Your Learning Companion!
            </Text>
          </HStack>
     
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ submitForm }) => (
              <Form>
                {/* Username Field */}
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

                {/* Password Field */}
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

                {/* Align Sign up and Login buttons on the same x-axis */}
                <HStack justify="center" spacing={6} mt={4} mb={4}>
                  <RouterLink to="/signup" style={{ textDecoration: "none" }}>
                    <Button
                      colorScheme="green"
                      variant="outline"
                      size="lg"
                      borderRadius="20px"
                    >
                      Sign up
                    </Button>
                  </RouterLink>
                  <Button
                    colorScheme="green"
                    variant="outline"
                    size="lg"
                    borderRadius="20px"
                    onClick={submitForm} // Trigger form validation and submission
                  >
                    Login
                  </Button>
                </HStack>
              </Form>
            )}
          </Formik>
        </div>
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
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  },
  container: {
    backgroundColor: "#DAD7CD",
    borderRadius: "30px",
    overflow: "hidden",
    display: "flex",
    width: "1000px",
    height: "500px",
    boxShadow: "0 6px 10px rgba(0, 0, 0, 0.1)",
  },
  leftSection: {
    backgroundColor: "#DAD7CD",
    width: "60%",
    padding: "40px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  rightSection: {
    backgroundColor: "#588157",
    color: "white",
    width: "40%",
    padding: "40px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  icon: {
    width: "80px",
    height: "80px",
    borderRadius: "15px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "30px",
  },
  svg: {
    width: "70px",
    height: "70px",
  },
  inputField: {
    width: "100%",
    padding: "15px",
    marginTop: "20px",
    marginBottom: "35px",
    border: "2px solid #ccc",
    borderRadius: "15px",
    fontSize: "18px",
  },
  label: {
    display: "block",
    marginBottom: "8px",
    fontSize: "16px",
    color: "#344E41",
  },
};

export default LoginPage;