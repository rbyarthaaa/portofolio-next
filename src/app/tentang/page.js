import Kartu from "@/components/Kartu";

export const metadata = {
  title: "Tentang",
  description: "Cerita, hobi, cita cita, dan jadwal belajar Riby Arta Dinata.",
};

export default function Tentang() {
return (
   <main className="mx-auto max-w-5xl px-4 py-10">
     <h1 className="text-3xl font-bold text-utama md:text-4xl">Tentang Saya</h1>
     <nav className="flex flex-wrap justify-center gap-4"></nav>

        <div id="tentang">
          <Kartu judul="About">
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

    </main>
 );
}
