import { Link } from "react-router-dom";

export default function ServiceCard({ icon, title, text, link, className = "" }) {
  return (
    <article
      className={`rounded-[2rem] p-8 shadow-xl transition hover:-translate-y-2 ${className}`}
    >
      <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15">
        <span className="text-2xl">{icon}</span>
      </div>

      <h3 className="text-2xl font-black">{title}</h3>
      <p className="mt-4 opacity-85">{text}</p>

      <Link to={link} className="mt-8 inline-block font-bold">
        Mehr erfahren →
      </Link>
    </article>
  );
}