import { BrowserRouter as Router, Routes, Route } from "react-router";
import SignUp from "./auth/SignUp";
import Home from "./mainPage/home/Home";
import SignIn from "./auth/SignIn";
import GuestRoute from "./components/guest-route/GuestRoute";
import MainLayout from "./components/main-layout/MainLayout";
import Ranking from "./mainPage/ranking/Ranking";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/sign-in"
          element={
            <GuestRoute>
              <SignIn />
            </GuestRoute>
          }
        />
        <Route
          path="/sign-up"
          element={
            <GuestRoute>
              <SignUp />
            </GuestRoute>
          }
        />
        <Route element={<MainLayout />}>
          <Route index path="/" element={<Home />} />
          <Route index path="/ranking" element={<Ranking />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;