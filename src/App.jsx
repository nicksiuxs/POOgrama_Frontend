import { BrowserRouter, Routes, Route } from "react-router-dom";

import StartExperience from "./views/StartExperience/StartExperience";

import "./App.css";
import AppProvider from "./context/AppContext";
import Login from "./views/Login/Login";
import Level1 from "./views/Level1/Level1";
import Level2 from "./views/Level2/Level2";

function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <Routes>
          <Route path="/" element={<StartExperience />} />
          <Route path="/login" element={<Login />}></Route>
          <Route path="/nivel/1" element={< Level1 />} />
          <Route path="/nivel/2" element={< Level2 />} />
        </Routes>
      </AppProvider>
    </BrowserRouter >
  );
}

export default App;
