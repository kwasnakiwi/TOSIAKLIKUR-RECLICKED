import { useAuth } from "../../context/AuthContext";
import "./home.css"

const Home = () => {
  const { user, isLoggedIn, logout } = useAuth();

  if (!isLoggedIn) {
    return (
      <div>
        <h1>Nie jesteś zalogowany</h1>
      </div>
    );
  }

  return (
    <div>
      <h1>Witaj, {user?.username}!</h1>

      <p>ID: {user?.id}</p>
      <p>Clicki: {user?.clicks}</p>
      <p>Konto utworzone: {new Date(user!.created_at).toLocaleString()}</p>

      <button onClick={logout}>Wyloguj się</button>
    </div>
  );
};

export default Home;
