import Link from "next/link";
import FilterProyek from "@/components/FilterProyek";
import Hero from "@/components/Hero";
import ProyekCard from "@/components/ProyekCard";
import SkillCard from "@/components/SkillCard";
import { supabase } from "@/lib/supabase";
import { buttonVariants } from "@/components/ui/button";

export const instant = false;

export default async function Home() {
  const { data: skills } = await supabase
    .from("skills")
    .select("*")
    .order("id")
  const { data: proyekDariSupabase } = await supabase
    .from("projects")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(3);

  return (
    <main className="flex min-h-screen flex-col bg-latar text-stone-800">
      <div className="mx-auto w-full max-w-4xl flex-1 space-y-8 px-5 py-10">
        <Hero
          nama="Riby Arta Dinata"
          tagline="Siswi kelas X RPL SMKN 1 Kepanjen yang sedang belajar menjadi Junior Web Developer."
        />

        <nav className="flex flex-wrap justify-center gap-4">
        <div className="flex rounded-lg bg-utama">
          <Link href="/proyek" className={buttonVariants ({ size: "lg" })}>
             Lihat Proyek
          </Link>
        </div>
          <Link href="/kontak" className={buttonVariants({ variant: "outline", size: "lg" })}>
              Hubungi Saya
          </Link>
        </nav>


        <section id="keahlian">
          <h2 className="mb-4 text-2xl font-bold">Keahlian</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {skills && skills.map((skill) => (
              <SkillCard
                key={skill.nama}
                nama={skill.nama}
                level={skill.level}
             />
            ))}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="mb-4 text-2xl font-bold text-primary">Proyek Terbaru</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {(proyekDariSupabase ?? []).map((item) => (
              <ProyekCard key={item.slug} proyek={item} />
            ))}
          </div>
          <Link
            href="/proyek" className="mt-6 inline-block rounded-lg bg-utama px-5 py-2 font-semibold text-white">
            Lihat semua proyek
          </Link>
        </section>
      </div>
    </main>
  );
}
