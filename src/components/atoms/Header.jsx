import SearchNote from "./Search";

const HeaderNote = ({ filterSearch, setFilterSearch }) => {
  return (
    <div className="flex justify-between border-b border-slate-300 p-4 items-center mb-4">
      <h1 className="text-3xl font-semibold">NotesApp</h1>
      <SearchNote
        value={filterSearch}
        onChange={(event) => setFilterSearch(event.target.value)}
      />
    </div>
  );
};

export default HeaderNote;
