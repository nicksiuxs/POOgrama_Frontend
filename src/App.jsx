import { BrowserRouter, Routes, Route } from "react-router-dom";

import StartExperience from "./views/StartExperience/StartExperience";
import LoginStudent from "./views/LoginStudent/LoginStudent";
import LoginTeacher from "./views/LoginTeacher/LoginTeacher";

import "./App.css";
import AppProvider from "./context/AppContext";
import Login from "./views/Login/Login";

function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <Routes>
          <Route path="/" element={<StartExperience />} />
          <Route path="/login" element={<Login />}></Route>
          <Route path="/login/profesor" element={<LoginTeacher />} />
          <Route path="/login/estudiante" element={<LoginStudent />} />
        </Routes>
      </AppProvider>
    </BrowserRouter >
  );
}

export default App;
