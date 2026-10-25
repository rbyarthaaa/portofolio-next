export default function Kartu({ judul, children }) {
  return (
    <section className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
      <h2 className="mb-3 text-xl font-bold text-stone-800">
        {judul}
      </h2>

      <div className="leading-relaxed text-stone-600">
        {children}
      </div>
    </section>
  );
}