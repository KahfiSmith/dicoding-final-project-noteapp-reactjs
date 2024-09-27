import { useState } from "react";
import CardNote from "../components/molecules/CardNote";
import HeaderNote from "../components/atoms/Header";

const Notes = () => {
  const [filterSearch, setFilterSearch] = useState("");
  return (
    <>
      <HeaderNote filterSearch={filterSearch} setFilterSearch={setFilterSearch} />
      <div className="flex justify-around p-6">
        <CardNote
          title="Belajar React Dicoding"
          date="10 Januari 2023"
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam modi ex numquam cupiditate incidunt rerum nihil. Unde, voluptatum exercitationem"
        />
      </div>
    </>
  );
};

export default Notes;
