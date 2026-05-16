import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Wohnklima from "./pages/Wohnklima";
import Gebaeudeabdichtung from "./pages/Gebaeudeabdichtung";

export default function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wohnklima-schimmelsanierung" element={<Wohnklima />} />
        <Route path="/gebaeudeabdichtung" element={<Gebaeudeabdichtung />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}