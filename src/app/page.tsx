
import Hero from "@/components/Hero";
import SkillCard from "@/components/SkillCard";
import Kartu from "@/components/Kartu";

const skills = [
  { nama: "HTML", level: "Menengah" },
  { nama: "CSS", level: "Menengah" },
  { nama: "JavaScript", level: "Dasar" },
  { nama: "Git & GitHub", level: "Dasar" },
  { nama: "Desain poster dengan Canva", level: "Mahir" },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-latar text-stone-800">
      <div className="mx-auto w-full max-w-4xl flex-1 space-y-8 px-5 py-10">
        <Hero
          nama="Riby Arta Dinata"
          tagline="Siswi kelas X RPL SMKN 1 Kepanjen yang sedang belajar menjadi Junior Web Developer."
        />

        <nav className="flex flex-wrap justify-center gap-4">
          <a
            href="#tentang"
            className="rounded-full bg-aksen px-5 py-3 text-white">
            Tentang Saya
          </a>
          <a
            href="#keahlian"
            className="rounded-full border border-stone-300 px-5 py-3">
            Lihat Keahlian
          </a>
        </nav>

        <div id="tentang">
          <Kartu judul="Tentang Saya">
            Hai! saya Riby Arta Dinata siswi kelas X RPL 1 di SMKN 1 KEPANJEN. Saya memiliki ketertarikan untuk mempelajari teknologi dan saya berdedikasi tinggi untuk bisa mempelajari lebih dalam mengenai teknologi, dan dapat mengembangkan usaha kecil melalui teknologi.
          </Kartu>
        </div>

        <Kartu judul="Hobi">
          <ul className="list-inside list-disc space-y-2">
            <li>Memabaca novel</li>
            <li>Mempelajari hal baru</li>
            <li>Bermain game</li>
          </ul>
        </Kartu>

        <Kartu judul="Cita-cita">
          Saya ingin menjadi Web Developer yang profesional dan ingin menjadi seorang Cybersecurity. Saya akan terus belajar, berlatih, dan mengembangkan kemampuan saya.
        </Kartu>

        <section id="keahlian">
          <div className="bg-white p-5 rounded-xl shadow-sm border-gray-100">
          <h2 className="mb-4 text-2xl font-bold">Keahlian</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {skills.map((skill) => (
              <SkillCard
                key={skill.nama}
                nama={skill.nama}
                level={skill.level}
             />
            ))}
          </div>
          </div>
        </section>

        <Kartu judul="Jadwal Belajar">
            <div className="overflow-x-auto rounded-xl border border-slate-200">
              <table className="w-full border-collapse text-left text-sm">
                <thead className="bg-[#233f8b] text-white">
                  <tr className="border-b border-slate-200">
                    <th className="p-3">Hari</th>
                    <th className="p-3">Waktu</th>
                    <th className="p-3">Kegiatan</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-200">
                    <td className="p-3">Senin</td>
                    <td className="p-3">18.00-20.30</td>
                    <td className="p-3">Mempelajari materi pemrograman</td>
                  </tr>
                  <tr className="border-b border-slate-200">
                    <td className="p-3">Kamis</td>
                    <td className="p-3">18.00-21.00</td>
                    <td className="p-3">Latihan membuat website</td>
                  </tr>
                  <tr>
                    <td className="p-3">Jumat</td>
                    <td className="p-3">18.00-21.00</td>
                    <td className="p-3">Membuat video dan mencatat rangkuman</td>
                  </tr>
                </tbody>
              </table>
          </div>
        </Kartu>

      </div>
      <footer className="mt-auto w-full bg-[#233f8b] px-5 py-5 text-center text-white">
        © 2026 Riby Arta Dinata · Dibuat dengan Next.js di Kelas Industri UBIG.
      </footer>
    </main>
  );
}
