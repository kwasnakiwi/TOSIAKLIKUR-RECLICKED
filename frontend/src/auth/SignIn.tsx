import { useState } from "react";
import { useNavigate } from "react-router";
import { BASE_URL } from "../utils/endpoints";
import { useAuth } from "../context/AuthContext";

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
    <form onSubmit={handleSubmit}>
      <span>Username:</span>

      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <span>Password:</span>

      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button type="submit">Zaloguj się</button>
    </form>
  );
};

export default SignIn;