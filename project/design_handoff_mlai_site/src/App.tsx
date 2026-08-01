import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Wdbx from "./pages/Wdbx";
import Abi from "./pages/Abi";
import Abbey from "./pages/Abbey";
import Research from "./pages/Research";
import Company from "./pages/Company";
import Platform from "./pages/Platform";
import Services from "./pages/Services";
import Architecture from "./pages/Architecture";
import Investors from "./pages/Investors";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/wdbx" element={<Wdbx />} />
      <Route path="/abi" element={<Abi />} />
      <Route path="/abbey" element={<Abbey />} />
      <Route path="/platform" element={<Platform />} />
      <Route path="/services" element={<Services />} />
      <Route path="/research" element={<Research />} />
      <Route path="/architecture" element={<Architecture />} />
      <Route path="/company" element={<Company />} />
      <Route path="/investors" element={<Investors />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
