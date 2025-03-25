import React from 'react';

const HomePage = () => {
  console.log("HomePage component rendered");
  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <div style={styles.leftSection}>
          <div style={styles.icon}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style={styles.svg}>
              <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
            </svg>
          </div>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" style={styles.inputField} placeholder="Enter your username" />
          <label htmlFor="password">Password</label>
          <input type="password" id="password" style={styles.inputField} placeholder="Enter your password" />
        </div>
        <div style={styles.rightSection}>
          <p style={styles.description}>
            description, <br />
            more details here, <br />
            etc.
          </p>
          <button  style={styles.signupButton}>Sign up</button>
        </div>
      </div>
    </div>
  );
}

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
    backgroundColor: '#f5f5f5',
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
    border: '3px solid #ccc',
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
    marginBottom: '25px',
    border: '2px solid #ccc',
    borderRadius: '15px',
    fontSize: '18px',
  },
  description: {
    fontSize: '20px',
    lineHeight: '1.6',
  },
  signupButton: {
    backgroundColor: '#A3B18A',
    color: 'white',
    border: 'none',
    padding: '15px 30px',
    borderRadius: '20px',
    cursor: 'pointer',
    fontSize: '18px',
  },
  signupButtonHover: {
    backgroundColor: '#344E41',
  },
};

export default HomePage;