"use client";

import { useState } from "react";

export default function TombolTema() {
    const [gelap, setGelap] = useState(false);

    function gantiTema() {
        const temaGelap = !gelap;
        document.documentElement.classList.toggle("dark", temaGelap);
        setGelap(temaGelap);
    }

    return (
        <button
          type="button"
          onClick={gantiTema}
          aria-pressed={gelap}
          className="rounded-lg border border-white px-3 py-1 text-sm font-semibold text-white hover:border-aksen hover:bg-aksen"
        >
            {gelap ? "Mode Terang" : "Mode Gelap"}
        </button>
    );
}