import Paths from "./routes/Paths";
import React, { useState } from 'react'
import "primeicons/primeicons.css";
import { AuthContext } from "./contexts/AuthContext";
import './tailwind.css';

const App = () => {

  const [logged,setLogged] = useState(false);

  return ( 
    <AuthContext contextAuth={{logged,setLogged}}>
      <Paths/>
    </AuthContext>
  );
}
 
export default App;