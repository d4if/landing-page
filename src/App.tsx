import Card from "./components/Card";
import { students } from "./data/students";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      {/* ── Header / Hero ── */}
      <header className="relative overflow-hidden bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        {/* decorative blobs */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 -left-24 w-96 h-96 rounded-full bg-purple-200/40 dark:bg-purple-900/30 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-24 -right-16 w-80 h-80 rounded-full bg-indigo-200/40 dark:bg-indigo-900/30 blur-3xl"
        />

        <div className="relative mx-auto max-w-6xl px-6 py-16 text-center">
          <span className="inline-block mb-4 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300">
            Showcase Mahasiswa
          </span>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-4 leading-tight">
            Karya Terbaik
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-500">
              {" "}
              Mahasiswa
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-base md:text-lg text-gray-500 dark:text-gray-400">
            Koleksi proyek dan inovasi yang dikembangkan oleh mahasiswa berbakat
            kami — dari aplikasi web, mobile, hingga kecerdasan buatan.
          </p>

          {/* Stats */}
          <div className="mt-10 flex flex-wrap justify-center gap-6">
            {[
              { label: "Karya Ditampilkan", value: `${students.length}+` },
              { label: "Mahasiswa Aktif", value: "120+" },
              { label: "Teknologi Digunakan", value: "30+" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center px-6 py-3 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700"
              >
                <span className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                  {stat.value}
                </span>
                <span className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* ── Main Content ── */}
      <main className="mx-auto max-w-6xl px-6 py-14">
        {/* Section heading */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              Semua Karya
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">
              {students.length} proyek ditemukan
            </p>
          </div>
          {/* Decorative divider */}
          <div className="hidden sm:block h-px flex-1 mx-6 bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" />
        </div>

        {/* Grid of cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {students.map((student) => (
            <Card key={student.id} student={student} />
          ))}
        </div>
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
