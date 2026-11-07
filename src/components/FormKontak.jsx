"use client";

import { useState } from "react";

const kelasInput = "mt-1 w-full rounded-lg border border-gray-300 bg-white p-2";

export default function FormKontak() {
    const [nama, setNama] = useState("");
    const [email, setEmail] = useState("");
    const [hp, setHp] = useState("");
    const [keperluan, setKeperluan] = useState("");
    const [pesan, setPesan] = useState("");
    const [error, setError] = useState({});

    function kirim(e) {
        e.preventDefault();
        const errorBaru = {};

        if (nama.trim() === "") {
            errorBaru.nama = "Nama wajib diisi.";
        }
        const emailInput = e.currentTarget.elements.namedItem("email");
        if (email.trim() === "" || !emailInput.validity.valid) {
            errorBaru.email = "Masukkan alamat email yang valid, contoh nama@gmail.com.";
        }
        const jumlahAngkaHp = [...hp].filter((karakter) =>
            "0123456789".includes(karakter)
        ).length;
        if (hp.trim() !== "" && jumlahAngkaHp < 10) {
            errorBaru.hp = "Nomor telepon harus berisi minimal 10 angka.";
        }
        if (keperluan === "") {
            errorBaru.keperluan = "Pilih salah satu keperluan.";
        }
        if (pesan.trim().length < 8) {
            errorBaru.pesan = "Pesan minimal 8 huruf.";
        }

        setError(errorBaru);
    }

        return (
            <form onSubmit={kirim} noValidate className="space-y-4">
                <div>
                    <label htmlFor="nama" className="block font-semibold">
                        Nama Lengkap
                    </label>
                    <input
                      type="text"
                      id="nama"
                      name="nama"
                      value={nama}
                      onChange={(e) => setNama(e.target.value)}
                      placeholder="Contoh: Artha Dinata"
                      aria-invalid={Boolean(error.nama)}
                      aria-describedby={error.nama ? "nama-error" : undefined}
                      className={kelasInput}
                      />
                      {error.nama && <p id="nama-error" role="alert" className="mt-1 text-sm text-aksen">{error.nama}</p>}
                </div>
                <div>
                    <label htmlFor="email" className="block font-semibold">
                        Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="nama@gmail.com"
                      aria-invalid={Boolean(error.email)}
                      aria-describedby={error.email ? "email-error" : undefined}
                      className={kelasInput}
                      />
                      {error.email && <p id="email-error" role="alert" className="mt-1 text-sm text-aksen">{error.email}</p>}
                </div>
                <div>
                    <label htmlFor="telepon" className="block font-semibold">
                         Nomor telepon{" "}
                    <span className="font-normal text-gray-500">(opsional)</span>
                    </label>
                    <input
                      type="tel"
                      id="telepon"
                      name="telepon"
                      value={hp}
                      onChange={(e) => setHp(e.target.value)}
                      autoComplete="tel"
                      placeholder="Masukkan nomor telepon"
                      aria-invalid={Boolean(error.hp)}
                      aria-describedby={error.hp ? "telepon-error" : undefined}
                      className={kelasInput}
                      />
                      {error.hp && <p id="telepon-error" role="alert" className="mt-1 text-sm text-aksen">{error.hp}</p>}
                </div>
                <div>
                    <label htmlFor="keperluan" className="block font-semibold">
                       Keperluan
                    </label>
                    <select
                      id="keperluan"
                      name="keperluan"
                      value={keperluan}
                      onChange={(e) => setKeperluan(e.target.value)}
                      aria-invalid={Boolean(error.keperluan)}
                      aria-describedby={error.keperluan ? "keperluan-error" : undefined}
                      className={kelasInput}
                    >
                    <option value="" disabled>
                        Pilih keperluan
                    </option>
                    <option value="Pertanyaan">Pertanyaan</option>
                    <option value="Kerja sama">Kerja sama</option>
                    <option value="Lainnya">Lainnya</option>
                    </select>
                    {error.keperluan && <p id="keperluan-error" role="alert" className="mt-1 text-sm text-aksen">{error.keperluan}</p>}
                </div>
                <div>
                    <label htmlFor="pesan" className="block font-semibold">
                       Pesan
                    </label>
                    <textarea
                      id="pesan"
                      name="pesan"
                      value={pesan}
                      onChange={(e) => setPesan(e.target.value)}
                      placeholder="Tulis pesan kamu"
                      rows={5}
                      aria-invalid={Boolean(error.pesan)}
                      aria-describedby={error.pesan ? "pesan-error" : undefined}
                      className={kelasInput}
                    />
                    {error.pesan && <p id="pesan-error" role="alert" className="mt-1 text-sm text-aksen">{error.pesan}</p>}
                </div>
                <button
                  type="submit"
                  className="rounded-md bg-utama px-5 py-3 font-semibold text-white hover:bg-aksen focus:outline-none focus:ring-2 focus:ring-aksen focus:ring-offset-2"
                >
                    Kirim pesan
                </button>
            </form>
        );
}