import Paths from "./routes/Paths";
import React, { useState } from 'react'
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import { AuthContext } from "./contexts/AuthContext";

const App = () => {

  const [logged,setLogged] = useState(false);

  return ( 
    <AuthContext contextAuth={{logged,setLogged}}>
      <Paths/>
    </AuthContext>
  );
}
 
export default App;