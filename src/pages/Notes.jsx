import { useState } from "react";
import CardNote from "../components/molecules/CardNote";
import HeaderNote from "../components/atoms/Header";
import Layout from "../layouts";
import FormInput from "../components/molecules/FormInput";
import { Archive, ArchiveRestore } from "lucide-react";
import { notesData as initialNotesData } from "../utils/initialDataNotes";
import { generateNoteId } from "../utils/generateNoteId"; // Impor fungsi generateNoteId
import { formatDate } from "../utils/formatDate"; // Impor fungsi formatDate

const Notes = () => {
  const [notes, setNotes] = useState(initialNotesData); // Menggunakan data awal
  const [filterSearch, setFilterSearch] = useState("");

  // Fungsi untuk menangani penambahan catatan baru
  const handleSubmit = (e, title, description) => {
    e.preventDefault(); // Mencegah form reload halaman

    const newNote = {
      id: generateNoteId(notes), // Menggunakan fungsi generateNoteId untuk membuat ID baru
      title, // Input dari form
      body: description, // Input dari form
      archived: false, // Default: tidak diarsipkan
      createdAt: formatDate(new Date()), // Menggunakan formatDate untuk memformat tanggal
    };

    // Menambahkan catatan baru ke state
    setNotes([...notes, newNote]);
  };

  return (
    <>
      <HeaderNote
        filterSearch={filterSearch}
        setFilterSearch={setFilterSearch}
      />
      <Layout
        // Form input untuk menambah catatan baru
        children1={<FormInput handleSubmit={handleSubmit} />}
        // Menampilkan catatan yang belum diarsipkan
        children2={
          <div className="flex flex-col space-y-4">
            {notes
              .filter((note) => !note.archived)
              .map((note) => (
                <CardNote
                  key={note.id}
                  title={note.title}
                  date={note.createdAt} // Tanggal sudah diformat
                  description={note.body}
                  icon={<Archive />}
                />
              ))}
          </div>
        }
        // Menampilkan catatan yang diarsipkan
        children3={
          <div className="flex flex-col space-y-4">
            {notes
              .filter((note) => note.archived)
              .map((note) => (
                <CardNote
                  key={note.id}
                  title={note.title}
                  date={note.createdAt} // Tanggal sudah diformat
                  description={note.body}
                  icon={<ArchiveRestore />}
                />
              ))}
          </div>
        }
      />
    </>
  );
};

export default Notes;
