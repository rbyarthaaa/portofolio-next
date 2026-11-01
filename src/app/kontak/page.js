"use client";

export default function HalamanKontak() {
  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <main className="mx-auto max-w-5xl px-6 py-12 font-sans text-slate-800 w-full">
      <h1 className="text-3xl font-bold text-utama md:text-4xl">Hubungi Saya</h1>
      <p className="mt-3 text-gray-700">
        Punya pertanyaan atau ingin bekerja sama? Isi form berikut.
      </p>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 items-stretch w-full">
      <form
        onSubmit={handleSubmit}
        className="mt-6 space-y-5 rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
      >
        <div>
          <label htmlFor="nama" className="block font-semibold text-utama">
            Nama lengkap
          </label>
          <input
            type="text"
            id="nama"
            name="nama"
            autoComplete="name"
            placeholder="Masukkan nama lengkap"
            required
            className="mt-1 block w-full rounded-md border border-gray-300 p-3 focus:border-aksen focus:outline-none"
          />
        </div>

        <div>
          <label htmlFor="email" className="block font-semibold text-utama">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="email"
            placeholder="nama@email.com"
            required
            className="mt-1 block w-full rounded-md border border-gray-300 p-3 focus:border-aksen focus:outline-none"
          />
        </div>

        <div>
          <label htmlFor="telepon" className="block font-semibold text-utama">
            Nomor telepon{" "}
            <span className="font-normal text-gray-500">(opsional)</span>
          </label>
          <input
            type="tel"
            id="telepon"
            name="telepon"
            autoComplete="tel"
            placeholder="Masukkan nomor telepon"
            className="mt-1 block w-full rounded-md border border-gray-300 p-3 focus:border-aksen focus:outline-none"
          />
        </div>

        <div>
          <label htmlFor="keperluan" className="block font-semibold text-utama">
            Keperluan
          </label>
          <select
            id="keperluan"
            name="keperluan"
            required
            defaultValue=""
            className="mt-1 block w-full rounded-md border border-gray-300 bg-white p-3 focus:border-aksen focus:outline-none"
          >
            <option value="" disabled>
              Pilih keperluan
            </option>
            <option value="Pertanyaan">Pertanyaan</option>
            <option value="Kerja sama">Kerja sama</option>
            <option value="Lainnya">Lainnya</option>
          </select>
        </div>

        <div>
          <label htmlFor="pesan" className="block font-semibold text-utama">
            Pesan
          </label>
          <textarea
            id="pesan"
            name="pesan"
            placeholder="Tulis pesan kamu"
            required
            rows={5}
            className="mt-1 block w-full rounded-md border border-gray-300 p-3 focus:border-aksen focus:outline-none"
          />
        </div>

        <button
          type="submit"
          className="rounded-md bg-utama px-5 py-3 font-semibold text-white hover:bg-aksen focus:outline-none focus:ring-2 focus:ring-aksen focus:ring-offset-2"
        >
          Kirim pesan
        </button>
      </form>

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
