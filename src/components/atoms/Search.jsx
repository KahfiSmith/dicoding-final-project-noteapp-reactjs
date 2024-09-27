import { Search } from "lucide-react";
import Input from "./Input";

const SearchNote = ({ filterSearch, setFilterSearch }) => {
  return (
    <div className="relative flex items-center w-96">
      <Search className="absolute left-2 text-slate-400" />
      <Input
        value={filterSearch}
        onChange={(event) => setFilterSearch(event.target.value)}
        placeholder="Cari catatan..."
        className="pl-10"
      />
    </div>
  );
};

export default SearchNote;
