import React from "react";

const CreateUser = () => {
  return (
    <div style={styles.body}>
      <div style={styles.container}>
        {/* Input Fields */}
        <label htmlFor="username" style={styles.label}>
          Create Username
        </label>
        <input
          type="text"
          id="username"
          style={styles.inputField}
          placeholder="Enter your username"
        />

        <label htmlFor="password" style={styles.label}>
          Create Password
        </label>
        <input
          type="password"
          id="password"
          style={styles.inputField}
          placeholder="Enter your password"
        />

        <label htmlFor="confirm-password" style={styles.label}>
          Retype Password
        </label>
        <input
          type="password"
          id="confirm-password"
          style={styles.inputField}
          placeholder="Retype your password"
        />

        {/* Button Container */}
        <div style={styles.buttonContainer}>
          <button style={styles.createUserButton}>Create User</button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  body: {
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#344E41", // Dark green-gray background
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
  container: {
    backgroundColor: "#DAD7CD", // Light beige container
    borderRadius: "20px", // Rounded corners
    overflow: "hidden",
    width: "500px", // Container width
    padding: "40px", // Padding inside the container
    boxShadow: "0 6px 10px rgba(0, 0, 0, 0.1)", // Shadow for depth
  },
  inputField: {
    width: "100%",
    padding: "15px", // Padding inside the input field
    marginBottom: "20px", // Spacing between inputs
    border: "2px solid #ccc", // Border for inputs
    borderRadius: "10px", // Rounded corners for inputs
    fontSize: "16px", // Font size for inputs
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "flex-end", // Align button to the right
  },
  createUserButton: {
    backgroundColor: "#A3B18A", // Soft green
    color: "white",
    border: "none",
    padding: "10px 20px", // Button padding
    borderRadius: "20px", // Rounded corners for button
    cursor: "pointer",
    fontSize: "16px", // Font size for button text
  },
  createUserButtonHover: {
    backgroundColor: "#344E41", // Dark green-gray on hover
  },
  label: {
    display: "block",
    marginBottom: "8px",
    fontSize: "16px",
    color: "#344E41",
  },
};

export default CreateUser;