import { useContext, useRef, useState } from "react";
import { ServerContext } from "../App";
import { Navigate } from "react-router-dom";
import md5 from 'md5-ts';
import NavBar from "../components/navBar";
import "../Auth.css";

const RegistrationPage = () => {
  const server = useContext(ServerContext);
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const handleRegistration = async () => {
    if (loginRef.current && passwordRef.current) {
      const login = loginRef.current.value;
      const hash = md5(login + passwordRef.current.value)
      const response = await server.register(
        login,
        hash
        );
        if (response) {
          setRegistrationSuccess(true);
        }

    }
  };

  return (
    <>
      <NavBar/>
      <div className="title">
          КИБОРГИ <br /> ТЕПЕРЬ В 2D
      </div>
      <div className="content">
        <h1>Регистрация</h1>
        <div className="input-form">
          <input
            type="text"
            id="login"
            name="login"
            className="input"
            placeholder="Логин"
            ref={loginRef}
          />
          <input
            type="password"
            id="password"
            name="password"
            className="input"
            placeholder="Пароль"
            ref={passwordRef}
          />
          <button  onClick={() => handleRegistration()}>
            <h1>Зарегистрироваться</h1>
          </button>
        </div>
        {registrationSuccess ? <Navigate to="/login" replace={true} /> : null}
      </div>
    </>
  );
};

export default RegistrationPage;
