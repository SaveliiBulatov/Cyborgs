import React, { useEffect } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { HOST } from "./config";
import {Store} from "./modules/Store/Store";
import Server from "./modules/Server/Server";
import LoginPage from "./routes/LoginPage";
import MainPage from "./routes/MainPage";
import RegistrationPage from "./routes/RegistrationPage";
import PrivateRoute from "./components/privateRoute";
import GamePage from "./routes/GamePage";
import PasswordRecovery from "./routes/PaswordRecovery";
import StartPage from "./routes/StartPage";

export const StoreContext = React.createContext<Store>(null!);
export const ServerContext = React.createContext<Server>(null!);

const App: React.FC = () => {
    const store = new Store();
    const server = new Server(HOST, store);
    
    const handleAutoLogin = async () => {
        if(localStorage.getItem('token')) {
            const isAutoLogin = await server.autoLogin()
            if (isAutoLogin) {
                store.setAuth()
            }
        }
    }

    useEffect(() => {
        if (localStorage.getItem('token')) {
            handleAutoLogin()
        }
    }, [])

    return (
        <HashRouter>
            <StoreContext.Provider value={store}>
                <ServerContext.Provider value={server}>
                    <Routes>
                        {localStorage.getItem('token') ? (
                            <Route path="" element={<MainPage/>}/>
                        ) : (
                            <Route path="" element={<StartPage />} />
                        )}
                        <Route path="/PaswordRecovery" element={<PasswordRecovery/>}/>
                        <Route path="/StartPage" element={<StartPage/>}
                        />
                        <Route path="/login" element={<LoginPage/>}/>
                        <Route path="/registration" element={<RegistrationPage/>}
                        />
                        <Route element={<PrivateRoute/>}>
                            <Route path="/main" element={<MainPage/>}/>
                            <Route path="/game" element={<GamePage/>}/>
                        </Route>
                    </Routes>
                </ServerContext.Provider>
            </StoreContext.Provider>
        </HashRouter>
    );
};

export default App;
