export default function InfoCard({ image, icon, label, title, children }) {
  return (
    <article className="overflow-hidden rounded-[2rem] bg-white shadow-xl transition hover:-translate-y-2">
      {image && (
        <img src={image} alt={title} className="h-64 w-full object-cover" />
      )}

      <div className="p-8">
        {icon && (
          <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#3f4a3c] text-2xl text-white">
            {icon}
          </div>
        )}

        {label && (
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#8a5a32]">
            {label}
          </p>
        )}

        <h2 className="mt-3 text-2xl font-black text-[#1f2933]">
          {title}
        </h2>

        <div className="mt-4 space-y-4 leading-7 text-slate-600">
          {children}
        </div>
      </div>
    </article>
  );
}