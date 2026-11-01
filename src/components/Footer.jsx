import { Suspense } from "react";
import { io } from "next/cache";

async function Tahun() {
    await io();
    return <>&copy; {new Date().getFullYear()}</>;
}

export default function Footer() {
    return (
        <footer className="mt-auto bg-utama p-6 text-center text-latar">
            <p>
                <Suspense fallback={null}>
                    <Tahun />
                </Suspense>{" "}
                Riby Arta Dinata · Dibuat dengan Next.js di Kelas Industri UBIG.
            </p>
        </footer>
    );
}