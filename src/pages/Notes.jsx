import { useState } from "react";
import CardNote from "../components/molecules/CardNote";
import HeaderNote from "../components/atoms/Header";
import Layout from "../layouts";
import FormInput from "../components/molecules/FormInput";
import { Archive, ArchiveRestore } from "lucide-react";

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
            <CardNote
              title="Belajar React Dicoding"
              date="10 Januari 2023"
              description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam modi ex numquam cupiditate incidunt rerum nihil. Unde, voluptatum exercitationem"
              icon={<Archive />}
            />
            <CardNote
              title="Belajar React Dicoding"
              date="10 Januari 2023"
              description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam modi ex numquam cupiditate incidunt rerum nihil. Unde, voluptatum exercitationem"
              icon={<Archive />}
            />
          </div>
        }
        children3={
          <div className="flex flex-col space-y-4">
            <CardNote
              title="Belajar React Dicoding"
              date="10 Januari 2023"
              description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam modi ex numquam cupiditate incidunt rerum nihil. Unde, voluptatum exercitationem"
              icon={<ArchiveRestore />}
            />
            <CardNote
              title="Belajar React Dicoding"
              date="10 Januari 2023"
              description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam modi ex numquam cupiditate incidunt rerum nihil. Unde, voluptatum exercitationem"
              icon={<ArchiveRestore />}
            />
          </div>
        }
      />
    </>
  );
};

export default Notes;
