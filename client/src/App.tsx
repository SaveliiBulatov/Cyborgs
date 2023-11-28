import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {HOST} from "./config";
import Server from "./modules/Server/Server";
import LoginPage from "./routes/LoginPage";
import {Store} from "./modules/Store/Store";
import MainPage from "./routes/MainPage";
import RegistrationPage from "./routes/RegistrationPage";
import PrivateRoute from "./components/privateRoute";
import GamePage from "./routes/GamePage";
import PasswordRecovery from "./routes/PaswordRecovery";
import StartPage from "./routes/StartPage";

export const StoreContext = React.createContext<Store>(null!);
export const ServerContext = React.createContext<Server>(null!);

if (window.performance) {
    console.log("Perfomance not supported");
}
if (performance.navigation.type == 1) {
    console.log( "Страница перезагружена" );
} else {
    console.log( "Страница не перезагружена");
}

const App: React.FC = () => {
    const store = new Store();
    const server = new Server(HOST, store);
    return (
        <BrowserRouter>
            <StoreContext.Provider value={store}>
                <ServerContext.Provider value={server}>
                    <Routes>
                        {store.isAuth() ? (
                            <Route path="" element={<MainPage/>}/>
                        ) : (
                            <Route path="" element={<StartPage />} /> //Откомментировать когда будем показывать трусову
                            //<Route path="" element={<LoginPage/>}/>
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
        </BrowserRouter>
    );
};

export default App;
