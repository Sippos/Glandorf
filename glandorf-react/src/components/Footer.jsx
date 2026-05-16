import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-slate-600 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} Clemens Glandorf</p>

        <div className="flex gap-5">
          <Link className="hover:text-blue-700" to="/impressum">
            Impressum
          </Link>
          <Link className="hover:text-blue-700" to="/datenschutz">
            Datenschutz
          </Link>
        </div>
      </div>
    </footer>
  );
}