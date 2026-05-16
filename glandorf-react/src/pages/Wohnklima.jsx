import { Link } from "react-router-dom";

export default function Wohnklima() {
  return (
    <main id="main">
      <section className="relative overflow-hidden bg-[#1f2a24] px-6 py-32 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(217,180,111,0.22),_transparent_34rem)]" />

        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#d9b46f]">
              Wohnklima · Innendämmung · Lehmputz
            </p>

            <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-tight md:text-6xl">
              Gesundes Raumklima und Schutz vor Feuchtigkeit.
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/75">
              Die richtige Kombination aus Material, Technik und Analyse kann
              Feuchtigkeitsprobleme reduzieren, Schimmel vorbeugen und den
              Wohnkomfort spürbar verbessern.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/#kontakt"
                className="rounded-full bg-[#d9b46f] px-6 py-3 text-center font-bold text-[#1f2a24] shadow-lg transition hover:bg-[#e7c985]"
              >
                Kontakt aufnehmen
              </Link>

              <Link
                to="/#leistungen"
                className="rounded-full border border-white/25 px-6 py-3 text-center font-bold text-white transition hover:bg-white/10"
              >
                Zurück zu Leistungen
              </Link>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] bg-[#142018] shadow-2xl">
            <img
              src="/assets/2024/02/Wasser_Scheibe-scaled-1.jpg"
              alt="Kondensation am Fenster"
              className="h-[440px] w-full object-cover"
            />

            <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-white/85 p-5 text-slate-900 backdrop-blur">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#8a5a32]">
                Analyse vor Maßnahme
              </p>
              <p className="mt-2 text-lg font-black">
                Feuchtigkeit, kalte Oberflächen und Materialwahl richtig einordnen.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f8f6f1] px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
          {[
            {
              title: "Innendämmung",
              icon: "◌",
              image: "/assets/2024/02/IMG_0664.jpeg",
              text: "Innendämmung reduziert Wärmeverluste und hilft dabei, kalte Wandoberflächen zu vermeiden.",
            },
            {
              title: "Lehmputz",
              icon: "▧",
              image: "/assets/2024/02/Wasser_Scheibe-scaled-1.jpg",
              text: "Lehmputz kann Feuchtigkeit aus der Raumluft aufnehmen und bei Bedarf wieder abgeben.",
            },
          ].map((item) => (
            <article key={item.title} className="overflow-hidden rounded-[2rem] bg-white shadow-xl transition hover:-translate-y-2">
              <img src={item.image} alt={item.title} className="h-72 w-full object-cover" />
              <div className="p-8">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#d9b46f] text-2xl text-[#262018]">
                  {item.icon}
                </div>
                <h2 className="mt-3 text-3xl font-black text-[#1f2933]">
                  {item.title}
                </h2>
                <p className="mt-4 leading-7 text-slate-600">{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}