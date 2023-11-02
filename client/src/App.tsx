import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HOST } from "./config";
import Server from "./modules/Server/Server";
import NavBar from "./components/navBar";
import LoginPage from "./routes/LoginPage";
import MainPage from "./routes/MainPage";
import RegistrationPage from "./routes/RegistrationPage";
import PrivateRoute from "./components/privateRoute";

export const ServerContext = React.createContext<Server>(new Server(HOST));

const App: React.FC = () => {
  const server = new Server(HOST);
  return (
    <BrowserRouter>
      <ServerContext.Provider value={server}>
        <NavBar />
        <Routes>

          <Route path="/login" element={<LoginPage />} />
          <Route path="/registration" element={<RegistrationPage />} />

          <Route element={<PrivateRoute/>}>
                <Route path="/main" element={<MainPage />}/>
          </Route>
        </Routes>
      </ServerContext.Provider>
    </BrowserRouter>
  );
};

export default App;