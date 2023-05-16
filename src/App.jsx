import { BrowserRouter, Routes, Route } from "react-router-dom";

import StartExperience from "./views/StartExperience/StartExperience";

import "./App.css";
import AppProvider from "./context/AppContext";
import Login from "./views/Login/Login";
import Level1 from "./views/Level1/Level1";
import Level2 from "./views/Level2/Level2";
import Level3 from "./views/Level3/Level3";
import Level4 from "./views/Level4/Level4";
import Level5 from "./views/Level5/Level5";
import FinalStatistics from "./views/FinalStatistics/FinalStatistics";
import PrivateRoutes from "./components/PrivateRoutes/PrivateRoutes";
import Video from "./views/Video/Video";

function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <Routes>
          <Route path="/" element={<StartExperience />} />
          <Route path="/login" element={<Login />} />
          <Route path="/*" element={<PrivateRoutes>
            <Routes>
              <Route path="/video" element={< Video />} />
              {/* Clase */}
              <Route path="/nivel/1" element={< Level1 />} />
              {/* Objeto */}
              <Route path="/nivel/2" element={< Level3 />} />
              {/* Atributo */}
              <Route path="/nivel/3" element={< Level2 />} />
              {/* Método */}
              <Route path="/nivel/4" element={< Level4 />} />
              {/* Asociación */}
              <Route path="/nivel/5" element={< Level5 />} />
              <Route path="/estadisticas" element={< FinalStatistics />} />
            </Routes>
          </PrivateRoutes>} />
        </Routes>
      </AppProvider>
    </BrowserRouter >
  );
}

export default App;
