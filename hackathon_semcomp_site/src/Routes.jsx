import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home.jsx'
import Questionary from "./pages/Questionary.jsx"
import About from "./pages/About.jsx";
import Qrcode from "./pages/QrCode.jsx";

const RoutesPage = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/questionary" element={<Questionary />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/qrcode" element={<Qrcode />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesPage