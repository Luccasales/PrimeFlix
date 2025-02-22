import { BrowserRouter, Routes, Route } from "react-router-dom"; // Corrigida a importação
import "./App.css";

// pages
import Navbar from "../src/components/navbar";
import Home from "./pages/Home/Home";
import CreateVideo from "./pages/NewVideo/CreateVideo";
import About from "./pages/About/About";
import Player from "./pages/Player/Player";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new-video" element={<CreateVideo />} />
            <Route path="/about" element={<About />} />
            <Route path="/player/:id" element={<Player />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
