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
    <>
      
    </>
  );
};

export default Home;
