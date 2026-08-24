import { useAuth } from "../../context/AuthContext";
import "./home.css"

const Home = () => {
  const { user, isLoggedIn, logout } = useAuth();

  if (!isLoggedIn) {
    return (
      <>
        <div className="popup-back-overlay" />
      </>
    );
  }

  return (
    <>
      <div className="main-container">
        
      </div>
    </>
  );
};

export default Home;
