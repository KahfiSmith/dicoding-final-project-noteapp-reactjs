import { generateNoteId } from "./generateNoteId";

const initialNotesData = [
  {
    title: "Babel",
    body: "Babel merupakan tools open-source yang digunakan untuk mengubah sintaks ECMAScript 2015+ menjadi sintaks yang didukung oleh JavaScript engine versi lama. Babel sering dipakai ketika kita menggunakan sintaks terbaru termasuk sintaks JSX.",
    archived: false,
    createdAt: "Minggu, 06 Oktober 2024",
  },
  {
    title: "React",
    body: "React adalah library untuk membangun antarmuka pengguna berbasis komponen. React sangat populer untuk membuat aplikasi frontend modern yang dinamis.",
    archived: false,
    createdAt: "Senin, 07 Oktober 2024",
  },
  {
    title: "Webpack",
    body: "Webpack adalah module bundler yang memudahkan pengembang untuk menggabungkan berbagai berkas (CSS, JavaScript, gambar) ke dalam satu berkas output untuk keperluan produksi.",
    archived: true,
    createdAt: "Selasa, 08 Oktober 2024",
  },
  {
    title: "ESLint",
    body: "ESLint adalah linter untuk JavaScript yang memungkinkan pengembang mendeteksi dan memperbaiki masalah dalam kode JavaScript berdasarkan aturan yang telah ditentukan.",
    archived: true,
    createdAt: "Rabu, 09 Oktober 2024",
  },
];

export const notesData = initialNotesData.map((note, index, allNotes) => ({
  ...note,
  id: generateNoteId(allNotes.slice(0, index)), 
}));