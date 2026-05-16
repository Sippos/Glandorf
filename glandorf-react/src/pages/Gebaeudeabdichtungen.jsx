import { Link } from "react-router-dom";

const cards = [
  {
    image: "/assets/2024/02/IMG_4032.png.webp",
    icon: "▥",
    label: "Altbau",
    title: "Altbauabdichtung",
    text: [
      "Altbauten besitzen oft besonderen Charakter. Im Laufe der Jahre können jedoch Risse, undichte Stellen und Feuchtigkeit in den Mauern entstehen.",
      "Horizontalsperren, Sperrputzsysteme oder Sanierputzsysteme können helfen, Feuchtigkeit zu reduzieren und die Bausubstanz zu schützen.",
    ],
  },
  {
    image: "/assets/2024/02/IMG_0962-1.png.webp",
    icon: "⬒",
    label: "Neubau",
    title: "Neubauabdichtung",
    text: [
      "Bei Neubauten ist eine effektive Abdichtung von Beginn an wichtig, um spätere Schäden und hohe Sanierungskosten zu vermeiden.",
      "Dazu gehören unter anderem vertikale Abdichtungen, die Abdichtung der Bodenplatte und das Abdichten von Durchdringungen.",
    ],
  },
  {
    image: "/assets/2024/02/IMG_2409-e1692367109622-768x1024-1.jpg.webp",
    icon: "◌",
    label: "Injektionstechnik",
    title: "Nachhaltig abdichten",
    text: [
      "Injektionstechniken erreichen gezielt Risse, Fugen oder Hohlräume und können eine schützende Barriere gegen Feuchtigkeit schaffen.",
      "Schleierinjektionen oder Flächeninjektionen können unter passenden Bedingungen eine effiziente Alternative zu größeren Baumaßnahmen sein.",
    ],
  },
];

export default function Gebaeudeabdichtung() {
  return (
    <main id="main">
      <section className="relative overflow-hidden bg-[#1f2a24] px-6 py-32 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(217,180,111,0.22),_transparent_34rem)]" />

        <div className="relative mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#d9b46f]">
            Gebäudeabdichtung · Kellerabdichtung · Osnabrück
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-tight md:text-6xl">
            Gebäude dauerhaft gegen Feuchtigkeit schützen.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/75">
            Eine fachgerechte Gebäudeabdichtung schützt Bauwerke langfristig vor
            Feuchtigkeit, Schäden und Wertverlust — im Altbau, Neubau und durch
            moderne Injektionstechniken.
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
      </section>

      <section className="bg-[#f8f6f1] px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-3">
          {cards.map((card) => (
            <article
              key={card.title}
              className="overflow-hidden rounded-[2rem] bg-white shadow-xl transition hover:-translate-y-2"
            >
              <img
                src={card.image}
                alt={card.title}
                className="h-64 w-full object-cover"
              />

              <div className="p-8">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#3f4a3c] text-2xl text-white">
                  {card.icon}
                </div>

                <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#8a5a32]">
                  {card.label}
                </p>

                <h2 className="mt-3 text-2xl font-black text-[#1f2933]">
                  {card.title}
                </h2>

                {card.text.map((paragraph) => (
                  <p key={paragraph} className="mt-4 leading-7 text-slate-600">
                    {paragraph}
                  </p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#ebe7df] px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#8a5a32]">
              Vorgehensweise
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight text-[#1f2933] md:text-5xl">
              Erst analysieren. Dann passend abdichten.
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["Ursache erkennen", "Feuchtigkeit kann durch Risse, aufsteigende Feuchte, Durchdringungen oder fehlende Abdichtung entstehen."],
              ["Maßnahme wählen", "Die Abdichtung wird passend zu Gebäude, Material, Schaden und Nutzung gewählt."],
              ["Langfristig schützen", "Ziel ist nicht nur eine schnelle Reparatur, sondern dauerhafter Schutz und Werterhalt der Bausubstanz."],
            ].map(([title, text]) => (
              <div key={title} className="rounded-2xl bg-white p-6 shadow-lg">
                <h3 className="font-black text-[#1f2933]">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}