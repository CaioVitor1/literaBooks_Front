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
import OthersUsers from "./pages/OthersUsers";

import { useState } from "react";
import UserContext from "./context/UserContext";

function App() {
      const [token, setToken] = useState("");
      const [idUser, setIdUser] = useState("");
      const contextValue = { token, setToken, idUser, setIdUser};
     
    return (
      <BrowserRouter>
        <UserContext.Provider value={contextValue}>
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
              <Route path="/user/:idUser" element={<OthersUsers />} /> 
          </Routes>
        </UserContext.Provider>
      </BrowserRouter>
    );
  }
  
  export default App;