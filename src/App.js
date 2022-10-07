import { BrowserRouter, Routes, Route } from "react-router-dom";
//import { useState } from "react";
//import UserContext from "./context/UserContext";

import InitialPage from "./pages/InitialPage";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import FavoriteGenre from "./pages/FavoriteGenre"
import UsersPreferences from "./pages/UsersPreferences";
import ReadingGoal from "./pages/readingGoal";
import Timeline from "./pages/Timeline";
import DescriptionBook from "./pages/DescriptionBook";
import ProfileUser from "./pages/ProfileUser";
import NewReading from "./pages/NewReading";
import Community from "./pages/Community";
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
              <Route path="/favoriteGenre" element={<FavoriteGenre />} />
              <Route path="/userspreferences" element={<UsersPreferences />} />
              <Route path="/readingoal" element={<ReadingGoal />} />
              <Route path="/timeline" element={<Timeline />} />
              <Route path="/bookdescription" element={<DescriptionBook />} />
              <Route path="/profile" element={<ProfileUser />} />
              <Route path="/newreading" element={<NewReading />} />
              <Route path="/community" element={<Community />} />
          </Routes>
       
      </BrowserRouter>
    );
  }
  
  export default App;