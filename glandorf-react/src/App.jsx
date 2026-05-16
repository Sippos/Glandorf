import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
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
      </Routes>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-slate-600 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Clemens Glandorf</p>
          <div className="flex gap-5">
            <a className="hover:text-blue-700" href="/impressum">
              Impressum
            </a>
            <a className="hover:text-blue-700" href="/datenschutz">
              Datenschutz
            </a>
          </div>
        </div>
      </footer>
    </BrowserRouter>
  );
}