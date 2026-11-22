import  Link from "next/link";

export default function Keahlian() {
  const keahlian = [
    {
      nama: "HTML",
      slug: "html",
      level: "Menengah",
    },
    {
      nama: "CSS",
      slug: "css",
      level: "Menengah",
    },
    {
      nama: "GitHub",
      slug: "github",
      level: "Dasar",
    },
    {
      nama: "Desain poster dengan Canva",
      slug: "canva",
      level: "Mahir",
    },
    {
      nama: "JavaScript",
      slug: "javascript",
      level: "Dasar",
    },
  ];

  return (
    <main className="keahlian-page">
      <section className="keahlian-container">
        <h1>Keahlian Saya</h1>

        <p className="deskripsi-keahlian">
          Daftar kompetensi dan keahlian yang telah dan sedang saya pelajari.
          Pilih keahlian untuk membaca keterangannya.
        </p>

        <div className="grid-keahlian">
          {keahlian.map((item, index) => (
            <div className="card-keahlian" key={index}>
              <h2>{item.nama}</h2>

              <p className="level-keahlian">
                Level: {item.level}
              </p>

              <p className="detail-keahlian">
                {item.deskripsi}
              </p>

              <Link href={`/keahlian/${item.slug}`} className="link-detail">
                 Lihat detail →
              </Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}