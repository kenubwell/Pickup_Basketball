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
import LocalGames from "./pages/LocalGames/LocalGames";
import About from "./pages/About/About";
import LocalNews from "./pages/LocalNews/LocalNews";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/default" element={<SplashPage />} />
        <Route path="/courts" element={<PrivateRoute><CourtsPage /></PrivateRoute>} />
        <Route path="/videos" element={<PrivateRoute><VideoPage /></PrivateRoute>} />
        <Route path="/courts/waterloo" element={<PrivateRoute><WaterlooPage /></PrivateRoute>} />
        <Route path="/courts/liongate" element={<PrivateRoute><LionGatePage /></PrivateRoute>} />
        <Route path="/courts/cedarpark" element={<PrivateRoute><CedarParkPage /></PrivateRoute>} />
        <Route path="/courts/meadow" element={<PrivateRoute><MeadowbrookPage /></PrivateRoute>} />
        <Route path="/localgames" element={<PrivateRoute><LocalGames /></PrivateRoute>} />
        <Route path="/about" element={<PrivateRoute><About /></PrivateRoute>} />
        <Route path="/localnews" element={<PrivateRoute><LocalNews /></PrivateRoute>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
