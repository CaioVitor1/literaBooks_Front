import { BrowserRouter, Routes, Route } from "react-router-dom";
//import { useState } from "react";
//import UserContext from "./context/UserContext";

import InitialPage from "./pages/InitialPage";
import SignUp from "./pages/SignUp";
import Signin from "./pages/Signin";
import Preferences from "./pages/Preferences";
function App() {
      /*const [user, setUser] = useState({
        token: ""  
    })*/
      
    
    return (
      <BrowserRouter>
        
          <Routes>
              <Route path="/" element={<InitialPage />} />
              <Route path="/signin" element={<Signin />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/preferences" element={<Preferences />} />
          </Routes>
       
      </BrowserRouter>
    );
  }
  
  export default App;