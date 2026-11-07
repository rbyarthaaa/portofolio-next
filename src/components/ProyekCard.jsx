import Image from "next/image";
import Link from "next/link";

export default function ProyekCard({ proyek }) {
    return (
        <Link
          href={`/proyek/${proyek.slug}`}
          className="block overflow-hidden rounded-xl border border-gray-200 bg-white shadow hover:shadow-md">
            <Image
                src={proyek.gambar}
                alt={proyek.judul}
                width={640}
                height={420}
            />
            <div className="p-5">
                <div className="flex flex-wrap gap-2">{proyek.kategori.map((kategori) => (
                    <span key={kategori} 
                          className="rounded-full bg-latar px-3 py-1 text-xs font-semibold text-utama dark:text-sky-200">
                          {kategori}
                    </span>
                ))}</div>
                <h3 className="mt-3 text-lg font-semibold text-utama dark:text-sky-200">{proyek.judul}</h3>
                <p className="mt-1 text-sm text-gray-600">{proyek.deskripsi}</p>
            </div>
          </Link>
    );
}