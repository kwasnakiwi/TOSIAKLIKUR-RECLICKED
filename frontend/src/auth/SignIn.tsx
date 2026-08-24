import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { BASE_URL } from "../utils/endpoints";
import { useAuth } from "../context/AuthContext";
import { images } from "../constants/images";
import "./sign-in.css";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await fetch(`${BASE_URL}/api/player/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          username,
          password,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        console.log(data.error);
        return;
      }

      login(data);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="main-container">
        <form className="form-login" onSubmit={handleSubmit}>
          <div className="form-top">
            <img
              className="form-logo"
              src={images.appLogo}
              alt="Logo Aplikacji"
            />
            <h1 className="form-top-title">Logowanie</h1>
          </div>
          <div className="form-input-box">
            <label htmlFor="username" className="form-input-label">
              Nazwa użytkownika
            </label>
            <input
              type="text"
              name="username"
              className="form-input"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Nazwa..."
            />
          </div>
          <div className="form-input-box">
            <label htmlFor="password" className="form-input-label">
              Hasło
            </label>
            <input
              type="password"
              name="password"
              className="form-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Hasło..."
            />
          </div>
          <div className="form-button-box">
            <button type="submit" className="form-button">
              Zaloguj się
            </button>
          </div>
          <Link className="form-change-auth" to="/sign-up">
            Nie masz konta? Załóz je
          </Link>
        </form>
      </div>
    </>
  );
};

export default SignIn;
