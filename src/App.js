import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';

import AllRoutes from './Components/AllRoutes';
// import LargeWithLogoCentered from './Components/Footer';
import { useState } from 'react';
import { Box } from '@chakra-ui/react';
import Footer from './Components/Footer';

function App() {


  const [state, setstate] = useState(false)

  return (
    <Box className="App">
      
      <AllRoutes />
      
        <Footer />
    </Box>
  );
}

export default App;
