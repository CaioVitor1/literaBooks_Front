import { BrowserRouter, Routes, Route } from "react-router-dom";
//import { useState } from "react";
//import UserContext from "./context/UserContext";

import InitialPage from "./pages/InitialPage";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Preferences from "./pages/Preferences"
import ReadingGoal from "./pages/readingGoal";
import Timeline from "./pages/Timeline";
function App() {
      /*const [user, setUser] = useState({
        token: ""  
    })*/
      
    
    return (
      <BrowserRouter>
        
          <Routes>
              <Route path="/" element={<InitialPage />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/preferences" element={<Preferences />} />
              <Route path="/readingoal" element={<ReadingGoal />} />
              <Route path="/timeline" element={<Timeline />} />
          </Routes>
       
      </BrowserRouter>
    );
  }
  
  export default App;