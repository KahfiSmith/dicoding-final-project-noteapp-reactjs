import { useState } from "react";
import CardNote from "../components/molecules/CardNote";
import HeaderNote from "../components/atoms/Header";
import Layout from "../layouts";
import FormInput from "../components/molecules/FormInput";
import { Archive, ArchiveRestore } from "lucide-react";
import { notesData } from "../utils/initialDataNotes";

const Notes = () => {
  const [filterSearch, setFilterSearch] = useState("");

  return (
    <>
      <HeaderNote
        filterSearch={filterSearch}
        setFilterSearch={setFilterSearch}
      />
      <Layout
        children1={<FormInput handleSubmit={() => {}} />}
        children2={
          <div className="flex flex-col space-y-4">
            {notesData
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
            {notesData
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
