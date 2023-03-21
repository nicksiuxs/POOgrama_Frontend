import { BrowserRouter, Routes, Route } from "react-router-dom";

import StartExperience from "./views/StartExperience/StartExperience";
import LoginStudent from "./views/LoginStudent/LoginStudent";
import LoginTeacher from "./views/LoginTeacher/LoginTeacher";

import "./App.css";
import AppProvider from "./context/AppContext";
import Login from "./views/Login/Login";
import Level1 from "./views/Level1/Level1";

function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <Routes>
          <Route path="/" element={<StartExperience />} />
          <Route path="/login" element={<Login />}></Route>
          <Route path="/login/profesor" element={<LoginTeacher />} />
          <Route path="/login/estudiante" element={<LoginStudent />} />
          <Route path="/nivel/1" element={< Level1 />} />
        </Routes>
      </AppProvider>
    </BrowserRouter >
  );
}

export default App;
