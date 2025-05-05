// Mock user data for testing without a database
const MOCK_USERS = [
  { username: 'student', password: 'password', role: 'student', name: 'John Student' },
  { username: 'teacher', password: 'password', role: 'teacher', name: 'Jane Teacher' },
  { username: 'admin', password: 'admin123', role: 'admin', name: 'Admin User' }
];

// Simple mock login function
export const loginUser = async (credentials) => {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // Find user in mock data
  const user = MOCK_USERS.find(
    u => u.username === credentials.username && u.password === credentials.password
  );
  
  if (!user) {
    throw new Error('Invalid username or password');
  }
  
  // Create a simple token
  const token = btoa(JSON.stringify({
    username: user.username,
    role: user.role,
    name: user.name,
    exp: Date.now() + 3600000 // Token expires in 1 hour
  }));
  
  // Return user data with token
  return {
    token,
    user: {
      username: user.username,
      role: user.role,
      name: user.name
    }
  };
};

// Simple mock signup function
export const signupUser = async (userData) => {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // Check if username already exists
  if (MOCK_USERS.some(u => u.username === userData.username)) {
    throw new Error('Username already exists');
  }
  
  // Create new mock user
  const newUser = {
    username: userData.username,
    password: userData.password,
    role: 'student',
    name: userData.username // Use username as name for simplicity
  };
  
  // Add to mock users (this won't persist on page refresh)
  MOCK_USERS.push(newUser);
  
  // Create a simple token
  const token = btoa(JSON.stringify({
    username: newUser.username,
    role: newUser.role,
    name: newUser.name,
    exp: Date.now() + 3600000 // Token expires in 1 hour
  }));
  
  // Return user data with token
  return {
    token,
    user: {
      username: newUser.username,
      role: newUser.role,
      name: newUser.name
    }
  };
};

// Helper function to check if user is logged in
export const isAuthenticated = () => {
  const token = localStorage.getItem('token');
  if (!token) return false;
  
  try {
    // Decode token
    const decoded = JSON.parse(atob(token));
    // Check if token is expired
    return decoded.exp > Date.now();
  } catch (e) {
    return false;
  }
};

// Helper function to get current user info
export const getCurrentUser = () => {
  const token = localStorage.getItem('token');
  if (!token) return null;
  
  try {
    // Decode token
    return JSON.parse(atob(token));
  } catch (e) {
    return null;
  }
};

// Mock logout function
export const logoutUser = () => {
  localStorage.removeItem('token');
  return true;
};
