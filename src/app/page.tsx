import Link from "next/link";
import Hero from "@/components/Hero";
import ProyekCard from "@/components/ProyekCard";
import SkillCard from "@/components/SkillCard";
import { proyek } from "@/data/proyek";

const skills = [
  { nama: "HTML", level: "Menengah" },
  { nama: "CSS", level: "Menengah" },
  { nama: "JavaScript", level: "Dasar" },
  { nama: "Git & GitHub", level: "Dasar" },
  { nama: "Desain poster dengan Canva", level: "Mahir" },
];

const proyekTerbaru = proyek.slice(-3);

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


        <section id="keahlian">
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
        </section>

        <section className="mt-10">
          <h2 className="mb-4 text-2xl font-bold text-utama">Proyek Terbaru</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {proyekTerbaru.map((item) => (
              <ProyekCard key={item.slug} proyek={item} />
            ))}
          </div>
          <Link href="/proyek" className="mt-6 inline-block rounded-lg bg-utama px-5 py-2 font-semibold text-white">
            Lihat semua proyek
          </Link>
        </section>
      </div>
    </main>
  );
}
