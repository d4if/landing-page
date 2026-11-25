export type ProjectCategory = "website" | "iot" | "algorithm";

export interface Student {
  id: number;
  name: string;
  title: string;
  description: string;
  image: string;
  category: ProjectCategory;
  linkedin?: string;
  github?: string;
  previewUrl?: string; // only for website projects
  tags?: string[];
}

export const students: Student[] = [
  {
    id: 1,
    name: "Andi Pratama",
    title: "Sistem Manajemen Inventaris Berbasis Web",
    description:
      "Aplikasi manajemen inventaris real-time menggunakan React dan Node.js, dilengkapi dengan dashboard analitik, notifikasi stok rendah, dan laporan otomatis.",
    image: "https://assets.awwwards.com/awards/media/cache/thumb_440_330/submissions/2026/08/6a91e8b319757765670210.png",
    category: "website",
    previewUrl: "https://inventaris-demo.vercel.app",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    tags: ["React", "Node.js", "PostgreSQL"],
  },
  {
    id: 2,
    name: "Siti Rahayu",
    title: "Algoritma Metaheuristik Nutracker Optimization",
    description:
      "Model machine learning berbasis CNN untuk mendeteksi penyakit tanaman dari foto daun dengan akurasi 94%, diimplementasikan sebagai aplikasi mobile lintas platform.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROE35EMfQx2q8-G9phcYZsDPGLscjahoQniY0M4zi7tw&s=10",
    category: "algorithm",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    tags: ["Python", "TensorFlow", "Flutter"],
  },
  {
    id: 3,
    name: "Budi Santoso",
    title: "Platform E-Commerce UMKM Lokal",
    description:
      "Platform e-commerce khusus UMKM lokal dengan fitur pembayaran digital, manajemen toko, dan rekomendasi produk berbasis preferensi pengguna.",
    image: "https://assets.awwwards.com/awards/media/cache/thumb_440_330/submissions/2026/09/6aa96cbdbc596251576037.jpg",
    category: "website",
    previewUrl: "https://umkm-ecommerce.vercel.app",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    tags: ["Next.js", "Stripe", "MongoDB"],
  },
  {
    id: 4,
    name: "Dewi Lestari",
    title: "Smart Locker IoT",
    description:
      "Jaringan sensor IoT untuk memantau kualitas udara secara real-time dengan visualisasi data pada peta interaktif dan sistem peringatan dini berbasis threshold.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1YJ9nbijIWg155C8GUZphZt83WZG-UZSW3dxhnJKgWQ&s=10",
    category: "iot",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    tags: ["Arduino", "MQTT", "Vue.js"],
  },
  {
    id: 5,
    name: "Reza Firmansyah",
    title: "Chatbot Layanan Mahasiswa Berbasis NLP",
    description:
      "Chatbot cerdas untuk layanan mahasiswa kampus menggunakan NLP dan model bahasa Indonesia, mampu menjawab pertanyaan seputar akademik, keuangan, dan fasilitas kampus.",
    image: "https://picsum.photos/seed/student5/600/400",
    category: "algorithm",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    tags: ["Python", "FastAPI", "Transformers"],
  },
  {
    id: 6,
    name: "Maya Putri",
    title: "Aplikasi Jadwal & Manajemen Tugas Mahasiswa",
    description:
      "Aplikasi produktivitas all-in-one untuk mahasiswa dengan fitur kalender terintegrasi, pengingat deadline, kolaborasi kelompok, dan sinkronisasi lintas perangkat.",
    image: "https://assets.awwwards.com/awards/media/cache/thumb_440_330/submissions/2026/07/6a63881ddaa14991068741.jpg",
    category: "website",
    previewUrl: "https://taskmanager-mhs.vercel.app",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    tags: ["React Native", "Firebase", "TypeScript"],
  },
  {
    id: 7,
    name: "Fajar Nugroho",
    title: "Smart Home Automation dengan ESP32",
    description:
      "Sistem otomasi rumah berbasis ESP32 yang mengintegrasikan kontrol lampu, AC, dan keamanan melalui aplikasi mobile dengan komunikasi MQTT dan notifikasi real-time.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgh4tE9ku00ZTqbDE0c1gLm92KERk3_lxfgkmKNiwY4A&s=10",
    category: "iot",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    tags: ["ESP32", "MQTT", "React Native"],
  },
  {
    id: 8,
    name: "Rina Kusuma",
    title: "Algoritma Dijkstra untuk Rute Optimal Kampus",
    description:
      "Implementasi algoritma Dijkstra untuk menemukan rute terpendek antar gedung di kampus, dilengkapi visualisasi graf interaktif dan perbandingan dengan algoritma A*.",
    image: "https://picsum.photos/seed/student8/600/400",
    category: "algorithm",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    tags: ["Python", "NetworkX", "Matplotlib"],
  },
];
