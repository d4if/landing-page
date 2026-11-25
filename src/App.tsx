import { useState, useMemo } from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import type { NavCategory } from "./components/Header";
import { students } from "./data/students";

const CATEGORY_META: Record<
  NavCategory,
  { heading: string; sub: string }
> = {
  all: {
    heading: "Semua Karya",
    sub: "Seluruh proyek mahasiswa dari berbagai kategori",
  },
  website: {
    heading: "Karya Website",
    sub: "Aplikasi dan platform berbasis web — klik Preview untuk melihat demo langsung",
  },
  iot: {
    heading: "Karya IoT",
    sub: "Proyek perangkat keras, embedded system, dan Internet of Things",
  },
  mobile: {
    heading: "Mobile",
    sub: "Aplikasi berbasis mobile"
  },
  algorithm: {
    heading: "Penerapan Algoritma",
    sub: "Implementasi algoritma, kecerdasan buatan, dan machine learning",
  },
};

export default function App() {
  const [activeCategory, setActiveCategory] = useState<NavCategory>("all");

  const counts = useMemo(() => {
    const c = { all: students.length, website: 0, iot: 0, algorithm: 0 };
    for (const s of students) c[s.category]++;
    return c;
  }, []);

  const filtered = useMemo(
    () =>
      activeCategory === "all"
        ? students
        : students.filter((s) => s.category === activeCategory),
    [activeCategory]
  );

  const meta = CATEGORY_META[activeCategory];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      {/* ── Header (sticky, with 3 category nav links) ── */}
      <Header
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
        counts={counts}
      />

      {/* ── Main Content ── */}
      <main className="mx-auto max-w-6xl px-6 py-14">
        {/* Section heading */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              {meta.heading}
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">
              {filtered.length} proyek ditemukan · {meta.sub}
            </p>
          </div>
          {/* Decorative divider */}
          <div className="hidden sm:block h-px flex-1 mx-6 bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" />
        </div>

        {/* Grid of cards */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((student) => (
              <Card key={student.id} student={student} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-24 text-center text-gray-400 dark:text-gray-600">
            <span className="text-5xl mb-4">📭</span>
            <p className="text-lg font-medium">Belum ada karya di kategori ini</p>
            <p className="text-sm mt-1">Karya akan ditampilkan setelah ditambahkan.</p>
          </div>
        )}
      </main>

      {/* ── Footer ── */}
      <footer className="border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-6xl px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500 dark:text-gray-400">
          <span>
            © {new Date().getFullYear()} Showcase Mahasiswa. All rights
            reserved.
          </span>
          <span className="flex items-center gap-1.5">
            Dibuat dengan
            <span className="text-red-500">♥</span>
            oleh civitas akademika
          </span>
        </div>
      </footer>
    </div>
  );
}
