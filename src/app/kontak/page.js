"use client";

import FormKontak from "@/components/FormKontak";

export default function HalamanKontak() {
  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-10 font-sans text-slate-800 w-full">
      <h1 className="text-3xl font-bold text-utama dark:text-sky-200 md:text-4xl">Hubungi Saya</h1>
      <p className="mt-3 text-gray-700">
        Punya pertanyaan atau ingin bekerja sama? Isi form berikut.
      </p>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 items-stretch w-full">
      <div className="mt-6 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <FormKontak />
      </div>

      <div className="bg-white p-6 md:p-8 rounded-xl border border-gray-200 shadow-sm w-full h-full flex flex-col justify-start">
        <h2 className="text-lg font-bold text-slate-900 mb-4">Temukan Saya di</h2>
        <div className="flex flex-col space-y-3 text-sm">
            <a
              href="https://github.com/rbyarthaaa"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-600 hover:underline font-medium inline-block">
                Github
              </a>
              <a 
              href="mailto:ribykanesa1@gmail.com"
              className="text-red-600 hover:underline font-medium inline-block break-all">
                ribykanesa1@gmail.com
              </a>
            </div> 
        </div>
      </div>
    </main>
  );
}
