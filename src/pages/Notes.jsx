import { useState } from "react";
import CardNote from "../components/molecules/CardNote";
import HeaderNote from "../components/atoms/Header";
import Layout from "../layouts";
import FormInput from "../components/molecules/FormInput";
import { Archive, ArchiveRestore } from "lucide-react";
import { notesData as initialNotesData } from "../utils/initialDataNotes";
import { generateNoteId } from "../utils/generateNoteId";
import { formatDate } from "../utils/formatDate";

const Notes = () => {
  const [notes, setNotes] = useState(initialNotesData);
  const [filterSearch, setFilterSearch] = useState("");

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
  };

  return (
    <>
      <HeaderNote
        filterSearch={filterSearch}
        setFilterSearch={setFilterSearch}
      />
      <Layout
        children1={<FormInput handleSubmit={handleSubmit} />}
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
    </>
  );
};

export default Notes;
