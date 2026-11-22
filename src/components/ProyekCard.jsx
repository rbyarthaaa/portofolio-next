import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const kategoriBadge = {
    html: "html",
    css: "css",
    javascript: "javascript",
    "next.js": "nextjs",
};

export default function ProyekCard({ proyek }) {
    const kategori = Array.isArray(proyek.kategori)
        ? proyek.kategori
        : [proyek.kategori];

    return (
        <Link
            href={`/proyek/${proyek.slug}`}
            className="block h-full rounded-xl transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
            <Card className="h-full gap-0 border border-gray-200 bg-white p-0 shadow-sm transition-shadow hover:shadow-lg">
            <Image
                src={proyek.gambar_url}
                alt={`Tangkapan layar ${proyek.judul}`}
                width={640}
                height={420}
                loading="eager"
                className="aspect-video w-full object-cover"
            />
            <CardHeader className="gap-2">
                <div className="flex flex-wrap gap-2">
                    {kategori
                        .filter((item) => typeof item === "string" && item.trim())
                        .map((item) => {
                            const nama = item.trim();
                            const variant = kategoriBadge[nama.toLowerCase()] ?? "outline";

                            return (
                                <Badge key={nama} variant={variant}>
                                    {nama}
                                </Badge>
                            );
                        })}
                </div>
                <CardTitle className="text-lg text-primary">{proyek.judul}</CardTitle>
                <CardDescription>{proyek.deskripsi}</CardDescription>
            </CardHeader>
            </Card>
          </Link>
    );
}