import { useState } from "react";
import CardNote from "../components/molecules/CardNote";
import HeaderNote from "../components/atoms/Header";
import Layout from "../layouts";
import FormInput from "../components/molecules/FormInput";
import { Archive, ArchiveRestore } from "lucide-react";
import { notesData as initialNotesData } from "../lib/utils/initialDataNotes";
import { generateNoteId } from "../lib/utils/generateNoteId";
import { formatDate } from "../lib/helpers/formatDate";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Notes = () => {
  const [notes, setNotes] = useState(initialNotesData);
  const [filterSearch, setFilterSearch] = useState("");
  const [resetTrigger, setResetTrigger] = useState(false);

  const handleSubmit = (e, title, description) => {
    e.preventDefault();

    const newNote = {
      id: generateNoteId(notes),
      title,
      body: description,
      archived: false,
      createdAt: formatDate(new Date()),
    };

    setNotes([...notes, newNote]);

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
            {notes
              .filter((note) => !note.archived)
              .map((note) => (
                <CardNote
                  key={note.id}
                  title={note.title}
                  date={note.createdAt}
                  description={note.body}
                  icon={<Archive />}
                />
              ))}
          </div>
        }
        children3={
          <div className="flex flex-col space-y-4">
            {notes
              .filter((note) => note.archived)
              .map((note) => (
                <CardNote
                  key={note.id}
                  title={note.title}
                  date={note.createdAt}
                  description={note.body}
                  icon={<ArchiveRestore />}
                />
              ))}
          </div>
        }
      />
      <ToastContainer />
    </>
  );
};

export default Notes;
