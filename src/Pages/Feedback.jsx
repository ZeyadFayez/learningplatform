import React from "react";
import Header from "../Component/header";
import Footer from "../Component/footer";
import Sidebar from "../Component/feedback-side";
import { Box, Button, HStack, Heading } from "@chakra-ui/react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const FeedbackPage = () => {
  // Sample data for the pie chart
  const feedbackData = [
    { name: "Positive", value: 60 },
    { name: "Neutral", value: 25 },
    { name: "Negative", value: 15 },
  ];

  const COLORS = ["#4CAF50", "#FFC107", "#F44336"]; // Colors for the chart

  // Validation schema for feedback form
  const validationSchema = Yup.object({
    username: Yup.string()
      .min(3, "Username must be at least 3 characters")
      .required("Username is required"),
    feedback: Yup.string()
      .min(10, "Feedback must be at least 10 characters")
      .required("Feedback is required"),
  });

  // Initial values for the form
  const initialValues = {
    username: "",
    feedback: "",
  };

  // Submission handler
  const handleSubmit = (values) => {
    console.log("Feedback submitted:", values);
    alert("Thank you for your feedback!");
  };

  return (
    <Box minH="100vh" bg="#DAD7CD">
      <Header />

      <Box display="flex" flexDirection="row">
        <Sidebar />
        <Box flex="1" p={4}>
          {/* Feedback Summary Graph */}
          <Box bg="#344E41" color="white" p={4} borderRadius="md" mb={6} boxShadow="lg">
            <Heading size="md" mb={4} textAlign="center">
              Feedback Summary
            </Heading>
            <PieChart width={300} height={300}>
              <Pie
                data={feedbackData}
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
                label
              >
                {feedbackData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </Box>

          {/* Feedback Form */}
          <Heading size="lg" mb={6} color="#344E41">
            Submit Your Feedback
          </Heading>
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
                  style={{
                    width: "100%",
                    padding: "10px",
                    marginBottom: "10px",
                    borderRadius: "5px",
                    border: "1px solid #ccc",
                  }}
                  placeholder="Enter your username"
                />
                <ErrorMessage
                  name="username"
                  component="div"
                  style={{ color: "red", marginBottom: "10px" }}
                />

                {/* Feedback Field */}
                <Field
                  as="textarea"
                  id="feedback"
                  name="feedback"
                  style={{
                    width: "100%",
                    padding: "10px",
                    marginBottom: "10px",
                    borderRadius: "5px",
                    border: "1px solid #ccc",
                    minHeight: "100px",
                  }}
                  placeholder="Write your feedback here..."
                />
                <ErrorMessage
                  name="feedback"
                  component="div"
                  style={{ color: "red", marginBottom: "10px" }}
                />

                {/* Submit Button */}
                <HStack justify="center" spacing={6} mt={4} mb={4}>
                  <Button
                    colorScheme="green"
                    variant="solid"
                    size="lg"
                    borderRadius="20px"
                    onClick={submitForm} // Trigger form validation and submission
                  >
                    Submit Feedback
                  </Button>
                </HStack>
              </Form>
            )}
          </Formik>
        </Box>
      </Box>

      <Footer />
    </Box>
  );
};

export default FeedbackPage;