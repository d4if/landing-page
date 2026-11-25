export interface Student {
  id: number;
  name: string;
  title: string;
  description: string;
  image: string;
  linkedin?: string;
  github?: string;
  tags?: string[];
}

export const students: Student[] = [
  {
    id: 1,
    name: "Andi Pratama",
    title: "Sistem Manajemen Inventaris Berbasis Web",
    description:
      "Aplikasi manajemen inventaris real-time menggunakan React dan Node.js, dilengkapi dengan dashboard analitik, notifikasi stok rendah, dan laporan otomatis.",
    image: "https://picsum.photos/seed/student1/600/400",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    tags: ["React", "Node.js", "PostgreSQL"],
  },
  {
    id: 2,
    name: "Siti Rahayu",
    title: "Aplikasi Deteksi Penyakit Tanaman dengan AI",
    description:
      "Model machine learning berbasis CNN untuk mendeteksi penyakit tanaman dari foto daun dengan akurasi 94%, diimplementasikan sebagai aplikasi mobile lintas platform.",
    image: "https://picsum.photos/seed/student2/600/400",
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
    image: "https://picsum.photos/seed/student3/600/400",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    tags: ["Next.js", "Stripe", "MongoDB"],
  },
  {
    id: 4,
    name: "Dewi Lestari",
    title: "Sistem Pemantauan Kualitas Udara IoT",
    description:
      "Jaringan sensor IoT untuk memantau kualitas udara secara real-time dengan visualisasi data pada peta interaktif dan sistem peringatan dini berbasis threshold.",
    image: "https://picsum.photos/seed/student4/600/400",
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
    image: "https://picsum.photos/seed/student6/600/400",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    tags: ["React Native", "Firebase", "TypeScript"],
  },
];
