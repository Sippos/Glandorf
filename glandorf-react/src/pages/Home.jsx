import { Link } from "react-router-dom";

const services = [
  {
    icon: "⬒",
    title: "Gebäudeabdichtung",
    text: "Abdichtung von Keller, Sockel, Mauerwerk und Gebäudeteilen gegen Feuchtigkeit.",
    link: "/gebaeudeabdichtung",
    className: "bg-[#b56b3f] text-white",
  },
  {
    icon: "◌",
    title: "Wohnklima u. Schimmelsanierung",
    text: "Analyse und Sanierung bei Feuchtigkeit, Schimmelrisiko und belastetem Raumklima.",
    link: "/wohnklima-schimmelsanierung",
    className: "bg-[#d9b46f] text-[#262018]",
  },
  {
    icon: "▧",
    title: "Betonsanierung",
    text: "Instandsetzung und Schutz von Betonflächen, Bauteilen und geschädigter Substanz.",
    link: "#",
    className: "bg-[#7f8b68] text-white",
  },
];

export default function Home() {
  return (
    <main id="main">
      <section className="relative overflow-hidden bg-[#1f2a24] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(217,180,111,0.22),_transparent_34rem)]" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-32 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-[#d9b46f]">
              Kellerabdichtung · Gebäudeabdichtung · Sanierung
            </p>

            <h1 className="max-w-3xl text-4xl font-black tracking-tight sm:text-5xl lg:text-5xl">
              Feuchte Wände und nasse Keller? Ihr Experte in Osnabrück.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">
              Clemens Glandorf unterstützt bei Diagnose, Abdichtung und
              Sanierung von Gebäuden — vom Neubau bis zum Altbau.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#kontakt"
                className="rounded-full bg-[#d9b46f] px-6 py-3 text-center font-bold text-[#1f2a24] shadow-lg transition hover:bg-[#e7c985]"
              >
                Kontakt aufnehmen
              </a>

              <a
                href="#leistungen"
                className="rounded-full border border-white/25 px-6 py-3 text-center font-bold text-white transition hover:bg-white/10"
              >
                Leistungen ansehen
              </a>
            </div>

            <p className="mt-5 text-sm text-slate-400">
              Telefonisch erreichbar unter{" "}
              <a className="font-bold text-white hover:text-blue-200" href="tel:054151241">
                0541 / 51241
              </a>
            </p>
          </div>

          <div className="relative min-h-[420px] overflow-hidden rounded-[2rem] bg-[#142018] shadow-2xl">
            <img
              src="/assets/2024/02/IMG_0664.jpeg"
              alt="Sanierung und Gebäudeabdichtung"
              className="h-full w-full object-cover"
            />

            <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-white/85 p-5 text-slate-900 backdrop-blur">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#8a5a32]">
                Vor Ort in Osnabrück
              </p>
              <p className="mt-2 text-lg font-black">
                Abdichtung, Sanierung und Schutz für bestehende Gebäude.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="leistungen" className="bg-[#f3eee6] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#8a5a32]">
            Leistungen
          </p>

          <h2 className="mt-4 max-w-4xl text-4xl font-black tracking-tight text-[#1f2933] md:text-6xl">
            Schutz, Sanierung und Werterhalt für Gebäude.
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className={`rounded-[2rem] p-8 shadow-xl transition hover:-translate-y-2 ${service.className}`}
              >
                <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15">
                  <span className="text-2xl">{service.icon}</span>
                </div>

                <h3 className="text-2xl font-black">{service.title}</h3>
                <p className="mt-4 opacity-85">{service.text}</p>

                <Link to={service.link} className="mt-8 inline-block font-bold">
                  Mehr erfahren →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="kontakt" className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-10 rounded-3xl bg-slate-900 p-8 text-white shadow-2xl lg:grid-cols-[0.9fr_1.1fr] lg:p-12">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-300">
              Kontakt
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              Termin vereinbaren
            </h2>
            <p className="mt-5 text-slate-300">
              Schreiben Sie eine Nachricht oder rufen Sie direkt an.
            </p>

            <div className="mt-8 space-y-3 text-slate-200">
              <p>
                <strong>Telefon:</strong>{" "}
                <a className="hover:text-blue-200" href="tel:054151241">
                  0541 / 51241
                </a>
              </p>
              <p>
                <strong>E-Mail:</strong>{" "}
                <a className="hover:text-blue-200" href="mailto:info@clemens-glandorf.de">
                  info@clemens-glandorf.de
                </a>
              </p>
            </div>
          </div>

          <form className="grid gap-4" action="https://formspree.io/f/DEIN_FORM_ID" method="POST">
            <input className="rounded-xl px-4 py-3 text-slate-900" name="name" placeholder="Name" required />
            <input className="rounded-xl px-4 py-3 text-slate-900" name="email" type="email" placeholder="E-Mail" required />
            <textarea className="min-h-36 rounded-xl px-4 py-3 text-slate-900" name="message" placeholder="Nachricht" required />
            <button className="rounded-full bg-blue-600 px-6 py-3 font-bold text-white hover:bg-blue-500">
              Nachricht senden
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}