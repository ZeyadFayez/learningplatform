import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, HStack } from "@chakra-ui/react";
import icon from './icons8-logo-50.png';

const HomePage = () => {
  const navigate = useNavigate(); // Hook for navigation

  const handleSignUp = () => {
    navigate('/dashboard'); // Navigate to the target page
  };

  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <div style={styles.leftSection}>
          <div style={styles.icon}>
            <img src={icon} alt="icon" style={styles.svg} />
          </div>
          <input type="text" id="username" style={styles.inputField} placeholder="Enter your username" />
          <input type="password" id="password" style={styles.inputField} placeholder="Enter your password" />
        </div>
        <div style={styles.rightSection}>
          <p style={styles.description}>
            description, <br />
            more details here, <br />
            etc.
          </p>
          <HStack wrap="wrap" gap="6" style={styles.signup}>
            <Button
              colorScheme="green"
              variant="outline"
              size="lg"
              borderRadius="20px"
              onClick={handleSignUp} // Add click handler
            >
              Sign up
            </Button>
          </HStack>
        </div>
      </div>
    </div>
  );
};

const styles = {
  body: {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#344E41',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },
  container: {
    backgroundColor: '#DAD7CD',
    borderRadius: '30px',
    overflow: 'hidden',
    display: 'flex',
    width: '800px',
    height: '400px',
    boxShadow: '0 6px 10px rgba(0, 0, 0, 0.1)',
  },
  leftSection: {
    backgroundColor: '#DAD7CD',
    width: '60%',
    padding: '40px',
  },
  rightSection: {
    backgroundColor: '#588157',
    color: 'white',
    width: '40%',
    padding: '40px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  icon: {
    width: '80px',
    height: '80px',
   
    borderRadius: '15px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '30px',
    marginLeft: '160px',
  },
  svg: {
    width: '50px',
    height: '50px',
  },
  inputField: {
    width: '100%',
    padding: '15px',
     marginTop: '20px',
    marginBottom: '35px',
    border: '2px solid #ccc',
    borderRadius: '15px',
    fontSize: '18px',
  },
  description: {
    fontSize: '20px',
    lineHeight: '1.6',
  },
  signup: {
    alignSelf: 'flex-end', // Align the button to the right
    marginTop: '-30px', // Adjust upward alignment to match the password
    
  },
};

export default HomePage;