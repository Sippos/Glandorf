import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Gebaeudeabdichtung from "./pages/Gebaeudeabdichtung";
import Wohnklima from "./pages/Wohnklima";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gebaeudeabdichtung" element={<Gebaeudeabdichtung />} />
        <Route path="/wohnklima-schimmelsanierung" element={<Wohnklima />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}