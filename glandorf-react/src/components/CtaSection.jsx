import { Link } from "react-router-dom";

export default function CtaSection({
  eyebrow = "Beratung",
  title,
  text,
  buttonText = "Kontakt aufnehmen",
  to = "/#kontakt",
}) {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-7xl rounded-[2rem] bg-[#1f2a24] p-8 text-white shadow-2xl md:p-12">
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#d9b46f]">
          {eyebrow}
        </p>

        <h2 className="mt-4 max-w-3xl text-3xl font-black tracking-tight md:text-5xl">
          {title}
        </h2>

        {text && <p className="mt-5 max-w-2xl text-white/75">{text}</p>}

        <Link
          to={to}
          className="mt-8 inline-block rounded-full bg-[#d9b46f] px-6 py-3 font-bold text-[#1f2a24] transition hover:bg-[#e7c985]"
        >
          {buttonText}
        </Link>
      </div>
    </section>
  );
}