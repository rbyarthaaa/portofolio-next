import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";

const dataKeahlian = {
  html: {
    nama: "HTML",
    level: "Menengah",
    deskripsi:
      "Menyusun struktur halaman web dengan elemen semantik, formulir, tabel, dan media secara teratur.",
  },

  css: {
    nama: "CSS",
    level: "Menengah",
    deskripsi:
      "Mengatur tampilan website menggunakan CSS, termasuk warna, layout, typography, dan responsive design.",
  },

  github: {
    nama: "GitHub",
    level: "Dasar",
    deskripsi:
       "Mempelajari pencatatan code yang beruabah menggunakan Git serta dasar commit dan penyimpanan proyek di GitHub.",
  },

  canva: {
    nama: "Desain poster dengan Canva",
    level: "Mahir",
    deskripsi: 
       "Membuat desain poster dengan canva dengan memperhatikan warna, tata letak, dan tipografi.",
  },

  javascript: {
    nama: "JavaScript",
    level: "Dasar",
    deskripsi:
      "Mempelajari dasar JavaScript untuk membuat website lebih interaktif menggunakan variabel, fungsi, dan event.",
  },

 
};

export default function DetailKeahlian({ params }) {
  return (
    <Suspense
      fallback={
        <main className="detail-keahlian-page">
          <div className="detail-keahlian-container">
            <p>Memuat keahlian...</p>
          </div>
        </main>
      }
    >
      <KontenDetailKeahlian params={params} />
    </Suspense>
  );
}

async function KontenDetailKeahlian({ params }) {
  const { slug } = await params;

  const keahlian = dataKeahlian[slug];

  if (!keahlian) {
    notFound();
  }

  return (
    <main className="detail-keahlian-page">
      <div className="detail-keahlian-container">
        <Link href="/keahlian" className="kembali-keahlian">
          ← Kembali ke daftar keahlian
        </Link>

        <div className="detail-keahlian-card">
          <p className="tingkat-keahlian">
            Tingkat Kemahiran: {keahlian.level}
          </p>

          <h1>{keahlian.nama}</h1>

          <h2>Deskripsi dan Pengalaman</h2>

          <p className="deskripsi-detail">
            {keahlian.deskripsi}
          </p>
        </div>
      </div>
    </main>
  );
}