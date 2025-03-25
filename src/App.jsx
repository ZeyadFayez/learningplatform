
import { Box } from "@chakra-ui/react"
import { Route, Routes } from "react-router-dom"
import CreatePage from "./Pages/CreatePage"
import HomePage from "./Pages/HomePage"
import NavBar from "./components/NavBar"
function App() {


  return (
    
      <Box minH={"100vh"}>
        {<NavBar /> }
        <Routes>
          <Route path="/create" element={<CreatePage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Box>
  );
}

export default App
