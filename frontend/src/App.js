// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import CourtsPage from "./pages/CourtsPage/CourtsPage";
import SplashPage from "./pages/SplashPage/SplashPage";
import VideoPage from "./pages/VideoPage/VideoPage";
import WaterlooPage from "./pages/WaterlooPage/WaterlooPage";
import LionGatePage from "./pages/LiongatePage/LionGatePage";
import CedarParkPage from "./pages/CedarparkPage/CedarParkPage";
import MeadowbrookPage from "./pages/MeadowbrookPage/MeadowbrookPage";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/default" element={<SplashPage />} />
        <Route path="/courts" element={<CourtsPage />} />
        <Route path="/videos" element={<VideoPage />} />
        <Route path="/courts/waterloo" element={<WaterlooPage />} />
        <Route path="/courts/liongate" element={<LionGatePage />} />
        <Route path="/courts/cedarpark" element={<CedarParkPage />} />
        <Route path="/courts/meadow" element={<MeadowbrookPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
