import { Archive, ArchiveRestore, Trash2 } from "lucide-react";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HeaderNote from "../components/atoms/Header";
import CardNote from "../components/molecules/CardNote";
import FormInput from "../components/molecules/FormInput";
import Layout from "../layouts";
import { formatDate } from "../lib/helpers/formatDate";
import { generateNoteId } from "../lib/utils/generateNoteId";
import { initialNotesData } from "../lib/utils/initialDataNotes";

const Notes = () => {
  const [notes, setNotes] = useState(initialNotesData);
  const [filterSearch, setFilterSearch] = useState("");
  const [resetTrigger, setResetTrigger] = useState(false);

  const handleSubmit = (e, title, description) => {
    e.preventDefault();

    const newNote = {
      id: generateNoteId(),
      title,
      body: description,
      archived: false,
      createdAt: formatDate(new Date()),
    };

    setNotes((prevNotes) => [...prevNotes, newNote]);

    toast.success("Catatan berhasil ditambahkan!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });

    setResetTrigger((prev) => !prev);
  };

  const handleArchive = (id) => {
    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id === id ? { ...note, archived: true } : note
      )
    );
    toast.info("Catatan berhasil diarsipkan!", {
      position: "top-right",
      autoClose: 3000,
    });
  };

  const handleRestore = (id) => {
    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id === id ? { ...note, archived: false } : note
      )
    );
    toast.success("Catatan berhasil dikembalikan!", {
      position: "top-right",
      autoClose: 3000,
    });
  };

  const handleDelete = (id) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
    toast.error("Catatan berhasil dihapus!", {
      position: "top-right",
      autoClose: 3000,
    });
  };

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(filterSearch.toLowerCase())
  );

  const activeNotes = filteredNotes.filter((note) => !note.archived);
  const archivedNotes = filteredNotes.filter((note) => note.archived);

  return (
    <>
      <HeaderNote
        filterSearch={filterSearch}
        setFilterSearch={setFilterSearch}
      />
      <Layout
        children1={
          <FormInput handleSubmit={handleSubmit} resetTrigger={resetTrigger} />
        }
        children2={
          <div className="flex flex-col space-y-4">
            {activeNotes.length > 0 ? (
              activeNotes.map((note) => (
                <CardNote
                  key={note.id}
                  title={note.title}
                  date={note.createdAt}
                  description={note.body}
                  icon={
                    <div className="flex space-x-2">
                      <button onClick={() => handleArchive(note.id)}>
                        <Archive />
                      </button>
                      <button onClick={() => handleDelete(note.id)}>
                        <Trash2 />
                      </button>
                    </div>
                  }
                />
              ))
            ) : (
              <p>Tidak ada catatan</p>
            )}
          </div>
        }
        children3={
          <div className="flex flex-col space-y-4">
            {archivedNotes.length > 0 ? (
              archivedNotes.map((note) => (
                <CardNote
                  key={note.id}
                  title={note.title}
                  date={note.createdAt}
                  description={note.body}
                  icon={
                    <div className="flex space-x-2">
                      <button onClick={() => handleRestore(note.id)}>
                        <ArchiveRestore />
                      </button>
                      <button onClick={() => handleDelete(note.id)}>
                        <Trash2 />
                      </button>
                    </div>
                  }
                />
              ))
            ) : (
              <p>Tidak ada catatan yang diarsipkan</p>
            )}
          </div>
        }
      />
      <ToastContainer />
    </>
  );
};

export default Notes;
