import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const searchRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-white/80 shadow-lg backdrop-blur-xl" : ""
      }`}
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between border-b px-6 transition-all duration-300 ${
          scrolled ? "border-black/10 py-3" : "border-white/15 py-6"
        }`}
      >
        <Link
          to="/"
          className={`bg-white/85 backdrop-blur transition-all duration-300 ${
            scrolled ? "rounded-xl px-3 py-2" : "rounded-2xl px-4 py-3"
          }`}
        >
          <img
            src="/assets/2024/02/Logo_Neu-Kopie-e1693313721787.gif"
            alt="Clemens Glandorf"
            className={`w-auto transition-all duration-300 ${
              scrolled ? "h-8" : "h-14"
            }`}
          />
        </Link>

        <nav
          className={`hidden items-center gap-8 text-sm font-bold uppercase tracking-wide transition-colors duration-300 md:flex ${
            scrolled ? "text-[#2d261f]" : "text-white"
          }`}
        >
          <div className="group relative">
            <Link className="hover:text-[#d9b46f]" to="/#leistungen">
              Leistungen
            </Link>

            <div className="invisible absolute right-0 top-full mt-5 w-80 translate-y-2 rounded-3xl bg-white p-3 text-slate-900 opacity-0 shadow-2xl transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              <MenuItem to="/gebaeudeabdichtung" icon="⬒" label="Gebäudeabdichtung" color="bg-[#b56b3f]" />
              <MenuItem to="/wohnklima-schimmelsanierung" icon="◌" label="Wohnklima & Schimmel" color="bg-[#d9b46f]" dark />
              <MenuItem to="/betonsanierung" icon="▧" label="Betonsanierung" color="bg-[#7f8b68]" />
              <MenuItem to="/bestandsschutz" icon="▥" label="Denkmalpflege" color="bg-[#3f4a3c]" />
            </div>
          </div>

          <Link className="hover:text-[#d9b46f]" to="/#unternehmen">
            Über uns
          </Link>

          <Link className="hover:text-[#d9b46f]" to="/#kontakt">
            Kontakt
          </Link>

          <form
            className={`flex w-11 items-center overflow-hidden rounded-full border transition-all duration-300 focus-within:w-64 focus-within:bg-white ${
              scrolled ? "border-black/20 bg-white/60" : "border-white/40 bg-white/10"
            }`}
          >
            <input
              ref={searchRef}
              type="search"
              placeholder="Suche"
              className="w-full bg-transparent px-0 py-2 text-sm text-slate-900 placeholder:text-slate-500 opacity-0 outline-none transition-all duration-300 focus:px-4 focus:opacity-100"
            />

            <button
              type="button"
              aria-label="Suche"
              onClick={() => searchRef.current?.focus()}
              className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full transition-colors duration-300 ${
                scrolled ? "text-[#2d261f]" : "text-white"
              }`}
            >
              ⌕
            </button>
          </form>
        </nav>
      </div>
    </header>
  );
}

function MenuItem({ to, icon, label, color, dark = false }) {
  return (
    <Link to={to} className="flex items-center gap-3 rounded-2xl p-3 hover:bg-[#f3eee6]">
      <span
        className={`flex h-10 w-10 items-center justify-center rounded-xl ${color} ${
          dark ? "text-[#262018]" : "text-white"
        }`}
      >
        {icon}
      </span>
      <span>{label}</span>
    </Link>
  );
}