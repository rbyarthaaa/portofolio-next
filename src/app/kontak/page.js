"use client";

import FormKontak from "@/components/FormKontak";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function HalamanKontak() {
  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-10 font-sans text-slate-800 w-full">
      <h1 className="text-3xl font-bold text-primary md:text-4xl">Hubungi Saya</h1>
      <p className="mt-3 text-gray-700">
        Punya pertanyaan atau ingin bekerja sama? Isi form berikut.
      </p>
      
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 items-stretch w-full">
      <Card className="md:col-span-2">
        <CardContent>
          <FormKontak />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-primary">Temukan Saya di</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            <li>
              <a href="https://github.com/rbyarthaaa" target="_blank" className="text-aksen hover:underline">
                 GitHub
              </a>
            </li>
            <li>
              <a href="mailto:ribykanesa1@gmail.com" className="text-aksen hover:underline">
                ribykanesa1@gmail.com
              </a>
            </li>
          </ul>
        </CardContent>
      </Card>
      </div>
    </main>
  );
}